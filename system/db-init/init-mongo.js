console.log("\n\nEXECUTING INIT SCRIPT..\n\n");

db.createUser({
    user: "touch-grass",
    pwd: "touch-grass",
    roles: [
        {
            role: "readWrite",
            db: "touch-grass"
        }
    ]
});
console.log("\n\nDB CREATED\n\n");
