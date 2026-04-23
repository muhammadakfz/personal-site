---
title: "Wave and Vibration #1: Longitudinal Waves"
date: "2025-11-02"
description: "Lecture notes on longitudinal waves, sound in gases and solids, interface reflection, and worked examples."
categories: "Physics Waves"
tags: ["Waves", "Longitudinal Waves", "Sound Waves", "Physics"]
toc: true
toc_sticky: false
excerpt: "Core formulas and worked problems on longitudinal waves."
---

These notes cover the first block in vibration and wave physics.
You track how displacement links to pressure, density, speed, and energy.
The focus is longitudinal motion, first in gases, then in solids.

# Part I, Sound Waves in Gases

## 1. Core Variables

For small disturbances, split each quantity into equilibrium plus perturbation.

$$ P = P_0 + p, \quad V = V_0 + v, \quad \rho = \rho_0 + \rho_d. $$

Use $\eta(x,t)$ for particle displacement along $x$.
For a short element, the fractional volume change is

$$ \delta = \frac{\Delta V}{V_0} = \frac{\partial \eta}{\partial x}. $$

Define condensation, positive in compression, as

$$ s = \frac{\Delta \rho}{\rho_0} = \frac{\rho_d}{\rho_0}. $$

Mass stays fixed for each small fluid element:

$$ \rho V = \rho_0 V_0. $$

Write $\rho = \rho_0(1+s)$ and $V = V_0(1+\delta)$.
Then

$$ (1+s)(1+\delta) = 1. $$

For small signals, drop the second order term $s\delta$.
You get

$$ \boxed{s = -\delta = -\frac{\partial \eta}{\partial x}}. $$

## 2. Elastic Response and Sound Speed

Bulk modulus $B$ defines compressibility response:

$$ B \equiv -V\frac{\partial P}{\partial V}. $$

In linear acoustics:

$$ p = -B\delta = Bs. $$

For ideal gases:

- Isothermal disturbance, $B = P_0$
- Adiabatic disturbance, $B = \gamma P_0$

Sound speed then follows:

$$ c^2 = \frac{B}{\rho_0}, \qquad c = \sqrt{\frac{B}{\rho_0}}. $$

For adiabatic sound in an ideal gas:

$$ c = \sqrt{\frac{\gamma P_0}{\rho_0}}. $$

Adiabatic changes satisfy

$$ PV^\gamma = \text{constant}. $$

Differentiate this relation:

$$ dP\,V^\gamma + \gamma P V^{\gamma-1} dV = 0, $$

so

$$ -V\frac{dP}{dV} = \gamma P = B_a. $$

## 3. Equation of Motion

<p align="center">
  <img src="/assets/images/longitudinalWave/1.svg" width="680" alt="Longitudinal wave diagram 1" />
  <br />
</p>

Take a fluid slice with area $A$ and length $\Delta x$.
Pressure gradient gives net force:

$$ F_{\text{net}} = -A\frac{\partial p}{\partial x}\Delta x. $$

Its mass is $m = \rho_0 A\Delta x$.
Newton's law gives

$$ -A\frac{\partial p}{\partial x}\Delta x = \rho_0 A\Delta x\frac{\partial^2\eta}{\partial t^2}. $$

Cancel $A\Delta x$:

$$ -\frac{\partial p}{\partial x} = \rho_0\frac{\partial^2\eta}{\partial t^2}. $$

Use $p = -B\frac{\partial \eta}{\partial x}$.
Then

$$ B\frac{\partial^2\eta}{\partial x^2} = \rho_0\frac{\partial^2\eta}{\partial t^2}. $$

So the 1D wave equation is

$$ \boxed{\frac{\partial^2\eta}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2\eta}{\partial t^2}}. $$

## 4. Harmonic Form and Pressure Amplitude

General traveling wave form:

$$ \eta(x,t) = f(x-ct) + g(x+ct). $$

Single frequency form:

$$ \eta(x,t) = A\cos(kx-\omega t+\phi), \qquad \omega = ck. $$

Pressure perturbation:

$$ p(x,t) = -B\frac{\partial \eta}{\partial x} = BkA\sin(kx-\omega t+\phi). $$

So pressure amplitude is

$$ p_m = BkA. $$

Phasor form for a wave moving to $+x$:

$$ \eta(x,t) = \eta_m e^{i(\omega t-kx)}. $$

