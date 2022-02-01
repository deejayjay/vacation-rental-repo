import { ref as dataRef, get, set, update } from "firebase/database";
import { db } from "./libs/firebase/firebaseConfig";
import { rentalCard } from "./templates/rentalCard";

async function pageInit() {
  const rentalRef = dataRef(db, "rentals/");
  const rentalSnapShot = await get(rentalRef);
  const data = rentalSnapShot.val();

  // data is an Object or Objects
  // JavaScript's preferred way is using "Array of Objects"
  Object.values(data).map(rental => {
    const card = rentalCard(rental);

    // Layout thrashing - NOT RECOMMENDED
    document.body.append(card);

    return card;
  });

  // ES Modules For The Render Function
}

pageInit();
