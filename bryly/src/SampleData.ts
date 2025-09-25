import type {Solid} from "./solids/Solid.ts";
import {Cube} from "./solids/Cube.ts";
import {Cuboid} from "./solids/Cuboid.ts";
import {Sphere} from "./solids/Sphere.ts";

export const solids: Solid[] = [
    new Cube("Sześcian", "szescian.jpg", "V=a^3", "P=6a^2", 2),
    new Cuboid("Prostopadłościan", "prostopadloscian.jpg", "V=a*b*c", "P=2*a*b+2*a*c+2*b*c", 3, 4, 5),
    new Sphere("Kula", "kula.jpg", "V=4/3*pi*r^3", "P=4*pi*r^2", 4)
]