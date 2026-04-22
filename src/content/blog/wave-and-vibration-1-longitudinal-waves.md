---
title: "Wave and Vibration #1: Longitudinal Waves"
date: "2025-11-02"
description: "Catatan kuliah Getaran dan Gelombang: konsep dasar gelombang longitudinal, bunyi di gas dan padatan, plus contoh soal."
categories: "Physics Waves"
tags: ["Waves", "Longitudinal Waves", "Sound Waves", "Physics"]
toc: true
toc_sticky: false
excerpt: "Catatan kuliah tentang gelombang longitudinal: konsep inti, persamaan penting, dan contoh soal."
---

Ini rangkuman pribadi dari materi awal Getaran dan Gelombang.
Di gelombang longitudinal, arah getar partikel sejajar dengan arah rambat gelombang. Contoh paling gampang: bunyi di udara dan gelombang kompresi pada pegas.

# Gelombang Bunyi di Gas

#### Tekanan

$$ \boxed{P = P_0 + p} $$

#### Volume

$$ \boxed{V = V_0 + v} $$

#### Massa jenis/Density

$$ \rho = \rho_0 + \rho_d $$

#### Dilatasi (Fractional Change in Volume)

Secara definisi untuk elemen kecil:

$$ \delta = \frac{\Delta V}{V_0} = \frac{v}{V_0} $$

Untuk gelombang longitudinal 1D dengan medan perpindahan $u(x,t)$ (sering juga ditulis $\eta$), sebuah elemen panjang awal $\Delta x$ berubah menjadi $\Delta x + \frac{\partial u}{\partial x}\,\Delta x$. Maka pertambahan relatif panjang (dan untuk 1D, volume) adalah:

$$ \delta = \frac{(\Delta x + \frac{\partial u}{\partial x}\,\Delta x) - \Delta x}{\Delta x} = \frac{\partial u}{\partial x} = \frac{\partial \eta}{\partial x}. $$

Kondensasi (compression) didefinisikan $s = -\delta$, sehingga hubungan lengkapnya:

$$ \boxed{\delta = \frac{v}{V_0} = \frac{\partial \eta}{\partial x} = -s.} $$

Catatan: Bentuk $\Delta \eta / \Delta x$ menjadi turunan $\partial \eta / \partial x$ saat elemen diambil sangat kecil.

#### Kondensasi (Fractional Change in Density)

Definisi (positif untuk kompresi):

$$ \boxed{s = \frac{\Delta \rho}{\rho_0} = \frac{\rho - \rho_0}{\rho_0} = \frac{\rho_d}{\rho_0}} $$

#### Fixed Mass

Konservasi massa untuk elemen fluida kecil menyatakan bahwa massa tetap:

$$ m = \rho V = \rho_0 V_0. $$

Ketika ada gangguan kecil, tulis perubahan sebagai fraksi kecil:

$$ \rho = \rho_0(1 + s), \qquad V = V_0(1 + \delta). $$

Masukkan ke syarat massa tetap:

$$ \rho V = \rho_0 V_0 (1 + s)(1 + \delta) = \rho_0 V_0. $$

Membagi kedua sisi dengan $\rho_0 V_0$ memberi:

$$ (1 + s)(1 + \delta) = 1. $$

Ekspansi aljabar:

$$ 1 + s + \delta + s\,\delta = 1 \;\;\Rightarrow\;\; s + \delta + s\,\delta = 0. $$

Karena $s$ dan $\delta$ sangat kecil, hasil kali $s\,\delta$ jauh lebih kecil, jadi kita abaikan pada pendekatan linear:

$$ s + \delta \approx 0 \;\;\Rightarrow\;\; s \approx -\delta. $$

Dengan definisi $s = \dfrac{\Delta \rho}{\rho_0} = \dfrac{\rho_d}{\rho_0}$ dan $\delta = \dfrac{\Delta V}{V_0} = \dfrac{v}{V_0}$, maka hubungan lengkap (orde pertama):

$$ \boxed{\; s = -\delta = -\frac{v}{V_0} = \frac{\rho_d}{\rho_0} \;} $$

#### Sifat Elastis Gas: Modulus Kompresi (Bulk Modulus)

Sifat elastis (kemampuan dikompresi) gas dinyatakan oleh modulus kompresi (bulk modulus) $B$.

Definisi umum:

$$ B \equiv -\,V\,\frac{\partial P}{\partial V}\Big|_{\text{proses}} $$

Untuk gangguan kecil (linear), definisi ini menjadi:

$$ B \approx -\,V_0\,\frac{\Delta P}{\Delta V} = -\,\frac{\Delta P}{\Delta V/V_0} = -\,\frac{p}{\delta}. $$

Dengan $\delta = -s$, hubungan konstitutif akustik (orde pertama) adalah:

