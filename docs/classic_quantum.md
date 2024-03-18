---
sidebar_label: 'Classic Quantum'
sidebar_position: 2
title: Classic Quantum
# sidebar_class_name: hidden
---

# The Leap from Classic to Quantum

## Classic Deterministic Systems

:::note[definition]
If $f:\mathbb{R}^n\rightarrow\mathbb{R}^n$ is a transformation and
$\cdots, \boldsymbol{x}_t, \boldsymbol{x}_{t+1}, \boldsymbol{x}_{t+2}, \cdots$
is a sequence of vectors in $\mathbb{R}^n$ such that
$\boldsymbol{x}_{t+1}=f(\boldsymbol{x}_{t})$, then we say that $f$ and
sequence
$\cdots, \boldsymbol{x}_t, \boldsymbol{x}_{t+1}, \boldsymbol{x}_{t+2}, \cdots$
make up a discrete dynamical system, where function $f$ is called
dynamics and vectors $\{\boldsymbol{x}_t\}$ are called states.
:::

<img
    id="classic-billiards"
    src={require('../static/img/billiards-dynamics.png').default}
    alt="classic-billiards"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.1: Classic billiards </figcaption>

:::info[example:classic-billiards]
Let's consider a simple system described by a
**simple (unweighted) directed graph** together with some toy marbles.
There be $6$ vertices in a graph and a total of $27$ marbles. We might
place $6$ marbles on vertex $0$, $2$ marbles on vertex $1$, and the rest
as described by Figure
[1.1](#fig:classic-billiards).

We shall denote its **deterministic state** as
$\boldsymbol{x}=[6,2,1,5,3,10]^{\top}$, and its **dynamics** as a
**Boolean adjacency matrix** $\mathbf{M}=
    \begin{bmatrix}
        0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 & 0 & 1 \\
        0 & 0 & 0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 & 0 & 0 \\
        1 & 0 & 0 & 0 & 1 & 0       
    \end{bmatrix}$ where $\mathbf{M}(i,j)=1$ if and only if there is an
arrow from vertex $j$ to vertex $i$.
:::

The **state evolvement** can be represented as matrix multiplication:
$$\boldsymbol{x}_{t+1}=f(\boldsymbol{x}_{i})=\mathbf{M}\boldsymbol{x}_{t}$$

The multiple step dynamics can be written as Boolean matrix
multiplication:
$$\mathbf{M}^2(i,j)=\bigvee_{k=0}^{n-1}\mathbf{M}(i,k)\wedge\mathbf{M}(k,j)$$
where $\vee$ and $\wedge$ represent Boolean "OR" and "AND" operators,
and $\mathbf{M}^2(i,j)=1$ if and only if there is a path of length 2
from vertex $j$ to vertex $i$ as shown in Figure
[1.2](#fig:multiple-step-dynamics).

<img
    id="multiple-step-dynamics"
    src={require('../static/img/multiple-step-dynamics.png').default}
    alt="multiple-step-dynamics"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.2: multiple step dynamics </figcaption>

## Probabilistic Systems

The **state** of a probabilistic system is composed of probabilistic
entries, and the sum of all entries is $1$.

:::info[example: probabilistic system]
$$\boldsymbol{x}=\left[\frac{1}{5}, \frac{3}{10}, \frac{1}{2}\right]^{\top}\nonumber$$

-   one-fifth chance that the marble is on vertex 0;

-   three-tenths chance that the marble is on vertex 1;

-   half chance that the marble is on vertex 2.
:::


The **dynamics** of a probabilistic system is described by a directed
(probabilistic) weighted graph, where several arrows shooting out of
each vertex with real numbers between 0 and 1 as weights as shown in
Figure [1.3](#fig:probabilistic-system). The corresponding matrix is
called **doubly stochastic matrix**, which has the following two
properties:

-   The column sum, *i.e.*, the sum of all weights leaving a vertex, is $1$;

-   The row sum, *i.e.*, the sum of all weights entering a vertex, is $1$.

<img
    id="probabilistic-system"
    src={require('../static/img/probabilistic-system.png').default}
    alt="probabilistic-system"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.3: probabilistic system </figcaption>

The **state evolvement.** If we have $\boldsymbol{x}_t$ expressing the
probability of the position of the marble at time $t$ and $\mathbf{M}$
expressing the probability of the way the marble moves around, then
$\boldsymbol{x}_{t+1}=\mathbf{M}\boldsymbol{x}_t$ is expressing the
probability of the marble's location at time $t + 1$.

The **multiple step dynamics** of probabilistic system is formulated
with matrix multiplication with probability entries (*a.k.a.*, normal
matrix multiplication). Figure
[1.4](#fig:weighted-multiple-step-dynamics) shows an example of the
2-step dynamics.

<img
    id="probabilistic-system"
    src={require('../static/img/weighted-multiple-step-dynamics.png').default}
    alt="probabilistic-system"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.4:The 2-step dynamics in the probabilistic system </figcaption>

<img
    id="stochastic-billiard"
    src={require('../static/img/stochastic-billiard.png').default}
    alt="stochastic-billiard"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.5: stochastic-billiard </figcaption>


:::info[example: stochastic-billiard]
Consider a stochastic billiard with dynamics
shown in Figure [1.5](#fig:stochastic-billiard) and initial state
$\boldsymbol{x}_{0}$, its state evolvement procedure exhibits periodic
cycles as follows: 
$$          \begin{aligned}\boldsymbol{x}_{0}=\begin{bmatrix}1 & 0 & 0 & 0\end{bmatrix}^{\top}&\stackrel{\mathbf{M}}{\longmapsto}{\color{red}\boldsymbol{x}_{1}}=\begin{bmatrix}0 & \frac{1}{2} & \frac{1}{2} & 0\end{bmatrix}^{\top}\stackrel{\mathbf{M}}{\longmapsto}{\color{blue}\boldsymbol{x}_{2}}=\begin{bmatrix}\frac{1}{2} & 0 & 0 & \frac{1}{2}\end{bmatrix}^{\top}\\&\stackrel{\mathbf{M}}{\longmapsto}\boldsymbol{x}_{3}={\color{red}\boldsymbol{x}_{1}}\stackrel{\mathbf{M}}{\longmapsto}\boldsymbol{x}_{4}={\color{blue}\boldsymbol{x}_{2}}\stackrel{\mathbf{M}}{\longmapsto}\cdots\end{aligned}$$
:::

<img
    id="probabilistic-double-silt"
    src={require('../static/img/probabilistic-double-silt.png').default}
    alt="probabilistic-double-silt"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.6: probabilistic-double-silt</figcaption>

:::info[example:probabilistic-double-silt]
Assume a virtual double silt experiment as shown in Figure
[1.6](#fig:probabilistic-double-silt). The bullets are fired from
the machine-gun, pass through two narrow slits in the wall, and
eventually land on the targets behind the wall. Its dynamics matrix can
be formulated as $$\mathbf{M}=\begin{bmatrix} 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]\frac{1}{2} & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]\frac{1}{2} & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]0 & \frac{1}{3} & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]0 & \frac{1}{3} & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]0 & \frac{1}{3} & \frac{1}{3} & 0 & 0 & 0 & 0 & 0\\[4pt]0 & 0 & \frac{1}{3} & 0 & 0 & 0 & 0 & 0\\[4pt]0 & 0 & \frac{1}{3} & 0 & 0 & 0 & 0 & 0\\[4pt]\end{bmatrix}\nonumber$$ and accordingly, its $2$-step dynamics
can be computed by matrix multiplication:
$$\mathbf{M}^2=\mathbf{M}\times \mathbf{M}=\begin{bmatrix}0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\[4pt]\frac{1}{6} & \frac{1}{3} & 0 & 1 & 0 & 0 & 0 & 0\\[4pt]\frac{1}{6} & \frac{1}{3} & 0 & 0 & 1 & 0 & 0 & 0\\[4pt]\color{red}\frac{1}{3} & \frac{1}{3} & 0 & 0 & 1 & 0 & 0\\[4pt]\frac{1}{6} & 0 & \frac{1}{3} & 0 & 0 & 0 & 1 & 0\\[4pt]\frac{1}{6} & 0 & \frac{1}{3} & 0 & 0 & 0 & 0 & 1\\[4pt]\end{bmatrix}\nonumber$$ Hence, given an initial state
$\boldsymbol{x}_0=\begin{bmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0
    \end{bmatrix}^{\top}$, its $2$-step transition state
$\boldsymbol{x}_2=\mathbf{M}^2\boldsymbol{x}_0=\begin{bmatrix}
        0 & 0 & 0 & \frac{1}{6} & \frac{1}{6} & \color{red}\frac{1}{3} & \frac{1}{6} & \frac{1}{6}
    \end{bmatrix}^{\top}$.

Note that the probability of the bullets landing on the middle target is
the largest, *i.e.*, $\color{red}\frac{1}{3}$. This is consistent with
our knowledge because both routes can reach this target, meaning a
summation of probabilities.
:::

## Quantum Systems

The **state** of a quantum system is composed of quantum entries
(complex values), whose modulus square represents the probability, and
the sum of modulus squared of all entries is $1$.

:::info[example:quantum-state]
Consider a complex vector $\boldsymbol{x}=\left[\frac{1}{\sqrt{3}}, \frac{2i}{\sqrt{15}}, \sqrt{\frac{2}{5}}\right]^{\top}$,
since
$\boldsymbol{x}^{\dagger}\boldsymbol{x}=\frac{1}{3}+\frac{4}{15}+\frac{2}{5}=1$,
it is a qualified state vector of a quantum system.
:::

The **dynamics** of a quantum system also has two representations. One
is the graph form, which can be described by a directed (complex)
weighted graph. The other is the matrix form, which corresponds to a
special unitary matrix whose modulus square is a doubly stochastic
matrix as exemplified in Figure
[1.7](#fig:quantum-system).

<img
    id="quantum-dynamics"
    src={require('../static/img/quantum-dynamics.png').default}
    alt="quantum-dynamics"
    style={{ width: '55%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
<figcaption style= {{textAlign: 'center', fontFamily: 'Calibri'}}>Figure 1.7: quantum-system</figcaption>

Table [1.2](#tab:system-comparison) gives a detailed comparison of three
systems in terms their states and dynamics. In particular, the dynamics
is represented in two different forms, which are graph (Gra.) and matrix
(Mat.), respectively.

