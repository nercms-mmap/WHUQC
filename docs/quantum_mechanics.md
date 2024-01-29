---
sidebar_label: 'Quantum Mechanics'
sidebar_position: 1
title: Quantum Mechanics
---

# Quantum Mechanics


:::tip[ANIMATION]

play the animation [video](https://www.bilibili.com/video/BV1Yx41127fG/?spm_id_from=333.337.search-card.all.click) shown in
Figure [1.1](#fig:double-slit-experiment).

:::

**Double-silt experiment** : The double-slit interference experiment can be done with a single photon. Moreover, if we place a
measurement device behind the double silts, the interference phenomenon
will disappear (it seems the photon knows it is being watched). How is
one to understand this phenomenon?

<img
    id="fig:double-slit-experiment"
    src={require('../static/img/double-silt-experiment.png').default}
    alt="双缝实验"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.1: double slit experiment</figcaption>

<!-- export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors. -->

<!-- ![Example banner](../static/img/double-silt-experiment.png) -->

<!-- <figure>
  <img src="../static/img/double-silt-experiment.png" alt="Double-slit experiment" id="fig:double-slit-experiment" />
  <figcaption>Figure 1: Double-slit experiment</figcaption>
</figure> -->
<!-- ![Sample Image](../static/img/double-silt-experiment.png) -->
<!-- <figcaption style={{textAlign: 'center'}}>This is the caption for the image.</figcaption> -->

<!-- <img src="../static/img/double-silt-experiment.png"  style={{width: '30%', height: 'auto', display: 'block', margin: '0 auto'}} /> -->

<!-- <figure>
  <a href="/link/to/page">
    <img src="../static/img/double-silt-experiment.png" alt="Alt text" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />
  </a>
  <figcaption style={{ textAlign: 'center' }}>This is the caption for the image.</figcaption>
</figure> -->

<!-- <a href="#example-banner">
  <img
    id="example-banner"
    src={require('../static/img/double-silt-experiment.png').default}
    alt="Example banner"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
  />
</a> -->



<!-- <a href="#example-banner">Reference to Example Banner Image</a> -->



<!-- ![Double-silt
experiment](figures/double-silt-experiment.png){#fig:double silt experiment
width="50%"} -->

**Explanations:** two important concepts can be derived from the above
experiment:

-   **Superposition.** Let the state of the quantum system be given by
    $X = [c_0, c_1, \cdots ,c_{n-1}]^{\top} \in \mathbb{C}^n$. It is
    incorrect to say that the probability of the photon's being in
    position $k$ is $\|c_k\|^2$. Rather, to be in state $X$ means that
    the particle is in some sense *in all positions simultaneously*. To
    explain the above double-silt experiment, the photon passes through
    the top slit and the bottom slit simultaneously, and when it exists
    both slits, it can cancel itself out. A photon is not in a single
    position, rather it is in many positions, a superposition.

-   **Measurement.** Seeing things existing in many positions
    simultaneously is counter-intuitive. Our daily-life experience tells
    us that things are in one position or (exclusive or!) another. How
    can this be? The reason we see particles in one particular position
    is because we have performed a measurement. When we measure
    something at the quantum level, the quantum object that we have
    measured is no longer in a superposition of states, rather it
    collapses to a single classical state. So we have to redefine what
    the state of a quantum system is: a system is in state $X$ means
    that after measuring it, it will be found in position $k$ with
    probability $|c_k|^2$.

In the following discussion, superposition and measurement are two
important and fundamental concepts rooted in quantum mechanics.

## Quantum States

### Case 1: position on a line

<img
    id="fig:positions-in-a-line"
    src={require('../static/img/line-position.png').default}
    alt="line position"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.2: positions in a line</figcaption>


Consider a subatomic particle on a line where it can only be detected at
one of the equally spaced points $\{x_0, x_1, \cdots , x_{n-1}\}$ shown
in Figure [1.2](#fig:positions-in-a-line).


The particle being at the point $x_k$ is denoted as $\ket{x_k}$, using
the Dirac **ket** notation $\ket{\cdot}$. To each of these $n$ **basic
states**, we shall associate a column vector: $$\begin{aligned}
        \ket{x_0}   &\longmapsto  [1,0,\cdots,0]^{\top}\\
        \ket{x_1}   &\longmapsto  [0,1,\cdots,0]^{\top}\\
        &\quad \vdots\\
        \ket{x_{n-1}}   &\longmapsto  [0,0,\cdots,1]^{\top}     
    \end{aligned}$$

The **state** of the particle $\ket{\psi}$ is a linear combination of
$\ket{x_0}, \ket{x_1}, \cdots, \ket{x_{n-1}}$, by suitable complex
weights, $c_0, c_1, \cdots, c_{n-1}$ known as **complex amplitudes**,
$$\ket{\psi}=c_0\ket{x_0}+c_1\ket{x_1}+\cdots+c_{n-1}\ket{x_{n-1}}=\sum_{k=0}^{n-1}c_k\ket{x_k}$$
We say that the state $\ket{\psi}$ is a **superposition** of the basic
states. $\ket{\psi}$ represents the particle as being simultaneously in
all $\{x_0, x_1, \cdots, x_{n-1}\}$ locations, or a blending of all the
$\ket{x_k}$.

Thus, every state of our system can be represented by an element of
$\mathbb{C}^n$ as: $$\ket{\psi}=[c_0, c_1, \cdots, c_{n-1}]^{\top}$$ The
norm square of the complex number $c_k$ divided by the norm squared of
$\ket{\psi}$, called **probability amplitude** $\bar{c}_k$, will tell us
the probability that, after observing the particle, we will detect it at
the point $x_k$:
$$p(x_k)=|\bar{c}_k|^2=(\frac{|c_k|}{|\ket{\psi}|})^2=\frac{|c_k|^2}{|\ket{\psi}|^2}=\frac{|c_k|^2}{\sum_k |c_k|^2}$$
Observe that $p(x_k)$ is always a positive real number and
$0 \leq p(x_k) \leq 1$, as any genuine probability should be.

When $\ket{\psi}$ is observed, we will find it in one of the basic
states. We might write it as: $$\ket{\psi} \leadsto{2}  \ket{x_k}$$
The probability of obtaining $\ket{x_k}$ after observing $\ket{\psi}$ is
$p(x_k)$ where $k\in\{0,1,\cdots,n-1\}$.

Two typical operations of ket vectors in the Hilbert space:

-   **addition:** $$\begin{aligned}
                \ket{\psi}+\ket{\psi^{\prime}}&=(c_0+c_0^{\prime})\ket{x_0}+(c_1+c_1^{\prime})\ket{x_1}+\cdots+(c_{n-1}+c_{n-1}^{\prime})\ket{x_{n-1}}\\
                &=[c_0+c_0^{\prime},c_1+c_1^{\prime},\cdots,c_{n-1}+c_{n-1}^{\prime}]^{\top}
            \end{aligned}$$

-   **scalar multiplication:**$$c\ket{\psi}=cc_0\ket{x_0}+cc_1\ket{x_1}+\cdots+cc_{n-1}\ket{x_{n-1}}
            =[cc_0,cc_1,\cdots,cc_{n-1}]^{\top}$$

    It is worth noting that a ket's length does not matter as far as physics goes. In other
    words, the ket $2\ket{\psi}$ describes *the same physical system* as
    $\ket{\psi}$.

### Case 2: single-particle spin system

:::tip[ANIMATION]

play the animation [video](https://www.bilibili.com/video/BV1ta4y1a7fp?from=search&seid=2882474434643948118&spm_id_from=333.337.0.0) shown in
Figure [1.3](#fig:Stern-Gerlach experiment).

:::

**Stern-Gerlach experiment** : the magnetic field splits
the beam of electrons into two streams, found either at the top of the
screen or at the bottom, *but none in between*! Conclusion: when the
spinning particle is measured in a given direction, it can only be found
in two states, *i.e.*, it spins either clockwise or anticlockwise.

<img
    id="fig:Stern-Gerlach experiment"
    src={require('../static/img/Stern-Gerlach-experiment.png').default}
    alt="Stern-Gerlach experiment"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.3: Stern-Gerlach experiment</figcaption>

Next, we put the two Stern-Gerlach apparatus (SGA) in different angles,
and discuss the observation results.

<img
    id="fig:SGA-0"
    src={require('../static/img/SGA-0.png').default}
    alt="SGA-0"
    style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.4: $0^{\circ}$ SGA experiment</figcaption>

-   **Step 1: $0^{\circ}$ SGA experiment.** Figure
    [1.4](#fig:SGA-0) shows
    the particle's spin direction and SGA's placement orientation before
    measurement (sub-figure A) and after measurement (sub-figure B).
    After measurement, the particle is ***prepared** in state*
    $\sigma_z = +1$. If the particle state is not perturbed, and the
    SGA's placement orientation is kept the same, the following
    measurements will always have the same results.

<img
    id="fig:SGA-180"
    src={require('../static/img/SGA-180.png').default}
    alt="SGA-180"
    style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.5: $180^{\circ}$ SGA experiment</figcaption>

-   **Step 2: $180^{\circ}$ SGA experiment.** After preparing the spin
    by measuring it with SGA, we turn the apparatus upside down and then
    measure $\sigma_z$ again (Figure
    [1.5](#fig:SGA-180)).
    What we find is that if we originally prepared $\sigma_z = +1$, the
    upside down apparatus records $\sigma_z = -1$.

<img
    id="fig:SGA-90"
    src={require('../static/img/SGA-90.png').default}
    alt="SGA-90"
    style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.6: $90^{\circ}$ SGA experiment</figcaption>

-   **Step 3: $90^{\circ}$ SGA experiment.** So far, there is still no
    difference between classical physics and quantum physics. The
    difference only becomes apparent when we rotate the apparatus
    through an arbitrary angle, say $\pi/2$ radians ($90$ degrees): (1)  The apparatus begins in the upright position (with the up-arrow
    along the z axis). A spin is prepared with $\sigma_z = +1$. (2) rotate the SGA so that the up-arrow points along the x axis (Figure
    [1.6](#fig:SGA-90)). (3) make a measurement of what is
    presumably the x component of the spin, $\sigma_x$. The apparatus
    gives either $\sigma_x = +1$ or $\sigma_x = −1$, and the numbers of
    $\sigma_x = +1$ events and $\sigma_x = −1$ events are statistically
    equal. In other words, the average value of $\sigma_x$ is zero. -->

<img
    id="fig:SGA-theta"
    src={require('../static/img/SGA-theta.png').default}
    alt="SGA-90"
    style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.7 $\theta^{\circ}$ SGA experiment</figcaption>

-   **Step 4: $\theta^{\circ}$ SGA experiment.** Now let's do the whole
    thing over again, but instead of rotating the SGA to lie on the x
    axis, rotate it to an arbitrary direction along the unit vector
    $\hat{n}$. If $\hat{n}$ lies at an angle $\theta$ with respect to
    $\hat{m}$ (the prepared spin direction of the particle shown in
    Figure [1.7](#fig:SGA-theta)), each time we do the experiment we get
    $\sigma = +1$ or $\sigma = −1$, and the average value of the
    measurement $\sigma$ is $\hat{n}\cdot\hat{m}=\cos\theta$.


    Let the probability of measuring $\sigma$ is $p(\sigma)$, thus we
    have the following set of equations: $$\begin{cases}
                p(\sigma=+1)\cdot(+1)+p(\sigma=-1)\cdot(-1)=\cos\theta\\
                p(\sigma=+1)+p(\sigma=-1)=1
            \end{cases}$$ 
            
            From which we can calculate the measuring
    probabilities of $\sigma = +1$ and $\sigma = -1$.

**State representation.** According to the previous Stern-Gerlach
experiment, particle's spin state can be represented as the
superposition of basic states in a specific direction.

-   **state along the z-axis** can be represented, according to the
    previous $0^{\circ}$ and $180^{\circ}$ SGA experiments, as
    $$\ket{\psi} = \alpha_u\ket{u} + \alpha_d\ket{d}$$ where
    $\alpha_u=\braket{u|\psi}$ and $\alpha_d=\braket{d|\psi}$ are the
    probability amplitudes meeting the following equation set:
$$
\begin{align*}
    p(u) &= \alpha_u^{\dagger}\alpha_u = \langle\psi|u\rangle\langle u|\psi\rangle \\
    p(d) &= \alpha_d^{\dagger}\alpha_d = \langle\psi|d\rangle\langle d|\psi\rangle \\
    p(u) + p(d) &= \alpha_u^{\dagger}\alpha_u + \alpha_d^{\dagger}\alpha_d = 1
\end{align*}
$$


-   **state along the x-axis.** According to the previous $90^{\circ}$
    SGA experiments, if SGA initially prepares $\ket{r}$, and then is
    rotated to measure $\sigma_z$, there will be equal probabilities for
    $up$ and $down$. Thus, $\alpha_u^{\dagger}\alpha_u$ and
    $\alpha_d^{\dagger}\alpha_d$ must both be equal to $\frac{1}{2}$. A
    simple vector that satisfies this rule is:
    $$\ket{r} = \frac{1}{\sqrt{2}}\ket{u} + \frac{1}{\sqrt{2}}\ket{d}$$
    Considering the exclusive constraints between $r$ and $l$, *i.e.*,
    $\braket{r|l}=\braket{l|r}=0$, we have:
    $$\ket{l} = \frac{1}{\sqrt{2}}\ket{u} - \frac{1}{\sqrt{2}}\ket{d}$$

-   **state along the y-axis.** Represent spin states along the y-axis
    is more complicate because of the following constraints: $$\begin{cases}
                \begin{aligned}
                    \braket{i|o}=0\ \ &\\
                    \braket{i|u}\braket{u|i}=\frac{1}{2}, &\ \ \braket{i|d}\braket{d|i}=\frac{1}{2}\\
                    \braket{o|u}\braket{u|o}=\frac{1}{2}, &\ \ \braket{o|d}\braket{d|o}=\frac{1}{2}\\
                    \braket{i|l}\braket{l|i}=\frac{1}{2}, &\ \ \braket{i|r}\braket{r|i}=\frac{1}{2}\\
                    \braket{o|l}\braket{l|o}=\frac{1}{2}, &\ \ \braket{o|r}\braket{r|o}=\frac{1}{2}\\
                \end{aligned}
            \end{cases}$$ From which a set of proper representation of
    state along the y-axis is $$\begin{cases}
                \ket{i} = \frac{1}{\sqrt{2}}\ket{u} + \frac{i}{\sqrt{2}}\ket{d}\\
                \ket{o} = \frac{1}{\sqrt{2}}\ket{u} - \frac{i}{\sqrt{2}}\ket{d}
            \end{cases}$$

**Transition amplitude.** Suppose the start state is
$\ket{\psi}=[c_0,c_1,\cdots,c_{n-1}]^{\top}$， the end state is
$\ket{\psi^{\prime}}=[c_0^{\prime}, c_1^{\prime}, \cdots, c_{n-1}^{\prime}]^{\top}$,
the transition amplitude is defined as $$\braket{\psi^{\prime}|\psi} = 
    \begin{bmatrix}\overline{c_0^{\prime}},\ \overline{c_1^{\prime}},\ \cdots,\ \overline{c_{n-1}^{\prime}}\end{bmatrix}
    \begin{bmatrix}c_0\\ c_1\\ \vdots\\ c_{n-1}\end{bmatrix}
    =\sum_{k=0}^{n-1}\overline{c_{k}^{\prime}}\times c_k$$ where
$\bra{\psi^{\prime}}=[\overline{c_0^{\prime}},\ \overline{c_1^{\prime}},\ \cdots,\ \overline{c_{n-1}^{\prime}}]$
is called the **bra** vector of the corresponding ket vector
$\ket{\psi^{\prime}}$.

We can represent the start state, the ending state, and the amplitude of
going from the first to the second as the decorated arrow:
$$\ket{\psi} \stackrel{\braket{\psi^{\prime}|\psi}}{\leadsto{2}}  \ket{\psi^{\prime}}\\$$

:::note
note: transition-amplitude The transition amplitude between two states
may be zero. In fact, that happens precisely when the two states are
orthogonal to one another. This simple fact hints at the physical
content of orthogonality: orthogonal states are as far apart as they can
possibly be. We can think of them as *mutually exclusive alternatives*:
for instance, an electron can be in an arbitrary superposition of spin
up and down, but after we measure it in the z direction, it will always
be *either* up *or* down, never both up *and* down.
:::

We can express $\ket{\psi}$ in the orthonormal basis
$\ket{b_0},\ \ket{b_1},\ \cdots,\ \ket{b_{n-1}}$ as
$$\ket{\psi} = b_0\ket{b_0}+b_1\ket{b_1}+\cdots+b_{n-1}\ket{b_{n-1}}$$
where the probability amplitude is also the transition amplitude,
*i.e.*, $b_j=\braket{b_k|\psi}$, and that
$|b_0|^2+|b_1|^2+\cdots+|b_{n-1}|^2=1$.

## Observables and Measuring

### Basic concepts

**Specification of a physical system:** On the one hand, its **state
space**, *i.e.*, the collection of all the states (discussed in the
previous section), and on the other hand, **observable set**, *i.e.*,
the physical quantities observed in each state of the state space.

**Observable:** A specific question we pose to the system. For example,
if the system is currently in some given state $\ket{\psi}$, which
values can we possibly observe?

**Measuring:** The process of asking a specific question and receiving a
definite answer.

<img
    id="fig:measurement-comparison"
    src={require('../static/img/measurement-comparison.png').default}
    alt="measurement-comparison"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.8: Comparisons of measurement operations in classic and quantum physics</figcaption>


The measurement operations in classic and quantum physics are inherently
different. Figure
[1.8](#fig:measurement-comparison) shows two key differences.


### The principles

In this part, we present the five principles about the observing and
measurement. The first four principles do not involve the evolution of
state-vectors with time.

-   **Principle 1:** The observable or measurable quantities of quantum
    mechanics are represented by linear operators $\mathbf{\Omega}$,
    which must also be Hermitian[^3].

-   **Principle 2:** The possible results of a measurement are the
    *eigenvalues* of the operator that represents the observable. The
    collapsed state is the related *eigenvector* of the operator that
    represents the observable. If the system is in the eigenstate
    $\ket{\lambda_i}$, the result of a measurement is *guaranteed* to be
    $\lambda_i$.

    :::info[Example 0.1: Positions on a line]
    In this example, the most obvious observable is
    **position**. As we have stated already, each observable represents
    a specific question we pose to the quantum system. Position asks:
    "Where can the particle be found?" Which hermitian operator
    corresponds to position? We are going to tell first how it acts on
    the basic states:
    $$\mathbf{P}(\ket{\psi})=\mathbf{P}(\ket{x_i})=x_i\ket{x_i}$$
    Considering $\ket{x_i}=[0,\cdots,1,\cdots,0]^{\top}$ is the one-hot
    vector with only the $i$-th element equals to $1$, we have $$\mathbf{P}=\begin{bmatrix}
                    x_0 & 0 & \cdots & 0\\
                    0 & x_1 & \cdots & 0\\
                    \vdots & \vdots & \ddots & \vdots\\
                    0 & 0 & \cdots & x_{n-1}
                    \end{bmatrix}$$
    :::

    :::info[Example 0.2: Single-particle spin system]
    ex:spin Let's recall the previous Stern-Gerlach experiment, in which
    a particle with vertical upward spin passing through a
    z-axis-directional upward SGA generates "+1" observation value and
    its spin state is kept upward. Meanwhile, given a particle with
    vertical downward spin, its SGA observation reads "-1" value and its
    spin state is kept downward. Hence we have the following formulations:$$
    \begin{cases}
				\mathbf{\sigma}_z\ket{u} = \ket{u}\\
				\mathbf{\sigma}_z\ket{d} = -1\ket{d}\\
				\braket{u|d} = 0
			\end{cases}$$
     
    Let $\ket{u}=[1,0]^{\top}$,$\ket{d}=[0,1]^{\top}$, and
    $\mathbf{\sigma}_z\in\mathbb{R}^{2\times 2}$, the above set of
    equations can be re-formulated and the matrix of x-axis spin
    operator $\mathbf{\sigma}_x$ can be calculated as the following $$\begin{cases} \begin{bmatrix}
        (\sigma_z)_{11} & (\sigma_z)_{12}\\(\sigma_z)_{21} & (\sigma_z)_{22}
    \end{bmatrix}\begin{bmatrix}
					1 \\ 0
				\end{bmatrix}=\begin{bmatrix}
					1 \\ 0
				\end{bmatrix}\\\\ \begin{bmatrix}
					(\sigma_z)_{11} & (\sigma_z)_{12}\\
					(\sigma_z)_{21} & (\sigma_z)_{22}
				\end{bmatrix}\begin{bmatrix}
					0 \\ 1
				\end{bmatrix}=
				-\begin{bmatrix}
					0 \\ 1
				\end{bmatrix} \end{cases}\quad \Rightarrow\quad \mathbf{\sigma}_z=\begin{bmatrix}
				1 & 0 \\
				0 & -1
			\end{bmatrix}$$
       
       Similarly, the matrices of x-axis spin operator $\mathbf{\sigma}_x$ and y-axis spin operator $\mathbf{\sigma}_y$ can be written as $$\mathbf{\sigma}_x=\begin{bmatrix}
				0 & 1 \\
				1 & 0
			\end{bmatrix}\quad \textrm{and} \quad
			\mathbf{\sigma}_y=\begin{bmatrix}
				0 & -i \\
				i & 0
			\end{bmatrix}$$
    :::



    :::note[Note 0.2: Measurement operator]
    note:operator There are some truths and misconception about the
    measurement operator:

    **Truths:** (1) Operators are the things we use to calculate
    eigenvalues and eigenvectors; (2) Operators act on state-vectors
    (which are abstract mathematical objects), not on actual physical
    systems; (3) When an operator acts on a state-vector, it produces a
    new state-vector.

    **Misconception:** When a measurement operator $\mathbf{\Omega}$
    acts on a state-vector, it produces a new state-vector, but that
    operation is in no way the same as acting on the state with the
    operator $\mathbf{\Phi}$. The former, $\mathbf{\Omega}\ket{\psi}$,
    means a state collapse and the formulation only valid when
    $\ket{\psi}$ is the eigenvector of $\mathbf{\Omega}$. The latter,
    $\mathbf{\Phi}\ket{\psi}$, is always valid and means that a state
    transition from the original state $\ket{\psi}$ to a new state
    $\mathbf{\Phi}\ket{\psi}$.
    :::

-   **Principle 3:** Unambiguously distinguishable[^4] states are
    represented by orthogonal vectors. Inner product of two states is a
    measure of the inability to distinguish them with certainty.

-   **Principle 4:** If $\ket{\psi}$ is the state-vector of a system,
    and the observable $\mathbf{\Omega}$ is measured, the probability to
    observe value $\lambda_i$ is:
    $$p(\lambda_i) = |\braket{\lambda_i|\psi}|^2=\braket{\psi|\lambda_i}\braket{\lambda_i|\psi}$$
    But, in general, there is no way to tell for certain which of these
    values will be observed. There is only a probability $p(\lambda_i)$,
    expressed in terms of the overlap of $\ket{\psi}$ and
    $\ket{\lambda_i}$, describing that the outcome will be $\lambda_i$.

-   **Principle 5:** The evolution of a quantum system (that is not a
    measurement) is given by a unitary operator or transformation,
    *i.e.*, $\ket{\psi(t+1)}=\mathbf{U}\ket{\psi(t)}$.

### The expected value of observing

Suppose that $\lambda_0,\lambda_1,\cdots,\lambda_{n-1}$ is the list of
eigenvalues of a measurement operator $\mathbf{\Omega}$. Let us prepare
our quantum system so that it is in state $\ket{\psi}$ and let us
observe the value of $\mathbf{\Omega}$. We are going to obtain one or
another of the aforementioned eigenvalues. Now, let us start all over
again many times, say, $n$ times, and let us keep track of what was
observed each time. At the end of our experiment, the eigenvalue
$\lambda_i$ has been seen $p_i$ times, where $0 \leq p_i \leq n$ (in
statistical jargon, its frequency is $p_i/n$). Now perform the
calculation
$$\lambda_0\times\frac{p_0}{n}+\lambda_1\times\frac{p_1}{n}+\cdots+\lambda_{n-1}\times\frac{p_{n-1}}{n}$$
If $n$ is sufficiently large, this number (known in statistics as the
estimated expected value of $\mathbf{\Omega}$) will be very close to
$\braket{\mathbf{\Omega}}_{\psi}=\braket{\mathbf{\Omega}\psi,\psi}$.

### Multiple-step observing

Before we investigate the multiple-step observing, let's first consider
what happens after single-step observing. Suppose the quantum system
state is $\ket{\psi}$, and the observing operator is $\mathbf{\Omega}$
(with eigenvalues $\{\lambda_i\}$ and corresponding eigenvectors
$\{\ket{\lambda_i}\}$ as the previous section). After one-step
observing, we first get an answer $\lambda_i$ with probability
$p_i=\braket{\psi|\lambda_i}\braket{\lambda_i|\psi}$. Then, the system's
state collapse from $\ket{\psi}$ to the corresponding eigenstate
$\ket{\lambda_i}$ as shown in Figure
[1.9](#fig:observing-collapse).

<img
    id="fig:observing-collapse"
    src={require('../static/img/observing-collapse-1.png').default}
    alt="observing-collapse"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.9: observing collapse</figcaption>

According to the above discussion, observing in the quantum world will
necessarily lead to state collapse. Hence, the result of multiple-step
observing depends on the observing order. Take Figure
[1.10](#fig:observing-order) as an example, given the quantum state
$\ket{\psi}$, the result of two-step observing of
"$\textcolor{blue}{\mathbf{\Omega}}\rightarrow\textcolor{red}{\mathbf{\Omega}^\prime}$"
is zero, but if we insert an intermediate observing, *i.e.*,
$\textcolor{green}{\mathbf{\Omega}^{\prime\prime}}$, then the result of
three-step observing of
"$\textcolor{blue}{\mathbf{\Omega}}\rightarrow\textcolor{green}{\mathbf{\Omega}^{\prime\prime}}\rightarrow\textcolor{red}{\mathbf{\Omega}^\prime}$"
is not zero.

<img
    id="fig:observing-order"
    src={require('../static/img/observing-order-1.png').default}
    alt="observing-order"
    style={{ width: '60%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.10: Illustration of single-step observing with probabilistic collapse
under various measurement operators
$\textcolor{blue}{\mathbf{\Omega}}$,
$\textcolor{red}{\mathbf{\Omega}^\prime}$, and
$\textcolor{green}{\mathbf{\Omega}^{\prime\prime}}$.</figcaption>

## Dynamics

The process of quantum computing can be generally divided into three
steps:

(1) Prepare an initial state $\ket{\psi}$;

(2) Apply a sequence of unitary operators to the state (see Figure
    [1.11](#fig:unitary-operators));

(3) Measure the output and get a final state.

<img
    id="fig:unitary-operators"
    src={require('../static/img/unitary-operators.png').default}
    alt="unitary-operators"
    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.11: Apply a sequence of unitary operators to the
 state.</figcaption>


[^3]:  Two reasons why observable operators must be Hermitian: First,
    the eigenvalues of an operator are real, which is a necessary
    condition of realistic experiment. Second, the eigenvectors that
    represent unambiguously distinguishable results must have different
    eigenvalues, and must also be orthogonal (see principle 2 and 3).

[^4]:  Two states are physically distinct if there is a measurement that
    can tell them apart without ambiguity. For example, $\ket{u}$ and
    $\ket{d}$ can be distinguished by measuring $\sigma_z$. If you are
    handed a spin and told that it is either in the state $\ket{u}$ or
    the state $\ket{d}$, to find out which of the two states is the
    right one, all you have to do is align SGA with the z axis and
    measure $\sigma_z$. 
