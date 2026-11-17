# Gauss equations

## Summary

Rate of change of the orbital elements in terms of the disturbing forces.

## Body

### Non circular, non equatorial orbits
$e \neq 0$ and $i \neq 0$

In [RSW frame](local_orbital_frames.md) :

$$
\frac{da}{dt} = \frac{2}{n\sqrt{1 - e^2}} \{ e \sin{\nu} F_R + \frac{p}{r} F_S \}
$$

$$
\frac{de}{dt} = \frac{\sqrt{1 - e^2}}{na} \{ \sin{\nu} F_R + (\cos{\nu} + \frac{e + \cos{\nu}}{1 + e\cos{\nu}}) F_S \}
$$

$$
\frac{di}{dt} = \frac{r \cos{u}}{n a^2 \sqrt{1 - e^2}} F_W
$$

$$
\frac{d \Omega}{dt} = \frac{r \sin{u}}{n a^2 \sqrt{1 - e^2} \sin{i}} F_W
$$

$$
\frac{d \omega}{dt} = \frac{\sqrt{1 - e^2}}{n a e} \{-\cos{\nu} F_R + sin{\nu}(1 + \frac{r}{p})\} F_S - \frac{r \cot{i} \sin{u}}{h} F_W
$$

$$
\frac{d M_0}{dt} = \frac{1}{n a e} \{ (p\cos{\nu} - 2er)F_R - (p+r)\sin{\nu} F_S \} -\frac{dn}{dt}(t-t_0)
$$



where :
  * $a$ semi-major axis ($m$)
  * $n$ mean motion / orbital angular speed ($rad.s^{-1}$)
  * $e$ eccentricity (no dimension)
  * $\nu$ true anomaly ($rad$)
  * $p$ semi-parameter ($m$)
  * $r$ radius ($m$)
  * $\vec{h}=\vec{r}\times \vec{v}$ angular momentum, $h = \|\vec{h}\|$
  * $(\vec{R}, \vec{S}, \vec{W})$ unit vectors of the RSW frame
  * $\vec{F} = (F_R, F_S, F_W)_{(\vec{R}, \vec{S}, \vec{W})}$ the perturbing force in RSW frame

## See also
- [Orbital elements](orbital_elements.md)

## Sources

- [GUIZIOU Robert, Cours de mécanique spatiale](https://mecaspa.cannes-aero-patrimoine.net/COURS_SA/PERTURBA/EQ_GAUSS.htm)
- Vallado. Fundamentals of Astrodynamics and Applications Fourth Edition. §9.3