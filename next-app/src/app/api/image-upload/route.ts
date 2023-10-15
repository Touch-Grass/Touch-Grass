import {NextRequest, NextResponse} from "next/server";
import mime from "mime";
import {v4} from "uuid";
import {join} from "path";
import {mkdir, writeFile} from "fs/promises";
import {HttpStatus} from "@/utils/HTTPError/HTTPErrorUtils";
import {Nullable} from "@/models/shared/utility.types";
import {existsSync} from "fs";
import {AuthService} from "@/services/auth/service";

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get("TouchGrass-token")?.value ?? "";
        if (!token) {
            throw new Error("Not authenticated");
        }
        await AuthService.performValidation(token);
    } catch (e) {
        return NextResponse.json({error: "Not authenticated."}, {status: HttpStatus.UNAUTHORIZED});
    }

    const formData = await request.formData();

    const file = formData.get("file") as Nullable<Blob>;
    if (!file) {
        return NextResponse.json({error: "No file supplied"}, {status: HttpStatus.BAD_REQUEST});
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadDir = join(process.cwd(), "public", "uploads");

    if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, {recursive: true});
    }

    try {
        const name = v4();
        const filename = `${name}.${mime.getExtension(file.type)}`;
        await writeFile(`${uploadDir}/${filename}`, buffer);
        return NextResponse.json({url: `/uploads/${filename}`});
    } catch (e) {
        console.error("Error during image upload\n", e);
        return NextResponse.json({error: "Error during image upload."}, {status: HttpStatus.INTERNAL_SERVER_ERROR});
    }
}
