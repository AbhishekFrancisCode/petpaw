import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { tables } from "./tables";
// import { app } from "@/store/firebase";

// const db = getFirestore(app);

// async function setAllTablesIfNotExist(tables: Record<string, any[]>) {
//   for (const [collectionName, records] of Object.entries(tables)) {
//     console.log(`📦 Processing collection: ${collectionName}`);
//     for (const record of records) {
//       const id = record.id?.toString() || crypto.randomUUID();
//       const docRef = doc(db, collectionName, id);
//       const existing = await getDoc(docRef);

//       if (existing.exists()) {
//         console.log(`⚠️ Skipping existing doc: ${collectionName}/${id}`);
//       } else {
//         await setDoc(docRef, record);
//         console.log(`✅ Created doc: ${collectionName}/${id}`);
//       }
//     }
//   }
// }

// Run only from CLI
// if (require.main === module) {
//   setAllTablesIfNotExist(tables)
//     .then(() => {
//       console.log("Upload complete — all non-existing documents added.");
//       process.exit(0);
//     })
//     .catch((err) => {
//       console.error("❌ Error uploading:", err);
//       process.exit(1);
//     });
// }
