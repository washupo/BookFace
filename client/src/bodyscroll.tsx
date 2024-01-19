// export function enableBodyScroll() {
//     if (document.readyState === "complete") {
//       document.body.style.position = "";
//       document.body.style.overflowY = "";
//       document.body.style.width = "";
  
//       if (document.body.style.marginTop) {
//         const scrollTop = -parseInt(document.body.style.marginTop, 10);
//         document.body.style.marginTop = "";
//         window.scrollTo(window.scrollX, scrollTop);
//       }
//     } else {
//       window.addEventListener("load", enableBodyScroll);
//     }
//   }
  
//   export function disableBodyScroll({ savePosition = false } = {}) {
//     if (document.readyState === "complete") {
//       if (document.body.scrollHeight > window.innerHeight) {
//         if (savePosition)
//           document.body.style.marginTop = `-${window.scrollY}px`;
//         document.body.style.position = "fixed";
//         document.body.style.overflowY = "scroll";
//         document.body.style.width = "100%";
//       }
//     } else {
//       window.addEventListener("load", () => disableBodyScroll({ savePosition }));
//     }
//   }

// bodyScroll.ts
export function enableBodyScroll() {
  if (document.readyState === "complete") {
    document.body.style.position = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";

    // Ajoutez une classe à la modal pour activer le défilement
    document.body.classList.remove("modal-open");
  } else {
    window.addEventListener("load", enableBodyScroll);
  }
}

export function disableBodyScroll({ savePosition = false } = {}) {
  const body = document.body;

  if (document.readyState === "complete") {
    if (body.scrollHeight > window.innerHeight) {
      if (savePosition) {
        body.style.marginTop = `-${window.scrollY}px`;
      }
      body.style.position = "fixed";
      body.style.overflowY = "scroll";
      body.style.width = "100%";
    }

    // Ajoutez une classe à la modal pour désactiver le défilement de la page
    body.classList.add("modal-open");
  } else {
    window.addEventListener("load", () => disableBodyScroll({ savePosition }));
  }
}
