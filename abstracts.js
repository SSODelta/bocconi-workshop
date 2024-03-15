var a_open = 0;
var abstracts = new Map();
function htmlDecode(input) {
  	var doc = new DOMParser().parseFromString(input, "text/html");
  	return doc.documentElement.textContent;
}
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
	abstracts.set("miranda","abstract miranda");
	abstracts.set("eren","abstract eren");
	abstracts.set("andrej","abstract andrej");
	abstracts.set("ilias_z","abstract ilias_z");
	abstracts.set("ilias_d","abstract ilias_d");
	abstracts.set("nobutaka","abstract nobutaka");
	abstracts.set("damiano","We study the following broad question about cryptographic primitives: is it possible to achieve security against an arbitrary \\(\\text{poly}(n)\\)-time adversary with \\(O(\\log n)\\)-size messages? It is common knowledge that the answer is ''no'' unless information-theoretic security is possible. In this work, we revisit this question by considering the setting of cryptography with public information and computational security.<br><br>We obtain the following  results, assuming variants of well-studied intractability assumptions:<ol><li>A private simultaneous messages (PSM) protocol for every \\(f:[n] \\times [n] \\rightarrow \\{0,1\\}\\) requiring \\((1+\\epsilon) \\log n\\)-bit messages for most functions and \\((2+\\epsilon) \\log n\\)-bit messages for the remaining ones. We apply this towards non-interactive secure 3-party computation with similar message size in the preprocessing model, improving over previous 2-round protocols.</li><li>A secret-sharing scheme for any ''forbidden-graph'' access structure on \\(n\\) nodes with \\(O(\\log n)\\) share size.</li><li>On the negative side, we show that computational threshold secret-sharing schemes with public information require share size \\(\\Omega(\\log \\log n)\\). For arbitrary access structures, we show that computational security does not help with 1-bit shares.</li></ol>The above positive results guarantee that any adversary of size \\(n^{o(\\log n)}\\) achieves an \\(n^{-\\Omega(1)}\\) distinguishing advantage. We show how to make the advantage negligible by slightly increasing the asymptotic message size, still improving over all known constructions.<br><br>The security of our constructions is based on the conjectured hardness of variants of the planted clique problem, which was extensively studied in the algorithms, statistical inference, and complexity theory communities. Our work provides the first applications of such assumptions improving the efficiency of mainstream cryptographic primitives, gives evidence for the necessity of such assumptions, and suggests new questions in this domain that may be of independent interest.");
}

function abstract(x){
	var arrow = document.getElementById("arrow_"+x);
	var body = document.getElementById("body_"+x);
	if(arrow.innerHTML == htmlDecode("&#9654;")){
		body.innerHTML = abstracts.get(x);
		arrow.innerHTML = "&#9660;";
		a_open += 1;
	} else {
		arrow.innerHTML = "&#9654;";
		body.innerHTML = "";
		a_open -= 1;
	}
	MathJax.typeset();
	time();
}