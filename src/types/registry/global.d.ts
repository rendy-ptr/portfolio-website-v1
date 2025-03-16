export {};

// Deklarasi untuk impor file statis
declare module "*.glb";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.mp4";
declare module "*.webp";

// Deklarasi modul "meshline" dengan tipe lebih spesifik
declare module "meshline" {
  import { BufferGeometry, Material } from "three";

  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }
  export class MeshLineMaterial extends Material {}
}

// Menambahkan elemen JSX khusus untuk MeshLine
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
