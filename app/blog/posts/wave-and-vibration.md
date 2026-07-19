---
title: 'Longitudinal Waves'
publishedAt: '2025-11-02'
summary: 'Lecture notes on longitudinal waves covering sound propagation in gases and solids, elastic wave theory, dispersion in discrete lattices, and boundary reflection with worked examples.'
---

These notes cover the first block in vibration and wave physics. Starting from first principles, we derive the relationships between displacement, pressure, density, wave speed, and energy transport. The treatment begins with longitudinal motion in gases, extends to elastic waves in solids, and concludes with discrete-lattice dispersion and boundary reflection.

# Part I — Sound Waves in Gases

## 1. Core Variables

For small disturbances we decompose each thermodynamic quantity into its equilibrium value plus a small perturbation:

$$
P = P_0 + p, \quad V = V_0 + v, \quad \rho = \rho_0 + \rho_d
$$

Let $\eta(x,t)$ denote the particle displacement along the propagation axis $x$. For a thin fluid element the fractional volume change (dilatation) is

$$
\delta = \frac{\Delta V}{V_0} = \frac{\partial \eta}{\partial x}
$$

The **condensation** $s$, defined as positive under compression, reads

$$
s = \frac{\Delta \rho}{\rho_0} = \frac{\rho_d}{\rho_0}
$$

Because mass is conserved for each fluid element ($\rho\,V = \rho_0 V_0$), writing $\rho = \rho_0(1+s)$ and $V = V_0(1+\delta)$ gives

$$
(1+s)(1+\delta) = 1
$$

Dropping the second-order product $s\delta$ for small signals yields the linearised result

$$
\boxed{s = -\delta = -\frac{\partial \eta}{\partial x}}
$$

## 2. Elastic Response and Sound Speed

The bulk modulus $B$ quantifies how a material resists uniform compression:

$$
B \equiv -V\frac{\partial P}{\partial V}
$$

In linear acoustics the excess pressure is directly proportional to the condensation:

$$
p = -B\delta = Bs
$$

For an ideal gas the appropriate modulus depends on the process:

- **Isothermal** disturbance — $B = P_0$
- **Adiabatic** disturbance — $B = \gamma P_0$

The phase speed of sound follows immediately:

$$
c^2 = \frac{B}{\rho_0}, \qquad c = \sqrt{\frac{B}{\rho_0}}
$$

Under adiabatic conditions in an ideal gas this becomes

$$
c = \sqrt{\frac{\gamma P_0}{\rho_0}}
$$

> **Derivation.** Adiabatic changes satisfy $PV^\gamma = \text{const}$. Differentiating,
>
> $$
> dP\,V^\gamma + \gamma P V^{\gamma-1}\,dV = 0
> $$
>
> so $-V\,dP/dV = \gamma P = B_a$, confirming the adiabatic bulk modulus.

## 3. Equation of Motion

Consider a fluid slice of cross-sectional area $A$ and thickness $\Delta x$. The net force due to the pressure gradient is

$$
F_{\text{net}} = -A\frac{\partial p}{\partial x}\,\Delta x
$$

while the slice mass is $m = \rho_0 A\,\Delta x$. Applying Newton's second law and cancelling $A\,\Delta x$,

$$
-\frac{\partial p}{\partial x} = \rho_0\frac{\partial^2\eta}{\partial t^2}
$$

Substituting $p = -B\,\partial\eta/\partial x$ yields

$$
B\frac{\partial^2\eta}{\partial x^2} = \rho_0\frac{\partial^2\eta}{\partial t^2}
$$

which is the **one-dimensional wave equation**:

$$
\boxed{\frac{\partial^2\eta}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2\eta}{\partial t^2}}
$$

## 4. Harmonic Waves and Pressure Amplitude

The general solution of the 1-D wave equation is

$$
\eta(x,t) = f(x-ct) + g(x+ct)
$$

representing right- and left-travelling pulses respectively. For a single-frequency harmonic wave,

$$
\eta(x,t) = A\cos(kx-\omega t+\phi), \qquad \omega = ck
$$

The corresponding pressure perturbation is

$$
p(x,t) = -B\frac{\partial \eta}{\partial x} = BkA\sin(kx-\omega t+\phi)
$$

so the **pressure amplitude** is $p_m = BkA$.

In complex (phasor) notation a forward-travelling wave takes the form

$$
\eta(x,t) = \eta_m\, e^{i(\omega t-kx)}
$$

with the useful derivative identities

$$
\dot{\eta} = i\omega\eta, \qquad \delta = \frac{\partial \eta}{\partial x} = -ik\eta, \qquad s = ik\eta
$$