$$ p = -B\,\delta = B\,s $$

Kasus penting untuk gas ideal:

- Isotermal (perubahan lambat): $\;B = P_0$.
- Adiabatik (gelombang suara, perubahan cepat): $\;B = \gamma P_0$, dengan $\gamma$ rasio kalor spesifik.

Dari sini kecepatan rambat bunyi (1D) menjadi:

$$ c^2 = \frac{B}{\rho_0} \;\Rightarrow\; c = \sqrt{\frac{B}{\rho_0}}. $$

Untuk gas ideal adiabatik:

$$ c = \sqrt{\frac{\gamma P_0}{\rho_0}}. $$

Kompresibilitas $\kappa$ adalah kebalikan dari modulus kompresi, $\kappa = 1/B$.

Semua perubahan adiabatik dalam gas mengikuti hubungan: $$ P V^\gamma = \text{konstanta} $$.

Sehingga persamaan diferensial untuk tekanan dan volume adalah:

$$ dP \cdot V^\gamma + P \cdot \gamma V^{\gamma - 1} dV = 0 $$

atau

$$ -V \frac{dP}{dV} = \gamma P = B_a$$

#### Persamaan Gerak

<p align="center">
  <img src="/assets/images/longitudinalWave/1.svg" width="680" alt="Longitudinal wave diagram 1" />
	<br />
</p>

Kita ambil elemen silinder kecil fluida panjang $\Delta x$ dan luas penampang $A$ di sepanjang sumbu $x$. Tekanan di ujung kiri dan kanan berbeda sedikit karena adanya gradien tekanan. Gaya netto akibat tekanan (arah menuju tekanan yang lebih rendah) pada elemen adalah:

$$ F_{\text{net}} = -A\,\frac{\partial p}{\partial x}\,\Delta x. $$

Massa elemen: $m = \rho_0 A \Delta x$ (orde pertama cukup pakai $\rho_0$). Hukum Newton $F = m a$ dengan percepatan $a = \partial^2 \eta/\partial t^2$ (karena $\eta$ adalah perpindahan longitudinal) memberi:

$$ -A\,\frac{\partial p}{\partial x}\,\Delta x = \rho_0 A \Delta x \frac{\partial^2 \eta}{\partial t^2}. $$

Membagi $A\Delta x$ menghasilkan:

$$ -\frac{\partial p}{\partial x} = \rho_0 \frac{\partial^2 \eta}{\partial t^2}. $$

Dari hubungan konstitutif linear $p = -B\,\frac{\partial \eta}{\partial x}$ (ingat $p = B s$ dan $s = -\partial \eta/\partial x$):

$$ B \frac{\partial^2 \eta}{\partial x^2} = \rho_0 \frac{\partial^2 \eta}{\partial t^2}. $$

Atur ulang:

$$ \frac{\partial^2 \eta}{\partial x^2} = \frac{\rho_0}{B} \frac{\partial^2 \eta}{\partial t^2}. $$

Dengan $c^2 = B/\rho_0$ kita peroleh bentuk standar persamaan gelombang 1D:

$$ \boxed{\; \frac{\partial^2 \eta}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 \eta}{\partial t^2} \;} $$

Solusi umum (superposisi) untuk gelombang berjalan: $\eta(x,t) = f(x - c t) + g(x + c t)$. Untuk gelombang harmonik tunggal:

$$ \eta(x,t) = A \cos(kx - \omega t + \phi), \qquad \text{dengan } \omega = c k. $$

Hubungan ke tekanan kecil:

$$ p(x,t) = -B \frac{\partial \eta}{\partial x} = B k A \sin(kx - \omega t + \phi). $$

Amplitude tekanan $p_{\text{max}} = B k A$ menghubungkan displacements ke fluktuasi tekanan.

Untuk mempermudah aljabar, sering dipakai notasi kompleks/fasor. Misalkan amplitudo perpindahan maksimum $\eta_m$ (sama dengan $A$ di atas), maka untuk gelombang yang merambat ke arah $+x$:

$$ \eta(x,t) = \eta_m\, e^{\,i(\omega t - kx)}, \qquad (\,\omega = c k\,) $$

Turunan waktu dan ruangnya:

$$ \dot{\eta} = \frac{\partial \eta}{\partial t} = i\omega\,\eta, \qquad \delta = \frac{\partial \eta}{\partial x} = -ik\,\eta. $$

Karena $s = -\delta$, maka $s = ik\,\eta$. Dengan modulus adiabatik $B_a = \gamma P_0$ (relevan untuk bunyi), didapat relasi tekanan kecil:

$$ p = B_a\,s = i\,B_a\,k\,\eta. $$

#### Energi Gelombang Suara

Untuk gelombang longitudinal kecil di gas, energi tersimpan sebagai:

