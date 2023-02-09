import path from "path";
import { DatosPonencias } from "data/ponencias";

export function getAllDataIds() {  
    // Returns an array that looks like this:
    const dtp = ["M11", "M12", "M13", "M14", "M15", "M16", "M17", "M18", "M19", "X11", "X12", "X13", "X14", "X15", "X16", "X17", "X18", "X19",
    "M21", "M22", "M23", "M24", "M25", "M26", "M27", "M28", "M29", "X21", "X22", "X23", "X24", "X25", "X26", "X27", "X28", "X29",
    "M31", "M32", "M33", "M34", "M35", "M36", "M37", "M38", "M39", "X31", "X32", "X33", "X34", "X35", "X36", "X37", "X38", "X39",
    "M41", "M42", "M43", "M44", "M45", "M46", "M47", "M48", "M49", "X41", "X42", "X43", "X44", "X45", "X46", "X47", "X48", "X49"];
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return dtp.map((dt) => {
      return {
        params: {
          id: dt,
        },
      };
    });
  }

  export async function getRawData(id) {
  
    const jsonData = DatosPonencias;
  
    // Combine the data whith the id
    return {
      id,
      jsonData,
    };
  }
  