Derivatives:

$$ \dot{\eta} = i\omega\eta, \qquad \delta = \frac{\partial \eta}{\partial x} = -ik\eta. $$

Since $s=-\delta$:

$$ s = ik\eta. $$

With adiabatic modulus $B_a$:

$$ p = B_a s = iB_a k\eta. $$

## 5. Energy Density and Intensity

Particle speed is $u=\dot{\eta}$.
Kinetic energy density:

$$ E_k = \frac{1}{2}\rho_0 u^2 = \frac{1}{2}\rho_0\left(\frac{\partial \eta}{\partial t}\right)^2. $$

With $\eta=\eta_m\cos(kx-\omega t)$:

$$ E_k = \frac{1}{2}\rho_0\omega^2\eta_m^2\sin^2(kx-\omega t). $$

Time average:

$$ \boxed{\langle E_k\rangle = \frac{1}{4}\rho_0\omega^2\eta_m^2}. $$

Elastic potential energy density:

$$ E_p = \frac{1}{2}Bs^2 = \frac{1}{2}B\left(\frac{\partial \eta}{\partial x}\right)^2. $$

For the same harmonic wave:

$$ E_p = \frac{1}{2}Bk^2\eta_m^2\sin^2(kx-\omega t). $$

Since $B=\rho_0c^2$ and $\omega=ck$:

$$ \boxed{\langle E_p\rangle = \frac{1}{4}\rho_0\omega^2\eta_m^2}. $$

Total average energy density:

$$ \boxed{\langle E\rangle = \frac{1}{2}\rho_0\omega^2\eta_m^2}. $$

Using $p_m=\rho_0 c\omega\eta_m$:

$$ \langle E\rangle = \frac{p_m^2}{2B} = \frac{p_m^2}{2\rho_0 c^2}. $$

Intensity for a forward plane wave:

$$ \boxed{I = \langle E\rangle c = \frac{1}{2}\rho_0 c\omega^2\eta_m^2 = \frac{p_m^2}{2\rho_0 c}}. $$

# Part II, Sound Waves in Solids

## 1. Longitudinal Waves in a Rod

For a thin rod under uniaxial stress:

$$ \frac{\partial^2\eta}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2\eta}{\partial t^2}, \qquad c^2 = \frac{Y}{\rho}. $$

Here $Y$ is Young's modulus.

## 2. Isotropic 3D Elastic Constants

For isotropic solids, Poisson ratio is

$$ \sigma = -\frac{\partial \beta/\partial y}{\partial \eta/\partial x}. $$

Useful identities:

$$
\sigma = \frac{\lambda}{2(\lambda+\mu)}, \qquad
\lambda = \frac{\sigma Y}{(1+\sigma)(1-2\sigma)}, \qquad
\mu = \frac{Y}{2(1+\sigma)}.
$$

Bulk modulus:

$$ B = \lambda + \frac{2}{3}\mu = \frac{Y}{3(1-2\sigma)}. $$

Wave speeds in bulk isotropic solids:

$$
c_L^2 = \frac{\lambda+2\mu}{\rho}
= \frac{B+\frac{4}{3}\mu}{\rho}
= \frac{Y(1-\sigma)}{\rho(1+\sigma)(1-2\sigma)},
$$

$$
c_T^2 = \frac{\mu}{\rho}
= \frac{Y}{2\rho(1+\sigma)}.
$$

Typical Poisson ratio values:

- Steel, $\sigma \approx 0.30$
- Aluminum, $\sigma \approx 0.33$
- Glass, $\sigma \approx 0.22$
- Natural rubber, $\sigma \approx 0.49$

## 3. Shear Waves in Bulk Solids

<p align="center">
  <img src="/assets/images/longitudinalWave/2.svg" width="680" alt="Longitudinal wave diagram 2" />
  <br />
</p>

Use transverse displacement $\beta(x,t)$.
Shear stress is

$$ T = \mu\frac{\partial \beta}{\partial x}. $$

Force balance on a thin slice gives

$$ \frac{\partial}{\partial x}\left(\mu\frac{\partial \beta}{\partial x}\right) = \rho\frac{\partial^2 \beta}{\partial t^2}. $$

For homogeneous material, $\mu$ is constant:

$$ \mu\frac{\partial^2\beta}{\partial x^2} = \rho\frac{\partial^2\beta}{\partial t^2}. $$

