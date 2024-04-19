var abstracts = new Map();

function init(){
	abstracts.set("marc_m","");
	abstracts.set("michael","");
	abstracts.set("giuseppe","");
	abstracts.set("keisuke","");
	abstracts.set("giulio_b","");
	abstracts.set("giulio_m","");
	abstracts.set("song","");
	abstracts.set("zohar","");
	abstracts.set("johanni","");
	abstracts.set("sueyeon","");
	abstracts.set("cengiz","");
	abstracts.set("ran","We explore the possibility of obtaining general-purpose obfuscation for all circuits by way of making only simple, local, functionality preserving random perturbations in the circuit structure. Towards this goal, we use the additional structure provided by reversible circuits,  but no additional algebraic structure.<br><br>We start by formulating a new (and relatively weak) obfuscation task regarding the ability to obfuscate  random circuits of  bounded length.  We call such obfuscators  random input & output (RIO) obfuscators. We then show how to  construct indistinguishability obfuscators for all (unbounded length) circuits given only an RIO obfuscator ---  under a new  assumption regarding the pseudorandomness of sufficiently long random  reversible circuits with known functionality, which in turn builds on  a conjecture made by Gowers (Comb. Prob. Comp.  '96) regarding the pseudorandomness of bounded-size random reversible circuits. Furthermore, the constructed obfuscators satisfy a new measure of security - called random output indistinguishability (ROI) obfuscation - which is significantly stronger than IO  and  may be of independent interest.<br><br>We then investigate the possibility  of constructing RIO obfuscators using local,  functionality preserving  perturbations. Our approach  is rooted in statistical mechanics and can be thought of as locally ``thermalizing''  a circuit while preserving its functionality. We provide  candidate constructions along with a pathway for analyzing the security of such strategies. <br><br>Given the power of program obfuscation, viability of the proposed approach would provide an alternative route to realizing almost all cryptographic tasks under hardness assumptions that are  very different from standard ones. Furthermore,  our specific candidate obfuscators are relatively efficient: the obfuscated version of an \\(n\\)-wire, \\(m\\)-gate (reversible) circuit with security parameter \\(k\\)  has \\(n\\) wires and \\(\\text{poly}(n,k)\\,m\\)  gates.   We hope that our initial exploration will motivate further study of this alternative path to cryptography.");
	abstracts.set("guilhem","");
	abstracts.set("yue","");
	abstracts.set("matteo","");
	abstracts.set("stephane","");
	abstracts.set("florent","");
	abstracts.set("matthieu","");
	abstracts.set("marc","");
	abstracts.set("federico","");
	abstracts.set("moritz","");
	abstracts.set("pravesh","");
	abstracts.set("rajendra","");
	abstracts.set("shuichi","");
	abstracts.set("simona","");
	abstracts.set("omri","Quantum computers are expected to revolutionize our ability to process information. The advancement from classical to quantum computing is a product of our advancement from classical to quantum physics -- the more our understanding of the universe grows, so does our ability to use it for computation. A natural question that arises is, what will physics allow in the future? Can more advanced theories of physics increase our computational power, beyond quantum computing?<br><br>An active field of research in physics studies theoretical phenomena outside the scope of explainable quantum mechanics, that form when attempting to combine Quantum Mechanics (QM) with General Relativity (GR) into a unified theory of Quantum Gravity (QG). QG is known to present the possibility of a quantum superposition of causal structure and event orderings. In the literature of quantum information theory, this translates to a superposition of unitary evolution orders.<br><br>In this work we show a first example of a natural computational model based on QG, that provides an exponential speedup over standard quantum computation (under standard hardness assumptions). We define a model and complexity measure for a quantum computer that has the ability to generate a superposition of unitary evolution orders, and show that such computer is able to solve in polynomial time two of the fundamental problems in computer science: The Graph Isomorphism Problem and the Gap Closest Vector Problem, with gap \\(O(n^2)\\) . These problems are believed by experts to be hard to solve for a regular quantum computer. Interestingly, our model does not seem overpowered, and we found no obvious way to solve entire complexity classes that are considered hard in computer science, like the classes <b>NP</b> and <b>SZK</b>.");
	abstracts.set("giulio","");
	abstracts.set("yuval","The question of minimizing different complexity measures of cryptographic primitives is of both theoretical and practical interest. The talk will survey this line of work, discuss connections with error-correcting codes and hardness of learning, and point out some remaining challenges.");
	abstracts.set("afonso","");
	abstracts.set("prashant","");
	abstracts.set("vinod","I will describe two results at the interface of statistics and machine learning, and cryptography.<br><br>First, in the increasingly common setting where the training of models is outsourced, I will describe a method whereby a malicious trainer can use cryptography to insert an <i>undetectable</i> backdoor in a classifier. Using a secret key, the trainer can then slightly alter inputs to create large deviations in the model output. Without the secret key, the existence of the backdoor is hidden. This result relies on the recently formulated hardness of the continuous learning with errors (CLWE) problem.<br><br>Second, I will show that CLWE is as hard as the widely studied learning with errors (LWE) problem using techniques from leakage-resilient cryptography. In turn, I will use this to show the nearly optimal hardness of the long-studied Gaussian mixture learning problem.<br><br>Based on joint works with Shafi Goldwasser, Michael P. Kim and Or Zamir; and with Aparna Gupte and Neekon Vafa.");
	abstracts.set("tim","I will present new results on when low coordinate degree functions (LCDF)-linear combinations of functions depending on small subsets of entries of a vector can hypothesis test between high-dimensional probability measures. These functions are a generalization of the class of low degree polynomials (LDP) widely used in recent literature as a proxy for all efficient algorithms for tasks in statistics and average-case optimization. Though they are a more powerful class of algorithms, LCDF actually admit a much more general theoretical analysis than LDP. I will present two case studies on computational hardness by way of illustration.<br><br>First, I will show that &ldquo;channel universality&rdquo; holds for the success of LCDF in testing for the presence of random signals through noisy channels: the efficacy of LCDF depends on the channel only through a single scalar parameter for a class of channels including nearly arbitrary i.i.d. additive noise and nearly arbitrary exponential families. As a concrete application, I will show that the well-known computationally hard regimes and statistical-to-computational gaps in the spiked matrix and tensor models under additive Gaussian noise are actually universal phenomena, occurring under a wide range of observation models.<br><br>Second, I will give an analysis of testing categorical signals and observations, covering for instance problems over finite groups and stochastic block models observed through different types of interactions between network nodes. LDP usually are not even defined for such problems - what is a polynomial of an element of an abstract group or of &ldquo;red, green, or blue&rdquo;?-but LCDF are easily made sense of in such settings. I will give a unified treatment of a broad class of such problems and discuss examples including community detection and group synchronization.");
	abstracts.set("pravesh","");
	abstracts.set("chris","We present a new way to analyze first-order iterative algorithms including power iteration, belief propagation and Approximate Message Passing (AMP), and many forms of gradient descent using <i>combinatorial diagrams</i>, assuming that the input is a random symmetric matrix with i.i.d. mean-0 variance-1 entries. Each diagram is a small graph, and the operations of the algorithm correspond to simple combinatorial operations on these graphs. The diagrams are derived in a generic way, by symmetry-reducing a Fourier basis. <br><br>We prove a fundamental property of the diagrams: asymptotically, we can discard all of the diagrams except for the trees. The mechanics of first-order algorithms simplify dramatically as the algorithmic operations have particularly simple and interpretable effects on the trees. We further show that the tree-shaped diagrams are essentially a basis of <i>asymptotically independent Gaussian vectors</i>.<br><br>The tree approximation property mirrors the assumption of the <i>cavity method</i>, a 40-year-old non-rigorous technique in statistical physics which has served as one of the most fundamental techniques in the field. We demonstrate the connection with the cavity method by implementing heuristic physics derivations into rigorous proofs. We rigorously establish that belief propagation is asymptotically equal to its associated AMP algorithm and we give a new simple proof of the state evolution formula for AMP. Our proofs use straightforward combinatorial arguments akin to the trace method from random matrix theory.<br><br>Based on joint work with Lucas Pesenti.");
	abstracts.set("miranda","We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.<br><br>We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either \\(2^{O(\\sqrt{n})}\\)-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density. <br><br>As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.<br><br>Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.<br><br>This is joint work with Sam Gunn.");
	abstracts.set("eren","");
	abstracts.set("andrej","");
	abstracts.set("ilias_z","");
	abstracts.set("ilias_d","Non-Gaussian component analysis (NGCA) is the following statistical task: Given sample access to a high-dimensional distribution that is non-Gaussian in a hidden direction and a standard multivariate Gaussian in the orthogonal complement, approximate the hidden direction. In a 2017 paper with Kane and Stewart, we established tight lower bounds for this problem in the Statistical Query (SQ) model and derived similar implications for several, seemingly unrelated, statistical tasks. Since then, a number of works have leveraged this framework to obtain tight information-computation tradeoffs for a range of learning problems. In this work, we will survey these developments and discuss opportunities for future work.");
	abstracts.set("nobutaka","In the planted clique problem, given an Erd&#337;s-R&#233;nyi random graph with a \\(k\\)-clique planted randomly, we are asked to find a \\(k\\)-clique of it. It is widely known that this problem exhibits a computational-statistical gap: By the exhaustive search, we can solve this problem if \\(k \\gg \\log n\\), while we are not aware of any efficient (polynomial-time) algorithm for this problem (for \\(\\log n \\ll k \\ll \\sqrt{n}\\)) for decades. This raises the famous <i>Planted Clique Conjecture</i>, which asserts that any polynomial-time algorithm fails to solve the planted clique problem on a certain fraction of inputs. This conjecture serves as a standard hardness hypothesis in the literature of high-dimensional statistics, property testing, one-way functions, game theory, and so on. However, there are many formulations of this problem regarding the success probability (i.e., the fraction of inputs on which we can find a \\(k\\)-clique in polynomial time). What proportion of inputs are solvable in polynomial time?<br><br>We show that the Planted Clique Conjecture is robust with respect to the success probability. Specifically, we show how to transform a polynomial-time algorithm that finds the planted clique on a 1/poly(n)-fraction of inputs into a strong algorithm that finds the planted clique on a \\((1-\\exp(-n^c))\\)-fraction of inputs. As a consequence, we reveal the first detection-recovery gap for the planted clique problem with respect to the success probability.<br><br>Based on a joint work with Shuichi Hirahara.");
	abstracts.set("damiano","We study the following broad question about cryptographic primitives: is it possible to achieve security against an arbitrary \\(\\text{poly}(n)\\)-time adversary with \\(O(\\log n)\\)-size messages? It is common knowledge that the answer is ''no'' unless information-theoretic security is possible. In this work, we revisit this question by considering the setting of cryptography with public information and computational security.<br><br>We obtain the following  results, assuming variants of well-studied intractability assumptions:<ol><li>A private simultaneous messages (PSM) protocol for every \\(f:[n] \\times [n] \\rightarrow \\{0,1\\}\\) requiring \\((1+\\epsilon) \\log n\\)-bit messages for most functions and \\((2+\\epsilon) \\log n\\)-bit messages for the remaining ones. We apply this towards non-interactive secure 3-party computation with similar message size in the preprocessing model, improving over previous 2-round protocols.</li><li>A secret-sharing scheme for any ''forbidden-graph'' access structure on \\(n\\) nodes with \\(O(\\log n)\\) share size.</li><li>On the negative side, we show that computational threshold secret-sharing schemes with public information require share size \\(\\Omega(\\log \\log n)\\). For arbitrary access structures, we show that computational security does not help with 1-bit shares.</li></ol>The above positive results guarantee that any adversary of size \\(n^{o(\\log n)}\\) achieves an \\(n^{-\\Omega(1)}\\) distinguishing advantage. We show how to make the advantage negligible by slightly increasing the asymptotic message size, still improving over all known constructions.<br><br>The security of our constructions is based on the conjectured hardness of variants of the planted clique problem, which was extensively studied in the algorithms, statistical inference, and complexity theory communities. Our work provides the first applications of such assumptions improving the efficiency of mainstream cryptographic primitives, gives evidence for the necessity of such assumptions, and suggests new questions in this domain that may be of independent interest.");
}
