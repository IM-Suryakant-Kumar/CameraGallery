// Open -> Database
// Create objectstore
// Make transactions
let db;
let openRequest = indexedDB.open("myDatabase", 2);
openRequest.addEventListener("success", (e) => {
  console.log("DB success");
  db = openRequest.result;
});
openRequest.addEventListener("error", (e) => {
  console.log("DB error");
});
openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("DB upgraded and also for initial database creation");
    db = openRequest.result;

    db.createObjectStore("video", {keyPath: "id"});
    db.createObjectStore("image", {keyPath: "id"});
});