So

$$ \boxed{\frac{\partial^2\beta}{\partial x^2} = \frac{1}{c_T^2}\frac{\partial^2\beta}{\partial t^2}, \qquad c_T^2 = \frac{\mu}{\rho}}. $$

Longitudinal bulk speed remains

$$ c_L^2 = \frac{\lambda+2\mu}{\rho}. $$

This exceeds the thin rod estimate $\sqrt{Y/\rho}$ for $0<\sigma<1/2$.

# Part III, Longitudinal Waves in Periodic Structures

## 1. Effective Stiffness and Young's Modulus

<p align="center">
  <img src="/assets/images/longitudinalWave/3.svg" width="680" alt="Longitudinal wave diagram 3" />
  <br />
</p>

Take a 1D atomic chain with spacing $a$.
Neighbor atoms connect through an effective spring constant $K$.
Macroscopic Young's modulus scales as

$$ \boxed{Y = \frac{K}{a}}, \qquad \boxed{K = Ya}. $$

With cell mass $m\approx \rho a^3$, a rough atomic vibration scale is

$$
\nu \approx \frac{1}{2\pi}\sqrt{\frac{K}{m}}
\approx \frac{1}{2\pi a}\sqrt{\frac{Y}{\rho}}
\approx \frac{c_0}{2\pi a}.
$$

For $a\approx 2\times10^{-10}\,\text{m}$ and $c_0\approx 5\times10^3\,\text{m s}^{-1}$:

$$ \nu \approx 3\times10^{12}\,\text{Hz}. $$

## 2. Discrete Model and Dispersion

Equation of motion for particle $r$:

$$ m\ddot{\eta}_r = K(\eta_{r+1}+\eta_{r-1}-2\eta_r). $$

Use trial form $\eta_r=\eta_{\max}e^{i(\omega t-kra)}$.
Dispersion relation:

$$ \boxed{\omega^2 = \frac{4K}{m}\sin^2\left(\frac{ka}{2}\right)}. $$

This result shows dispersion in a discrete medium.

# Part IV, Reflection and Transmission at a Boundary

<p align="center">
  <img src="/assets/images/longitudinalWave/4.svg" width="680" alt="Longitudinal wave diagram 4" />
  <br />
</p>

Take normal incidence at a boundary between two media.
Acoustic impedances are

$$ Z_1=\rho_1 c_1, \qquad Z_2=\rho_2 c_2. $$

## 1. Boundary Conditions

At the interface:

$$ \dot{\eta}_i+\dot{\eta}_r=\dot{\eta}_t, \qquad p_i+p_r=p_t. $$

For harmonic plane waves:

$$ p=Z\dot{\eta} \text{ for forward waves}, \qquad p=-Z\dot{\eta} \text{ for backward waves}. $$

So:

$$ p_i=Z_1\dot{\eta}_i, \qquad p_r=-Z_1\dot{\eta}_r, \qquad p_t=Z_2\dot{\eta}_t. $$

## 2. Velocity and Pressure Amplitude Coefficients

From continuity equations:

$$ \frac{\dot{\eta}_r}{\dot{\eta}_i}=\frac{Z_1-Z_2}{Z_1+Z_2}, \qquad \frac{\dot{\eta}_t}{\dot{\eta}_i}=\frac{2Z_1}{Z_1+Z_2}. $$

Pressure ratios:

$$ \frac{p_r}{p_i}=\frac{Z_2-Z_1}{Z_1+Z_2}, \qquad \frac{p_t}{p_i}=\frac{2Z_2}{Z_1+Z_2}. $$

If $Z_1>Z_2$, reflected velocity stays in phase with incident velocity.
Reflected pressure flips phase.
If $Z_1<Z_2$, the phase behavior swaps.

## 3. Intensity Coefficients

Use $I=p_{\mathrm{rms}}^2/Z = Z\langle \dot{\eta}^2\rangle_{\mathrm{rms}}$.

Reflection and transmission fractions:

$$
\boxed{\frac{I_r}{I_i}=\left(\frac{Z_1-Z_2}{Z_1+Z_2}\right)^2},
\qquad
\boxed{\frac{I_t}{I_i}=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}}.
$$

Energy check:

$$ \boxed{\frac{I_r}{I_i}+\frac{I_t}{I_i}=1}. $$