The adiabatic pressure phasor is therefore

$$
p = B_a\,s = iB_a k\,\eta
$$

## 5. Energy Density and Intensity

The particle velocity is $u = \dot{\eta}$. The **kinetic energy density** is

$$
E_k = \tfrac{1}{2}\rho_0 u^2 = \tfrac{1}{2}\rho_0\!\left(\frac{\partial \eta}{\partial t}\right)^{\!2}
$$

For $\eta = \eta_m\cos(kx - \omega t)$ we obtain

$$
E_k = \tfrac{1}{2}\rho_0\omega^2\eta_m^2\sin^2(kx-\omega t)
$$

Time-averaging gives

$$
\boxed{\langle E_k\rangle = \tfrac{1}{4}\rho_0\omega^2\eta_m^2}
$$

The **elastic potential energy density** is

$$
\begin{aligned}
E_p &= \tfrac{1}{2}Bs^2 \\
    &= \tfrac{1}{2}B\!\left(\frac{\partial \eta}{\partial x}\right)^{\!2} \\
    &= \tfrac{1}{2}Bk^2\eta_m^2\sin^2(kx-\omega t)
\end{aligned}
$$

Because $B = \rho_0 c^2$ and $\omega = ck$, the time-average matches the kinetic part exactly:

$$
\boxed{\langle E_p\rangle = \tfrac{1}{4}\rho_0\omega^2\eta_m^2}
$$

The **total average energy density** and **intensity** are therefore

$$
\boxed{\langle E\rangle = \tfrac{1}{2}\rho_0\omega^2\eta_m^2}
$$

$$
\boxed{I = \langle E\rangle\,c = \tfrac{1}{2}\rho_0 c\,\omega^2\eta_m^2 = \frac{p_m^2}{2\rho_0 c}}
$$

An equivalent expression in terms of pressure amplitude is $\langle E\rangle = p_m^2/(2\rho_0 c^2)$.

---

# Part II — Sound Waves in Solids

## 1. Longitudinal Waves in a Thin Rod

For a thin rod under uniaxial stress, lateral expansion is unconstrained and the relevant modulus is Young's modulus $Y$:

$$
\frac{\partial^2\eta}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2\eta}{\partial t^2}, \qquad c^2 = \frac{Y}{\rho}
$$

## 2. Elastic Constants of Isotropic Solids

In an isotropic bulk solid the stress–strain relation involves the Lamé parameters $\lambda$ and $\mu$. The **Poisson ratio** $\sigma$ connects lateral contraction to axial extension:

$$
\sigma = -\frac{\partial \beta/\partial y}{\partial \eta/\partial x}
$$

The following identities relate $\sigma$, $Y$, $\lambda$, and $\mu$:

$$
\begin{aligned}
\sigma &= \frac{\lambda}{2(\lambda+\mu)} \\
\lambda &= \frac{\sigma Y}{(1+\sigma)(1-2\sigma)} \\
\mu &= \frac{Y}{2(1+\sigma)}
\end{aligned}
$$

The bulk modulus in terms of Lamé parameters is

$$
B = \lambda + \tfrac{2}{3}\mu = \frac{Y}{3(1-2\sigma)}
$$

**Longitudinal** and **transverse** wave speeds in the bulk material are

$$
c_L^2 = \frac{\lambda+2\mu}{\rho}
= \frac{B+\frac{4}{3}\mu}{\rho}
= \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)}
$$

$$
c_T^2 = \frac{\mu}{\rho}
= \frac{Y}{2\rho(1+\sigma)}
$$

Typical Poisson ratio values for common materials:

| Material | $\sigma$ |
|----------|----------|
| Steel | $\approx 0.30$ |
| Aluminium | $\approx 0.33$ |
| Glass | $\approx 0.22$ |
| Natural rubber | $\approx 0.49$ |

## 3. Shear Waves in Bulk Solids

Let $\beta(x,t)$ denote the transverse displacement. The shear stress is $T = \mu\,\partial\beta/\partial x$. A force balance on a thin slice yields

$$
\frac{\partial}{\partial x}\!\left(\mu\frac{\partial \beta}{\partial x}\right) = \rho\frac{\partial^2 \beta}{\partial t^2}
$$

For a homogeneous material ($\mu = \text{const}$) this reduces to

$$
\boxed{\frac{\partial^2\beta}{\partial x^2} = \frac{1}{c_T^2}\frac{\partial^2\beta}{\partial t^2}, \qquad c_T^2 = \frac{\mu}{\rho}}
$$

The longitudinal bulk speed and thin-rod estimate are

