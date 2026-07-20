import supabaseRepo from "./db.js";

supabaseRepo.create("authors", { name: "avi" });

supabaseRepo.create("posts", {
    title: "test",
    content: "this is first test in supabase",
    author_id: 20,
});

supabaseRepo.selectAll("posts")

supabaseRepo.update("authors", {name: "david"}, 20)

supabaseRepo.deleteFromTable("authors", 20)