1. Energi kinetik partikel (gerak osilasi fluida)
2. Energi potensial elastik (kompresi/rarefaksi)

#### Energi Kinetik Per Unit Volume

Kecepatan partikel (bukan kecepatan rambat gelombang) adalah $u(x,t) = \dot{\eta} = \partial \eta/\partial t$. Energi kinetik densitas (per volume) untuk elemen kecil:

$$ E_k = \frac{1}{2} \rho_0 u^2 = \frac{1}{2} \rho_0 \left(\frac{\partial \eta}{\partial t}\right)^2. $$

Ambil bentuk harmonik real: $\eta(x,t) = \eta_m \cos(kx - \omega t)$. Maka:

$$ u = \dot{\eta} = \omega \eta_m \sin(kx - \omega t). $$

Sehingga:

$$ E_k = \frac{1}{2} \rho_0 \omega^2 \eta_m^2 \sin^2(kx - \omega t). $$

Rata-rata waktu (gunakan $\langle \sin^2 \rangle = 1/2$):

$$ \boxed{\; \langle E_k \rangle = \frac{1}{4} \rho_0 \omega^2 \eta_m^2 \;} $$

#### Energi Potensial (Kompresi) Per Unit Volume

Energi elastik densitas untuk kompresi kecil diberikan oleh:

$$ E_p = \frac{1}{2} B s^2 = \frac{1}{2} B \left(-\frac{\partial \eta}{\partial x}\right)^2 = \frac{1}{2} B \left(\frac{\partial \eta}{\partial x}\right)^2. $$

Dengan $\eta(x,t) = \eta_m \cos(kx - \omega t)$ diperoleh $\partial \eta/\partial x = -k \eta_m \sin(kx - \omega t)$ sehingga:

$$ E_p = \frac{1}{2} B k^2 \eta_m^2 \sin^2(kx - \omega t). $$

Karena $B = \rho_0 c^2$ dan $\omega = c k$, maka $B k^2 = \rho_0 c^2 k^2 = \rho_0 \omega^2$ sehingga rata-ratanya sama dengan kinetik:

$$ \boxed{\; \langle E_p \rangle = \frac{1}{4} \rho_0 \omega^2 \eta_m^2 \;} $$

#### Energi Total dan Hubungan dengan Tekanan

Total densitas energi rata-rata:

$$ \boxed{\; \langle E_{total} \rangle = \langle E_k \rangle + \langle E_p \rangle = \frac{1}{2} \rho_0 \omega^2 \eta_m^2 \;} $$

Tekanan osilasi: $p(x,t) = B s = -B \partial \eta/\partial x = B k \eta_m \sin(kx - \omega t)$ sehingga amplitudo tekanan $p_m = B k \eta_m = \rho_0 c \omega \eta_m$. Gunakan ini untuk bentuk lain:

$$ \langle E \rangle = \frac{p_m^2}{2 B} = \frac{p_m^2}{2 \rho_0 c^2}. $$

#### Intensitas Gelombang

Intensitas (daya per luas) untuk gelombang 1D maju adalah energi rata-rata dikali kecepatan rambat:

$$ \boxed{\; I = \langle E_{total} \rangle c = \frac{1}{2} \rho_0 c \omega^2 \eta_m^2 = \frac{p_m^2}{2 \rho_0 c} \;} $$

### Gelombang Bunyi di Padatan

Gelombang longitudinal lebih mudah merambat di padatan karena sifat elastisnya yang lebih kuat dibanding fluida. Padatan dapat menahan tegangan geser (shear stress) selain tegangan normal (normal stress) yang relevan untuk gelombang longitudinal.

$$\boxed{\; \frac{\partial^2 \eta}{\partial x^2} = \frac{1}{c^2} \, \frac{\partial^2 \eta}{\partial t^2}, \; c^2 = \frac{Y}{\rho} \;} $$

dimana $Y$ adalah Young's modulus (modulus elastisitas) padatan.

#### Poisson Ratio dan Konstanta Elastik Isotropik

Pada padatan isotropik, jika batang/elemen diregangkan atau dikompresi sepanjang sumbu $x$ (strain longitudinal $\partial \eta/\partial x$), ia akan mengalami perubahan dimensi lateral di arah $y$ (strain lateral $\partial \beta/\partial y$) dengan tanda berlawanan. Rasio efek lateral terhadap longitudinal didefinisikan sebagai Poisson ratio. Dalam buku dipakai simbol $\sigma$ (banyak literatur memakai $\nu$):

$$ \sigma \equiv -\,\frac{\partial \beta/\partial y}{\partial \eta/\partial x}. $$

