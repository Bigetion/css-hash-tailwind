# DRY CSS Generator System

Sistem generator CSS yang dioptimalkan ini menerapkan prinsip Don't Repeat Yourself (DRY) untuk mengurangi duplikasi kode di seluruh generator Tailwind.

## Pendekatan

Generator diorganisasi berdasarkan pola umum:

1. **Simple Utilities** - Utilities sederhana yang memetakan nilai langsung ke properti CSS tunggal (misalnya `align-items`, `justify-content`)

2. **Color Utilities** - Utilities berbasis warna dengan dukungan opacity (misalnya `text-color`, `background-color`)

3. **Directional Utilities** - Utilities dengan varian arah seperti margin dan padding

4. **Space-Between Utilities** - Utility khusus untuk spacing antar elemen

## Fungsi Umum

### `generateSimpleUtility()`
Menghasilkan utilitas CSS sederhana yang memetakan nilai ke properti CSS tunggal.

```js
generateSimpleUtility({
  configOptions,
  cssProperty: "align-items",
  utilityPrefix: "items",
  valueMap: { start: "flex-start", center: "center" },
  variantKey: "alignItems"
});
```

### `generateColorUtility()`
Menghasilkan utilitas warna dengan dukungan opacity.

```js
generateColorUtility({
  configOptions,
  cssProperty: "color",
  utilityPrefix: "text",
  colorMap: theme.textColor,
  variantKey: "textColor",
  opacityVar: "--text-opacity"
});
```

### `generateDirectionalUtility()`
Menghasilkan utilitas dengan varian arah (top, right, bottom, left, x, y).

```js
generateDirectionalUtility({
  configOptions,
  cssProperty: "margin",
  utilityPrefix: "m",
  valueMap: theme.margin,
  variantKey: "margin",
  supportNegative: true
});
```

### `generateSpaceBetweenUtility()`
Menghasilkan utilitas space-between untuk mengatur jarak antar elemen.

```js
generateSpaceBetweenUtility({
  configOptions,
  valueMap: theme.space
});
```

## Keuntungan

1. **Kode Lebih Ringkas** - Mengurangi jumlah baris kode dengan menghilangkan duplikasi

2. **Konsistensi** - Menjamin perilaku yang konsisten antar generator yang sejenis

3. **Pemeliharaan Lebih Mudah** - Bug yang diperbaiki di satu fungsi generator akan memperbaiki semua generator yang menggunakan fungsi tersebut

4. **Perluasan Lebih Mudah** - Menambahkan fitur baru bisa dilakukan secara terpusat

## Contoh Penggunaan

Sebelumnya, setiap generator memiliki implementasi sendiri meskipun sangat mirip:

```js
// Sebelum: Duplikasi kode yang tinggi
export default function generator(configOptions) {
  // Logic yang mirip diulang di tiap generator
}
```

Sekarang, generator memanfaatkan fungsi bersama:

```js
// Sesudah: DRY dan lebih ringkas
import { generateColorUtility } from "./utils/generatorUtils";

export default function generator(configOptions) {
  return generateColorUtility({
    // Hanya parameter yang spesifik untuk generator ini
    cssProperty: "color",
    utilityPrefix: "text",
    // ...
  });
}
```
