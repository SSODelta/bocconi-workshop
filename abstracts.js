var abstracts = new Map();

function init(){
	abstracts.set("pravesh","abstract pravesh");
	abstracts.set("rajendra","abstract rajendra");
	abstracts.set("shuichi","abstract shuichi");
	abstracts.set("simona","abstract simona");
	abstracts.set("omri","abstract omri");
	abstracts.set("giulio","abstract giulio");
	abstracts.set("yuval","abstract yuval");
	abstracts.set("afonso","abstract afonso");
	abstracts.set("prashant","abstract prashant");
	abstracts.set("vinod","abstract vinod");
	abstracts.set("tim","abstract tim");
	abstracts.set("pravesh","abstract pravesh");
	abstracts.set("chris","abstract chris");
	abstracts.set("miranda","We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.<br><br>We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either \\(2^{O(\\sqrt{n})}\\)-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density. <br><br>As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.<br><br>Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.<br><br>This is joint work with Sam Gunn.");
	abstracts.set("eren","abstract eren");
	abstracts.set("andrej","abstract andrej");
	abstracts.set("ilias_z","abstract ilias_z");
	abstracts.set("ilias_d","abstract ilias_d");
	abstracts.set("nobutaka","abstract nobutaka");
	abstracts.set("damiano","We study the following broad question about cryptographic primitives: is it possible to achieve security against an arbitrary \\(\\text{poly}(n)\\)-time adversary with \\(O(\\log n)\\)-size messages? It is common knowledge that the answer is ''no'' unless information-theoretic security is possible. In this work, we revisit this question by considering the setting of cryptography with public information and computational security.<br><br>We obtain the following  results, assuming variants of well-studied intractability assumptions:<ol><li>A private simultaneous messages (PSM) protocol for every \\(f:[n] \\times [n] \\rightarrow \\{0,1\\}\\) requiring \\((1+\\epsilon) \\log n\\)-bit messages for most functions and \\((2+\\epsilon) \\log n\\)-bit messages for the remaining ones. We apply this towards non-interactive secure 3-party computation with similar message size in the preprocessing model, improving over previous 2-round protocols.</li><li>A secret-sharing scheme for any ''forbidden-graph'' access structure on \\(n\\) nodes with \\(O(\\log n)\\) share size.</li><li>On the negative side, we show that computational threshold secret-sharing schemes with public information require share size \\(\\Omega(\\log \\log n)\\). For arbitrary access structures, we show that computational security does not help with 1-bit shares.</li></ol>The above positive results guarantee that any adversary of size \\(n^{o(\\log n)}\\) achieves an \\(n^{-\\Omega(1)}\\) distinguishing advantage. We show how to make the advantage negligible by slightly increasing the asymptotic message size, still improving over all known constructions.<br><br>The security of our constructions is based on the conjectured hardness of variants of the planted clique problem, which was extensively studied in the algorithms, statistical inference, and complexity theory communities. Our work provides the first applications of such assumptions improving the efficiency of mainstream cryptographic primitives, gives evidence for the necessity of such assumptions, and suggests new questions in this domain that may be of independent interest.");
}