# Worked Problems

## Problem 1, Open Open Pipe Pressure Mode

Given

$$ \frac{\partial^2 p}{\partial z^2}=\frac{\rho_0}{B}\frac{\partial^2 p}{\partial t^2}, $$

with trial form

$$ p(z,t)=\left[C\cos kz + D\sin kz\right]\cos\omega t, $$

and condition $p(L/2,0)=p_0$ for a pipe open at both ends.

Open ends set pressure perturbation to zero:

$$ p(0,t)=0 \Rightarrow C=0, $$

$$ p(L,t)=0 \Rightarrow \sin(kL)=0 \Rightarrow k=\frac{n\pi}{L}. $$

At $z=L/2$, $t=0$:

$$ p_0=D\sin\left(\frac{n\pi}{2}\right). $$

So only odd $n$ survive, and

$$ D=\frac{p_0}{\sin(n\pi/2)} = (-1)^{\frac{n-1}{2}}p_0. $$

Substitute into wave equation:

$$ k^2=\frac{\rho_0\omega^2}{B}. $$

Then

$$ \omega=\frac{n\pi}{L}\sqrt{\frac{B}{\rho_0}}, \qquad B=\rho_0\left(\frac{\omega L}{n\pi}\right)^2, \qquad n=1,3,5,\dots $$

Practical note.
Boundary and initial data fix mode index and amplitude.
You still need one material or frequency datum to fix both $B$ and $\omega$ numerically.

## Problem 2, Thermal Speed Versus Sound Speed

From kinetic theory:

$$ \frac{1}{2}mv_{\mathrm{rms}}^2=\frac{3}{2}k_B T \Rightarrow v_{\mathrm{rms}}^2=\frac{3k_B T}{m}. $$

For ideal gas sound:

$$ c^2=\frac{\gamma P}{\rho}=\frac{\gamma k_B T}{m}. $$

Take the ratio:

$$ \frac{v_{\mathrm{rms}}}{c}=\sqrt{\frac{3}{\gamma}}. $$

For monoatomic gas, $\gamma=5/3$, ratio $\approx1.34$.
For diatomic gas, $\gamma=7/5$, ratio $\approx1.46$.
Both speeds sit on the same order.

## Problem 3, Acoustic Pressure at Pain Threshold

Given $\rho=1.29\,\mathrm{kg/m^3}$, $c=330\,\mathrm{m/s}$, and $I=10\,\mathrm{W/m^2}$:

$$ I=\frac{p_{\mathrm{rms}}^2}{\rho c} \Rightarrow p_{\mathrm{rms}}=\sqrt{I\rho c}. $$

Compute:

$$ p_{\mathrm{rms}}=\sqrt{10\times1.29\times330}\approx65\,\mathrm{Pa}. $$

Convert to atmosphere:

$$ \frac{p_{\mathrm{rms}}}{1\,\mathrm{atm}}=\frac{65}{1.013\times10^5}\approx6.4\times10^{-4}. $$

## Problem 4, Displacement Amplitude at Pain Threshold, 500 Hz

Use plane wave relation:

$$ I=\frac{1}{2}\rho_0 c\,\omega^2\eta_m^2, \qquad \omega=2\pi f. $$

So

$$ \eta_m=\frac{1}{2\pi f}\sqrt{\frac{2I}{\rho_0 c}}. $$

With $I=10\,\mathrm{W/m^2}$, $\rho_0=1.29\,\mathrm{kg/m^3}$, $c=330\,\mathrm{m/s}$, $f=500\,\mathrm{Hz}$:

$$ \eta_m\approx6.9\times10^{-5}\,\mathrm{m}. $$

## Problem 5, Near Inaudible Tone at 500 Hz

Take $I=10^{-10}\,\mathrm{W/m^2}$ in air.
Use the same formula:

$$ \eta_m=\frac{1}{2\pi f}\sqrt{\frac{2I}{\rho_0 c}}. $$

With $f=500\,\mathrm{Hz}$, $\rho_0=1.29\,\mathrm{kg/m^3}$, $c=330\,\mathrm{m/s}$:

$$ \eta_m\approx2.2\times10^{-10}\,\mathrm{m}. $$

This lies on the molecular size scale.

### Reference

- H. J. Pain, The Physics of Vibrations and Waves, 6th ed., Wiley, 2013.