Makna fisik: $\sigma$ besar ($\to 0.5$) berarti material "hampir inkompresibel" (karet: mendekati $0.49$) - sulit mengubah volume, tetapi mudah berubah bentuk. Material dengan $\sigma$ kecil (misal, gabus $\approx 0$) menunjukkan perubahan lateral sangat kecil saat diregangkan. Batas kestabilan termodinamik untuk medium elastik isotropik linear: $-1 < \sigma < 1/2$.

Parameter elastik dapat dinyatakan dalam berbagai set: $(Y, \sigma)$, $(\lambda, \mu)$, atau $(B, \mu)$. Hubungan isotropik linear (semua ekuivalen) adalah:

$$
\boxed{\; \sigma = \frac{\lambda}{2(\lambda + \mu)} \;} \qquad
\boxed{\; \lambda = \frac{\sigma Y}{(1+\sigma)(1-2\sigma)} \;} \qquad
\boxed{\; \mu = \frac{Y}{2(1+\sigma)} \;}
$$

Ekspresi Young's modulus dalam $\lambda,\mu,\sigma$ yang dipakai di buku:

$$ \boxed{\; Y = \lambda + 2\mu - 2\lambda\sigma = \mu\,\frac{3\lambda + 2\mu}{\lambda + \mu} \;} $$

Bulk modulus padatan isotropik:

$$ \boxed{\; B = \lambda + \tfrac{2}{3}\mu = \frac{Y}{3(1-2\sigma)} \;} $$

baja ($\sigma \approx 0.30$), aluminium ($\approx 0.33$), kaca ($\approx 0.22$), karet alam ($\approx 0.49$).

Kecepatan gelombang longitudinal dan geser dapat ditulis dalam beberapa bentuk ekuivalen:

$$
\boxed{\; c_L^2 = \frac{\lambda + 2\mu}{\rho} = \frac{B + \tfrac{4}{3}\mu}{\rho} = \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)} \;} \qquad
\boxed{\; c_T^2 = \frac{\mu}{\rho} = \frac{Y}{2\rho(1+\sigma)} \;}
$$

Notasi $c_T$ (transverse) sering juga ditulis $c_S$ (shear). Bentuk $c_L^2 = (\lambda + 2\mu)/\rho$ langsung menunjukkan bahwa kenaikan $\mu$ (rigiditas geser) meningkatkan kecepatan longitudinal karena medium lebih resisten terhadap perubahan bentuk simultan yang menyertai kompresi volumetrik.

#### Gelombang Geser (Transverse / Shear) di Padatan Bulk

<p align="center">
  <img src="/assets/images/longitudinalWave/2.svg" width="680" alt="Longitudinal wave diagram 2" />
	<br />
</p>

Ambil medan perpindahan transversal $\beta(x,t)$ (arah tegak lurus $x$). Shear strain lokal: $\partial \beta/\partial x$. Tegangan geser (shear stress) linear isotropik:

$$ T(x) = \mu \, \frac{\partial \beta}{\partial x}. $$

Keseimbangan gaya pada elemen tipis panjang $dx$ (luas penampang $A$):

$$ [T(x+dx) - T(x)]\,A \approx \frac{\partial T}{\partial x} A\,dx = \rho \, A \, dx \, \ddot{\beta}. $$

Dalam limit $dx \to 0$ (persis):

$$ \frac{\partial}{\partial x}\!\left( \mu \, \frac{\partial \beta}{\partial x} \right) = \rho \, \ddot{\beta}. $$

Untuk material homogen ($\mu$ konstan) persamaan menyederhana menjadi:

$$ \mu \, \frac{\partial^2 \beta}{\partial x^2} = \rho \, \frac{\partial^2 \beta}{\partial t^2} \;\; \Rightarrow \;\; \boxed{\; \frac{\partial^2 \beta}{\partial x^2} = \frac{1}{c_S^2} \, \frac{\partial^2 \beta}{\partial t^2}, \quad c_S^2 = \frac{\mu}{\rho} \;} $$

Rigiditas geser $\mu$ meningkatkan kedua kecepatan karena bentuk longitudinal di padatan melibatkan sedikit deformasi shear di samping kompresi volumetrik; hasilnya:

$$ \boxed{\; c_L^2 = \frac{\lambda + 2\mu}{\rho} \;} $$

Pada batang tipis (uniaxial) sering dipakai pendekatan $c \approx \sqrt{Y/\rho}$. Karena
$$ c_L^2 = \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)}, $$
dan $\frac{(1-\sigma)}{(1+\sigma)(1-2\sigma)} > 1$ untuk $0 < \sigma < 1/2$, maka kecepatan bulk 3D lebih besar daripada $\sqrt{Y/\rho}$ (rod approximation). Untuk $\sigma \to 1/2$ (limit inkompresibel) $c_L$ tumbuh besar karena $B \to \infty$.

