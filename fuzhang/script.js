const answerMap = [
	["10110111", "01001111", "01000101"],
	["11011111", "00111000", "00000111", "11000111"],
  ['11110000','10000110','00111000','11011000','00001000'],
  ['01001000','11111100','01101011','11011000','01000011','01001011'],
  ['10000111','01111111'],
  ['10111010','00001111','00001010','01000000'],
  ['10110010','10100000','10111010','10010110','10110100','01000111'],
  ['01000110','01000110','00000011','00000110','00000011','00000011','11111000'],
  ['11011111','00110000','00101111','01001111','01011111']
];
const answerList = ['胃轻瘫','腹膈协同失调','典型性消化不良','功能性消化不良','吞气症','便秘','小肠细菌过度生长','碳水化合物不耐受']
document.addEventListener("DOMContentLoaded", () => {
	// 获取元素
	const form = document.getElementById("bloatingForm");
	const aboutButton = document.getElementById("aboutButton");
	const authorButton = document.getElementById("authorButton");
	const modal = document.getElementById("modal");
	const authorModal = document.getElementById("author-modal");
  const resultModal = document.getElementById("result-modal");
	const closeButton = document.querySelector(".close");
	const authorCloseButton = document.querySelector(".author-close");
  const resultCloseButton = document.querySelector(".result-close");

	// 提交表单处理
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		// 获取所有问题的答案
		const answers = [];
		document.querySelectorAll('.question').forEach((question, index) => {
			const questionAnswers = [];
			question.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach((input) => {
				questionAnswers.push(Number(input.value));
			});
			answers.push(questionAnswers);
		});

		// 构建结果对象
		const results = answers;
    console.log('answers', answers)
    const score= [0,0,0,0,0,0,0,0]
    // 计算得分
    for(let i=0;i<answers.length;i++){
      for(let j=0;j<answers[i].length;j++){
        console.log('i,j',i,j)
        console.log('answerMap[answers[i][j]-1]',answerMap[i][answers[i][j]-1])
        calculateScore(answerMap[i][answers[i][j]-1])
      }
    }
    function calculateScore(answerStr){
      for(let i=0;i<answerStr.length;i++){
        score[i]+=Number(answerStr[i])
      }
    }

		// 显示结果（这里只是在控制台输出，您可以根据需要修改）
    resultModal.style.display = "block";
    // 找到得分最高的index
    const maxScoreIndex = score.indexOf(Math.max(...score));
    // 获取结果表格的行
    const resultRows = document.querySelectorAll(".result-table tbody tr");
    // 设置对应行的td内容为✅
    resultRows[maxScoreIndex].lastElementChild.textContent = "✅";
	});

	// 关于本问卷按钮点击事件
	aboutButton.addEventListener("click", () => {
		modal.style.display = "block";
	});

	// 关于作者按钮点击事件
	authorButton.addEventListener("click", () => {
		authorModal.style.display = "block";
	});

	// 关闭模态框
	closeButton.addEventListener("click", () => {
		modal.style.display = "none";
	});

	authorCloseButton.addEventListener("click", () => {
		authorModal.style.display = "none";
	});
  resultCloseButton.addEventListener("click", () => {
		resultModal.style.display = "none";
	});

	// 点击模态框外部关闭
	window.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.style.display = "none";
		}
		if (event.target === authorModal) {
			authorModal.style.display = "none";
		}
    if (event.target === resultModal) {
			resultModal.style.display = "none";
		}
	});
});
