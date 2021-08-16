
document.getElementById("default").click();

function openMenu(target, seltab, color) {
	for(let allTab of document.getElementsByClassName("content")) {
		allTab.style.display="none"
	}
	for(let allBtn of document.getElementsByClassName("tab")) {
		allBtn.style.background="gray"
	}
	let nowTab = document.getElementById(target);
	nowTab.style.display="block";
	
	seltab.style.background= color;
}