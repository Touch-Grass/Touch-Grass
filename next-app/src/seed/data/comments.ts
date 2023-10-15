import { IComment } from "@/models/shared/comment/comment.interface";

type CommentGenerator = <U, T>(user: U, trail:T) => IComment<U, T>;

export const COMMENT_ONE: CommentGenerator = <U,T>(user:U, trail: T) => ({
    title: "Awesome Hike!!",
    text: "This was awesome! We even saw a giraffe in the woods, best experience of my life :))",
    date: 4567890,
    commenter: user,
    trail: trail
});

export const COMMENT_TWO: CommentGenerator = <U,T>(user:U, trail: T) => ({
    title: "A Giraffe???",
    text: "What the hell was a giraffe doing on the woods??",
    date: 34567890,
    commenter: user,
    trail: trail
});

export const COMMENT_THREE: CommentGenerator = <U,T>(user:U, trail: T) => ({
    title: "Didn't see a Giraffe",
    text: "We heard news about a giraffe in the woods but didn't see it :(",
    date: 34567890,
    commenter: user,
    trail: trail
});
