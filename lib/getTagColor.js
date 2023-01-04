export default function getTagColor(tag) {
    switch (tag) {
        case "Informática": return "tag-teal";
        case "Mecánica": return "tag-purple";
        case "Electrónica": return "tag-yellow";
        case "Química": return "tag-pink";
        case "Coordinador": return "tag-red";
        case "Desarrollo Web y App": return "tag-green";
        case "Gestión Stands": return "tag-orange";
        case "Gestión Ponencias": return "tag-blue";
        case "Gestión Patrocinios": return "tag-brown";
        case "Gestión Actividades y Talleres": return "tag-violet";
        case "Big Data / DevOps": return "tag-teal";
        case "I+D+I / Blockchain": return "tag-purple";
        case "Inteligencia Artificial": return "tag-red";
        case "Computación Cuántica": return "tag-green";
    }
}