Bulk modulus dalam konstanta Lame atau Young-Poisson bisa ditulis:

$$ \boxed{\; B = \lambda + \tfrac{2}{3}\mu = \frac{Y}{3(1-2\sigma)} \;} $$

Kecepatan dalam bentuk campuran bulk-shear:

$$
\boxed{\; c_L = \sqrt{\frac{B + \tfrac{4}{3}\mu}{\rho}} \;} \qquad
\boxed{\; c_T = \sqrt{\frac{\mu}{\rho}} \;}
$$

### Gelombang Longitudinal pada Struktur Periodik

Gelombang longitudinal juga dapat merambat dalam struktur periodik, seperti rantai massa-pegas. Model sederhana ini memberikan informasi mengenai perilaku gelombang dalam media diskrit.

#### Kekakuan Antar-Atom dan Young's Modulus

<p align="center">
  <img src="/assets/images/longitudinalWave/3.svg" width="680" alt="Longitudinal wave diagram 3" />
	<br />
</p>

Anggap kisi 1D dengan jarak antar-atom tetangga terdekat $a$. Dua atom yang berdekatan dihubungkan oleh "pegas" efektif dengan kekakuan $s$ (gaya per perpindahan). Untuk gelombang longitudinal, perpindahan antar-atom $\eta$ menghasilkan strain $\varepsilon = \eta/a$. Gaya pemulih normal yang bekerja pada muka sel luas $a^2$ sebanding dengan $s\eta/a^2 = (s/a)\,\varepsilon$, jadi rasio tegangan-regangan (Young's modulus) pada skala makro adalah

$$ \boxed{\; Y = \frac{s}{a} \;} \qquad \text{atau setara} \qquad \boxed{\; s = Y a \;} $$

Dengan massa atom efektif per sel $m \approx \rho a^3$, frekuensi osilasi longitudinal atom yang dihubungkan oleh $s$ diperkirakan

$$ \boxed{\; \nu = \frac{\omega}{2\pi} \approx \frac{1}{2\pi} \sqrt{\frac{s}{m}} \approx \frac{1}{2\pi a}\sqrt{\frac{Y}{\rho}} \approx \frac{c_0}{2\pi a} \;} $$

di mana $c_0$ adalah kecepatan bunyi di padatan (orde $\sim 5\times10^3\,\text{m s}^{-1}$). Dengan $a \approx 2\times10^{-10}\,\text{m}$, didapat $\nu \approx 3\times10^{12}\,\text{Hz}$ (wilayah inframerah).

#### Model Diskret dan Dispersi

Untuk deskripsi yang lebih presisi, rantai diskret 1D memenuhi persamaan gerak partikel ke-$r$:

$$ m\,\ddot{\eta}_r = s\,(\eta_{r+1} + \eta_{r-1} - 2\eta_r), \qquad s = \frac{T}{a}. $$

Dengan ansatz gelombang $\eta_r = \eta_{\max} e^{\,i(\omega t - k r a)}$ diperoleh relasi dispersi

$$ \boxed{\; \omega^2 = \frac{4s}{m}\,\sin^2\!\left(\frac{k a}{2}\right) \;} $$

### Refleksi dan Transmisi Gelombang Bunyi pada Batas Medium

<p align="center">
  <img src="/assets/images/longitudinalWave/4.svg" width="680" alt="Longitudinal wave diagram 4" />
	<br />
</p>

Bayangkan gelombang suara datar menumbuk tegak lurus (normal incidence) sebuah batas antara dua medium. Kedua medium punya impedansi akustik spesifik berbeda: $Z_1 = \rho_1 c_1$ dan $Z_2 = \rho_2 c_2$. Di batas ini sebagian gelombang memantul, sebagian lagi menerus. Agar dua medium tetap "nempel" tanpa celah, pegang dua aturan simpel:

- Kecepatan partikel di permukaan harus sama di kedua sisi (tidak ada yang tertinggal). Dalam notasi fasor: $\dot{\eta}_i + \dot{\eta}_r = \dot{\eta}_t$.
- Tekanan di permukaan juga harus sama (gaya seimbang): $p_i + p_r = p_t$.

Dengan indeks $i$ (datang), $r$ (pantul, arah balik), $t$ (transmisi, masuk medium 2):

$$ \dot{\eta}_i + \dot{\eta}_r = \dot{\eta}_t, \qquad p_i + p_r = p_t. $$

Untuk gelombang bidang harmonik 1D: hubungan tekanan-kecepatan partikel (dengan titik di atas menyatakan turunan waktu)

$$ p = Z \, \dot{\eta} \quad \text{(gelombang maju)}, \qquad p = - Z \, \dot{\eta} \quad \text{(gelombang mundur)}. $$

Sehingga:

- $p_i = Z_1 \dot{\eta}_i$
- $p_r = - Z_1 \dot{\eta}_r$
- $p_t = Z_2 \dot{\eta}_t$.

Masukkan ke kontinuitas tekanan: $Z_1 \dot{\eta}_i - Z_1 \dot{\eta}_r = Z_2 \dot{\eta}_t$.
Gunakan kontinuitas kecepatan: $\dot{\eta}_t = \dot{\eta}_i + \dot{\eta}_r$.

Eliminasi $\dot{\eta}_t$ memberi:

$$ Z_1 \dot{\eta}_i - Z_1 \dot{\eta}_r = Z_2 (\dot{\eta}_i + \dot{\eta}_r) \;\Rightarrow\; (Z_1 - Z_2) \dot{\eta}_i = (Z_1 + Z_2) \dot{\eta}_r. $$

Rasio amplitudo kecepatan partikel ($\dot{\eta}$) terpantul dan transmisi:

$$ \boxed{\; \frac{\dot{\eta}_r}{\dot{\eta}_i} = \frac{Z_1 - Z_2}{Z_1 + Z_2} \;} \qquad \boxed{\; \frac{\dot{\eta}_t}{\dot{\eta}_i} = \frac{2 Z_1}{Z_1 + Z_2} \;} $$

Dari hubungan

- $p_r = -Z_1 \dot{\eta}_r$
- $p_i = Z_1 \dot{\eta}_i$
- $p_t = Z_2 \dot{\eta}_t$

diperoleh rasio amplitudo tekanan terpantul dan transmisi:

$$ \boxed{\; \frac{p_r}{p_i} = \frac{Z_2 - Z_1}{Z_1 + Z_2} = -\frac{\dot{\eta}_r}{\dot{\eta}_i} \;} \qquad \boxed{\; \frac{p_t}{p_i} = \frac{2 Z_2}{Z_1 + Z_2} = \frac{Z_2}{Z_1} \frac{\dot{\eta}_t}{\dot{\eta}_i} \;} $$

Jika $Z_1 > Z_2$ maka $\dot{\eta}_r/\dot{\eta}_i > 0$ (kecepatan datang dan pantul sefasa) sedangkan $p_r/p_i < 0$ (tekanan berlawanan fasa). Jika $Z_1 < Z_2$ kebalikannya: tekanan sefasa, kecepatan berlawanan fasa.

### Refleksi dan Transmisi Intensitas Bunyi

Bentuk setara jika ditulis eksplisit dengan nilai rms (akar-mean-kuadrat) kecepatan partikel:

$$ \boxed{\; \frac{I_r}{I_i} = \frac{Z_1\,\langle \dot{\eta}_r^2 \rangle_{\mathrm{rms}}}{Z_1\,\langle \dot{\eta}_i^2 \rangle_{\mathrm{rms}}} = \left( \frac{Z_1 - Z_2}{Z_1 + Z_2} \right)^2 \;} $$

$$ \boxed{\; \frac{I_t}{I_i} = \frac{Z_2\,\langle \dot{\eta}_t^2 \rangle_{\mathrm{rms}}}{Z_1\,\langle \dot{\eta}_i^2 \rangle_{\mathrm{rms}}} = \left( \frac{2 Z_1}{Z_1 + Z_2} \right)^2 \frac{Z_2}{Z_1} = \frac{4 Z_1 Z_2}{(Z_1 + Z_2)^2} \;} $$

Konservasi energi (tanpa rugi/absorpsi) pada insiden normal:

$$ \boxed{\; \frac{I_r}{I_i} + \frac{I_t}{I_i} = 1 \;} \qquad \text{atau} \qquad \boxed{\; I_i = I_t + I_r \;} $$

Amplitudo puncak (peak) atau rms memberikan $R$ dan $T$ yang sama karena faktor skala saling hilang dalam perbandingan.

<br />
---
<br />

### Contoh Soal

#### Gelombang Longitudinal dalam Pipa Terbuka

Osilasi tekanan pada pipa berongga dengan panjang $L$ dinyatakan oleh persamaan gelombang

$$ \frac{\partial^2 p}{\partial z^2} = \frac{\rho_0}{B} \, \frac{\partial^2 p}{\partial t^2} $$

dengan $p$ sebagai over-pressure (kelebihan tekanan terhadap tekanan atmosfer), $\rho_0$ massa jenis gas di dalam pipa, $B$ bulk modulus, dan $z$ arah longitudinal sepanjang pipa. Asumsikan solusi berbentuk

$$ p(z,t) = [\,C \cos k z + D \sin k z\,] \cos \omega t $$

Tentukan semua parameter yang belum diketahui $(C, D, B, \text{ dan } \omega)$ untuk kasus pipa terbuka di kedua ujung dengan kondisi $p(z = L/2, \, t = 0) = p_0$.

**Penyelesaian:**

- $$p(0, t) = 0 \Rightarrow p(0, t) = [C \cos(0) + D \sin(0)] \cos(\omega t) = C \cos(\omega t) $$

  Agar persamaan ini bernilai nol untuk setiap waktu $t$, maka $C$ harus nol.

  $$ C = 0 $$

  Dengan demikian, solusi menjadi:

  $$ p(z, t) = D \sin(kz) \cos(\omega t) $$

- $$p(L, t) = 0 \Rightarrow p(L, t) = D \sin(kL) \cos(\omega t) = 0 $$

  Untuk solusi yang tidak trivial ($D \neq 0$), maka $\sin(kL)$ harus nol.

  $$ \sin(kL) = 0 \implies kL = n\pi $$

  di mana $n$ adalah bilangan bulat positif ($n=1, 2, 3, \dots$). Jadi, bilangan gelombang $k$ adalah:

  $$ k = \frac{n\pi}{L} $$

Gunakan kondisi awal $p(L/2, t=0) = p_0$.

$$ p(L/2, 0) = D \sin\left(k \frac{L}{2}\right) \cos(0) = p_0 $$

$$ D \sin\left(\frac{n\pi}{L} \frac{L}{2}\right) = p_0 $$

$$ D \sin\left(\frac{n\pi}{2}\right) = p_0 $$

Maka, konstanta $D$ adalah:

$$ D = \frac{p_0}{\sin(n\pi/2)} = \frac{p_0}{(-1)^{(n-1)/2}} \quad (\text{untuk } n \text{ ganjil}) $$

Substitusikan bentuk solusi ke dalam persamaan gelombang awal.
Turunan parsial dari $p(z,t)$ adalah:

- $\frac{\partial^2 p}{\partial z^2} = -k^2 D \sin(kz) \cos(\omega t) = -k^2 p(z,t)$
- $\frac{\partial^2 p}{\partial t^2} = -\omega^2 D \sin(kz) \cos(\omega t) = -\omega^2 p(z,t)$

Substitusikan ke persamaan gelombang:

$$ -k^2 p(z,t) = \frac{\rho_0}{B} (-\omega^2 p(z,t)) $$
$$ k^2 = \frac{\rho_0 \omega^2}{B} $$

Dari sini kita bisa mengekspresikan $\omega$ dan $B$.

- **Frekuensi Sudut $\omega$:**

  $$ \omega^2 = \frac{B k^2}{\rho_0} \implies \omega = k \sqrt{\frac{B}{\rho_0}} $$

  Karena $k = n\pi/L$:

  $$ \omega = \frac{n\pi}{L} \sqrt{\frac{B}{\rho_0}} \quad (\text{untuk } n \text{ ganjil}) $$

- **Bulk Modulus $B$:**

  $$ B = \frac{\rho_0 \omega^2}{k^2} = \rho_0 \left(\frac{\omega L}{n\pi}\right)^2 \quad (\text{untuk } n \text{ ganjil}) $$

Untuk pipa terbuka di kedua ujung ($z=0$ dan $z=L$) dengan kondisi $p(L/2, 0) = p_0$, diperoleh:

$$ \boxed{C = 0}, \quad \boxed{D = \frac{p_0}{(-1)^{(n-1)/2}}}, \quad \boxed{\omega = \frac{n\pi}{L} \sqrt{\frac{B}{\rho_0}}}, \quad \boxed{B = \rho_0 \left(\frac{\omega L}{n\pi}\right)^2} $$

di mana $n$ adalah bilangan bulat ganjil ($n = 1, 3, 5, \dots$).

#### Kecepatan Termal dan Kecepatan Bunyi

Tunjukkan bahwa pada gas bersuhu $T$, kecepatan termal rata-rata molekul kira-kira seorde dengan kecepatan bunyi.

**Penyelesaian:**

Dari teori kinetik gas untuk partikel bermassa $m$ pada temperatur $T$:

$$ \frac{1}{2} m\,v_{\mathrm{rms}}^2 = \frac{3}{2} k_B T \quad\Rightarrow\quad v_{\mathrm{rms}}^2 = \frac{3 k_B T}{m}. $$

Kecepatan bunyi dalam gas ideal (proses adiabatik) adalah

$$ c^2 = \frac{\gamma P}{\rho} = \frac{\gamma RT}{M} = \frac{\gamma N k_B T}{M}. $$

Dengan $M = N m$ (massa molar = jumlah Avogadro dikali massa per molekul), didapat

$$ c^2 = \frac{\gamma k_B T}{m} \quad\Rightarrow\quad m c^2 = \gamma k_B T. $$

Bandingkan dengan hasil kinetik $m v_{\mathrm{rms}}^2 = 3 k_B T$ sehingga

$$ \frac{v_{\mathrm{rms}}}{c} = \sqrt{\frac{3}{\gamma}}. $$

Untuk gas monoatomik $\gamma = 5/3$ maka $v_{\mathrm{rms}}/c = \sqrt{9/5} \approx 1.34$; untuk gas diatomik $\gamma = 7/5$ maka $v_{\mathrm{rms}}/c \approx \sqrt{3/1.4} \approx 1.46$. Jadi keduanya seorde dan dapat dikatakan kira-kira sama besar.

Karena $c^2 = \gamma N k_B T / M$, maka

$$ M c^2 = \gamma N k_B T \equiv \alpha k_B T \approx \frac{5}{3} k_B T \quad (\text{gas monoatomik}), $$

yang langsung menunjukkan skala energi per mole setara dengan energi kinetik termal, sehingga kecepatan termal rata-rata molekul dan kecepatan bunyi berbanding melalui faktor konstanta $\sqrt{3/\gamma}$.

#### Tekanan Akustik pada Ambang Nyeri

Ambil kecepatan bunyi di udara dengan massa jenis $1.29\,\mathrm{kg/m^3}$ sebagai $c=330\,\mathrm{m/s}$. Tunjukkan bahwa tekanan akustik untuk bunyi pada ambang nyeri $I=10\,\mathrm{W/m^2}$ sekitar $6.5\times10^{-4}$ atmosfer.

**Penyelesaian:**

$$ I = \frac{p_{\mathrm{rms}}^2}{\rho c} \quad\Rightarrow\quad p_{\mathrm{rms}} = \sqrt{I\,\rho c}. $$

Dengan $\rho = 1.29\,\mathrm{kg/m^3}$ dan $c = 330\,\mathrm{m/s}$, $\rho c = 425.7$:

$$ p_{\mathrm{rms}} = \sqrt{10\times 425.7} \approx 65\,\mathrm{Pa}. $$

Bandingkan dengan $1\,\text{atm} = 1.013\times10^5\,\mathrm{Pa}$:

$$ \frac{p_{\mathrm{rms}}}{1\,\text{atm}} \approx \frac{65}{1.013\times10^5} \approx 6.4\times10^{-4} \;\approx\; 6.5\times10^{-4}. $$

#### Amplitudo Perpindahan pada Ambang Nyeri (500 Hz)

Tunjukkan bahwa amplitudo perpindahan molekul udara pada taraf bunyi ambang nyeri $10\,\mathrm{W/m^2}$ di frekuensi $500\,\mathrm{Hz}$ adalah sekitar $6.9\times10^{-5}\,\mathrm{m}$.

**Penyelesaian:** Untuk gelombang bidang harmonik,

$$ I = \tfrac{1}{2} \rho_0 c\,\omega^2\,\eta^2 \quad \Rightarrow \quad \eta = \frac{1}{\omega} \sqrt{\frac{2I}{\rho_0 c}} = \frac{1}{2\pi f}\,\sqrt{\frac{2I}{\rho_0 c}}. $$

Dengan $I=10\,\mathrm{W/m^2}$, $\rho_0 c = 1.29\times 330 = 425.7\,\mathrm{kg/(m^2\,s)}$ dan $f=500\,\mathrm{Hz}$:

$$ \eta \approx \frac{1}{2\pi\times 500} \sqrt{\frac{2\times 10}{425.7}} \;\approx\; 6.9\times10^{-5}\,\mathrm{m}. $$

#### Amplitudo Perpindahan pada Bunyi Hampir Tak Terdengar (500 Hz)

Bunyi yang hampir tak terdengar di udara memiliki intensitas sebesar $10^{-10}\,I_0$. Tunjukkan bahwa amplitudo perpindahan molekul udara pada level ini di frekuensi $500\,\mathrm{Hz}$ kira-kira $10^{-10}\,\mathrm{m}$, yaitu seorde diameter molekul.

**Penyelesaian:**

$$ \eta = \frac{p_{\max}}{\rho_0 c\,\omega} = \frac{1}{2\pi \nu}\sqrt{\frac{2I}{\rho_0 c}}. $$

Dengan $I = 10^{-10} I_0$ dan $I_0 = 10\,\mathrm{W/m^2}$, $\nu = 500\,\mathrm{Hz}$, $\rho_0 = 1.29\,\mathrm{kg/m^3}$, $c = 330\,\mathrm{m/s}$:

$$ \eta = \frac{1}{2\pi (500)} \sqrt{ \frac{2\times 10^{-10} (10)}{1.29\times 330} } \approx 1\times10^{-10}\,\mathrm{m}. $$

### References

- H. J. Pain, *The Physics of Vibrations and Waves*, 6th ed. (Wiley, 2013).