$$
\begin{aligned}
c_L &= \sqrt{\frac{\lambda+2\mu}{\rho}} \\
c_{\mathrm{rod}} &= \sqrt{\frac{Y}{\rho}}
\end{aligned}
$$

For $0 < \sigma < 1/2$, the longitudinal bulk speed always exceeds the thin-rod estimate.

---

# Part III — Dispersion in Periodic Structures

## 1. Effective Stiffness and Young's Modulus

Consider a one-dimensional monatomic chain with equilibrium spacing $a$. Nearest-neighbour atoms are coupled by an effective spring constant $K$. Matching to the continuum limit gives

$$
\boxed{Y = \frac{K}{a}}, \qquad \boxed{K = Ya}
$$

With cell mass $m \approx \rho\,a^3$, a rough estimate of the atomic vibration frequency is

$$
\nu \approx \frac{1}{2\pi}\sqrt{\frac{K}{m}}
\approx \frac{1}{2\pi a}\sqrt{\frac{Y}{\rho}}
\approx \frac{c_0}{2\pi a}
$$

For $a \approx 2\times10^{-10}\,\text{m}$ and $c_0 \approx 5\times10^{3}\,\text{m/s}$, this yields $\nu \approx 3\times10^{12}\,\text{Hz}$, which is in the terahertz range — consistent with typical phonon frequencies.

## 2. Discrete Dispersion Relation

The equation of motion for particle $r$ in the chain is

$$
m\ddot{\eta}_r = K(\eta_{r+1}+\eta_{r-1}-2\eta_r)
$$

Substituting the harmonic trial solution

$$
\eta_r = \eta_{\max}\,e^{i(\omega t-kra)}
$$

produces the dispersion relation

$$
\boxed{\omega^2 = \frac{4K}{m}\sin^2\!\left(\frac{ka}{2}\right)}
$$

In the long-wavelength limit ($ka \ll 1$), this recovers

$$
\omega \approx \left(\frac{K}{m}\right)^{1/2}\!ka = c_0k
$$

which reproduces the continuum result. At the Brillouin zone boundary ($k = \pi/a$), the group velocity $d\omega/dk$ vanishes and a standing wave forms.

---

# Part IV — Reflection and Transmission at a Boundary

Consider normal incidence on a planar boundary between two media with **acoustic impedances** $Z_1 = \rho_1 c_1$ and $Z_2 = \rho_2 c_2$.

## 1. Boundary Conditions

Continuity of particle velocity and pressure at the interface requires

$$
\dot{\eta}_i+\dot{\eta}_r = \dot{\eta}_t, \qquad p_i+p_r = p_t
$$

For harmonic plane waves the pressure–velocity relation is

$$
p = Z\dot{\eta} \;\text{(forward)}, \qquad p = -Z\dot{\eta} \;\text{(backward)}
$$

The corresponding pressure amplitudes are

$$
\begin{aligned}
p_i &= Z_1\dot{\eta}_i \\
p_r &= -Z_1\dot{\eta}_r \\
p_t &= Z_2\dot{\eta}_t
\end{aligned}
$$

## 2. Amplitude Coefficients

Solving the boundary equations yields the **velocity reflection and transmission coefficients**:

$$
\frac{\dot{\eta}_r}{\dot{\eta}_i} = \frac{Z_1-Z_2}{Z_1+Z_2}, \qquad \frac{\dot{\eta}_t}{\dot{\eta}_i} = \frac{2Z_1}{Z_1+Z_2}
$$

and the corresponding **pressure coefficients**:

$$
\frac{p_r}{p_i} = \frac{Z_2-Z_1}{Z_1+Z_2}, \qquad \frac{p_t}{p_i} = \frac{2Z_2}{Z_1+Z_2}
$$

When $Z_1 > Z_2$ the reflected velocity stays in phase with the incident wave while the reflected pressure flips sign. The opposite holds when $Z_1 < Z_2$.

## 3. Intensity Coefficients

Intensity is related to pressure and particle velocity by

$$
I = \frac{p_{\mathrm{rms}}^2}{Z} = Z\left\langle\dot{\eta}^2\right\rangle_{\mathrm{rms}}
$$

The intensity reflection and transmission fractions are

$$
\boxed{\frac{I_r}{I_i} = \left(\frac{Z_1-Z_2}{Z_1+Z_2}\right)^{\!2}},
\qquad
\boxed{\frac{I_t}{I_i} = \frac{4Z_1 Z_2}{(Z_1+Z_2)^2}}
$$

Energy conservation is satisfied identically:

$$
\boxed{\frac{I_r}{I_i}+\frac{I_t}{I_i} = 1}
$$

---

# Worked Problems

## Problem 1 — Open–Open Pipe Pressure Modes

The pressure wave equation in a pipe is

$$
\frac{\partial^2 p}{\partial z^2} = \frac{\rho_0}{B}\frac{\partial^2 p}{\partial t^2}
$$

We seek standing-wave solutions of the form

$$
p(z,t) = \bigl[C\cos kz + D\sin kz\bigr]\cos\omega t
$$

subject to the condition $p(L/2,\,0) = p_0$ for a pipe open at both ends.

**Applying boundary conditions.** Open ends enforce $p = 0$:

$$
p(0,t)=0 \;\Rightarrow\; C=0
$$

$$
p(L,t)=0 \;\Rightarrow\; \sin(kL)=0 \;\Rightarrow\; k=\frac{n\pi}{L}
$$

At $z = L/2$ and $t = 0$:

$$
p_0 = D\sin\!\left(\frac{n\pi}{2}\right)
$$

Only odd $n$ survive, giving $D = (-1)^{(n-1)/2}\,p_0$. Substitution into the wave equation yields the eigenfrequencies

$$
\omega = \frac{n\pi}{L}\sqrt{\frac{B}{\rho_0}}, \qquad n = 1,\,3,\,5,\,\dots
$$

> **Remark.** The boundary and initial data fix the mode index and amplitude, but one additional material or frequency datum is needed to determine $B$ and $\omega$ numerically.

## Problem 2 — Thermal Speed vs. Sound Speed

From kinetic theory the mean-square molecular speed is

$$
\tfrac{1}{2}mv_{\mathrm{rms}}^2 = \tfrac{3}{2}k_B T \;\;\Rightarrow\;\; v_{\mathrm{rms}}^2 = \frac{3k_B T}{m}
$$

The adiabatic sound speed in an ideal gas satisfies

$$
c^2 = \frac{\gamma P}{\rho} = \frac{\gamma k_B T}{m}
$$

Taking the ratio,

$$
\frac{v_{\mathrm{rms}}}{c} = \sqrt{\frac{3}{\gamma}}
$$

For a **monatomic** gas ($\gamma = 5/3$) the ratio is $\approx 1.34$; for a **diatomic** gas ($\gamma = 7/5$) it is $\approx 1.46$. In both cases the thermal and acoustic speeds are of the same order.

## Problem 3 — Acoustic Pressure at the Pain Threshold

Given $\rho = 1.29\;\mathrm{kg/m^3}$, $c = 330\;\mathrm{m/s}$, and $I = 10\;\mathrm{W/m^2}$:

$$
p_{\mathrm{rms}} = \sqrt{I\,\rho\,c} = \sqrt{10 \times 1.29 \times 330} \approx 65\;\mathrm{Pa}
$$

As a fraction of atmospheric pressure:

$$
\frac{p_{\mathrm{rms}}}{1\;\mathrm{atm}} = \frac{65}{1.013\times10^5} \approx 6.4\times10^{-4}
$$

This confirms that even at the pain threshold, acoustic pressure fluctuations remain a tiny fraction of ambient pressure.

## Problem 4 — Displacement Amplitude at 500 Hz (Pain Threshold)

From the plane-wave intensity relation:

$$
I = \tfrac{1}{2}\rho_0\,c\,\omega^2\eta_m^2, \qquad \omega = 2\pi f
$$

Solving for the displacement amplitude,

$$
\eta_m = \frac{1}{2\pi f}\sqrt{\frac{2I}{\rho_0\,c}}
$$

With $I = 10\;\mathrm{W/m^2}$, $\rho_0 = 1.29\;\mathrm{kg/m^3}$, $c = 330\;\mathrm{m/s}$, and $f = 500\;\mathrm{Hz}$:

$$
\eta_m \approx 6.9\times10^{-5}\;\mathrm{m} \approx 69\;\mu\mathrm{m}
$$

## Problem 5 — Near-Inaudible Tone at 500 Hz

At the threshold of hearing, $I = 10^{-10}\;\mathrm{W/m^2}$. Using the same formula with $f = 500\;\mathrm{Hz}$:

$$
\eta_m = \frac{1}{2\pi f}\sqrt{\frac{2I}{\rho_0\,c}} \approx 2.2\times10^{-10}\;\mathrm{m}
$$

This displacement is comparable to the diameter of a single atom — a striking illustration of the ear's sensitivity.

---

### References

1. H. J. Pain, *The Physics of Vibrations and Waves*, 6th ed. (Wiley, 2013).
