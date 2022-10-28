
		let $$ = ($) => document.querySelector($);
		let cl = (info) => console.log(info);
		//1.
		let firstname = 'Lata';
		//console.log(firstname);
		//2.
		let alertbox = "hello world";
		//alert(alertbox);
		//3.
		let flower = "rose";
		let tree = "maple";
		//document.write(tree);
		//4.
		let cels = $$('.cels');
		let fer = $$('.fer');
		let inputHandler = function(e) {
			fer.value = (e.target.value * 1.8) + 32;
		}
		let inputHandlerfer = function(e) {			
			cels.value =  (e.target.value -32) / 1.8;
		}
		
		cels.addEventListener('input', inputHandler);
		fer.addEventListener('input', inputHandlerfer);

		//5. question is not understandable
		let hourinput = $$('.hourinput');
		let returnmin = $$('.returnmin');
		let hrhandler = (e) => returnmin.innerText = `${e.target.value * 60} minits` ;
		hourinput.addEventListener('input', hrhandler );
		//6. 
		let lyearcheck = $$('.lipyearbox');
		let lyearinfo = $$('.yearinfo');
		let yearHandler = function(e) {			
			(Number.isInteger(e.target.value /4 )) ?
			lyearinfo.innerText = `${e.target.value} Year is lipyear` :
			lyearinfo.innerText =`${e.target.value} year is not lipyear `
		}
		lyearcheck.addEventListener('input', yearHandler);
		//7.
		let numcheckinput = $$('.numcheckinput');
		let numcheckinfo = $$('.numcheckinfo');
		let numHandler = function(e) {			
			(e.target.value >= 100 && e.target.value < 1000) ?
			numcheckinfo.innerText = `${e.target.value} is pass` :
			numcheckinfo.innerText =`${e.target.value} try differnt number less then 1000 `
		}
		numcheckinput.addEventListener('input', numHandler);

		//8.
		let largnumone = $$('.largnumone');
		let largnumtwo = $$('.largnumtwo');
		let largnumcheck = $$('.largnumcheck');
		let lgHandlerone = (e) => {
			largnumcheck.innerText = `${e.target.value} is Large Number` ;
			(largnumtwo.value >= largnumone.value) ?
			largnumcheck.innerText = `${largnumtwo.value} is Large Number` :
			largnumcheck.innerText = `${largnumone.value} is Large Number`;
		};
		let lgHandlertwo = (e) => {			
			(largnumone.value <= largnumtwo.value) ?
			largnumcheck.innerText = `${e.target.value} is Large Number` :
			largnumcheck.innerText = `${largnumone.value} is Large Number`;
		};
		largnumone.addEventListener('input', lgHandlerone );
		largnumtwo.addEventListener('input', lgHandlertwo);

		//10.
		let ponumone = $$('.ponumone');
		let ponumtwo = $$('.ponumtwo');
		let pocheckone = $$('.pocheckone');
		let pochecktwo = $$('.pochecktwo');
		let positiveHandlerone = (e) => {
			(e.target.value > 0) ? 
			pocheckone.innerText = `${e.target.value} value is positive` : 
			pocheckone.innerText = `${e.target.value} value is negative` ;
			(e.target.value == 0) ? pocheckone.innerText = ` ${e.target.value} value is nutural` : "";
			
		}
		let positiveHandlertwo = (e) => {
			(e.target.value > 0) ? 
			pochecktwo.innerText = `${e.target.value} input value is positive`: 
			pochecktwo.innerText = `${e.target.value} value is negative` ; 
			(e.target.value == 0) ? pochecktwo.innerText = `${e.target.value} value is nutural`: "";
		}
		ponumone.addEventListener('input' , positiveHandlerone);
		ponumtwo.addEventListener('input' , positiveHandlertwo);

		/*add functionality*/
		let studnameinput = $$('.studnameinput');
		let marksinput = $$('.marksinput');
		let gradinput = $$('.gradinput');
		let appendinput = (e) =>{
			let stdinputsclone = $$('.marksbox .df').cloneNode(true);
			$$('.marksbox').append(stdinputsclone);

		}
		document.addEventListener('click', (e) => {			
			if (e.target.classList.contains('addstudinputs')) {
				appendinput()
			} else if (e.target.classList.contains('btn-dependent')) {
				addDependent(e) 
			} else if (e.target.classList.contains('remove-applicant')) {
				e.target.closest('.add-applicant-container').remove()
			} else if (e.target.classList.contains('removestudinputs')) {
				e.target.closest('.studinfo').remove()
			}
		});
		/*average*/
		let studentsmarks = {
			David : 80,
			Vinod : 77,
			Divya : 88,
			Ishita :95,
			Thomas : 68
		}
		let marks = Object.values(studentsmarks);
		let avarageadd = marks.reduce((add, value)=> add + value);
		let avgmark = avarageadd / marks.length;

		/*grades check*/
		let gradeHandler = (e) =>{
			let  marknum = e.target.value;
			switch(true) {
				case marknum < 60:
				gradmark = 'F';
				break;
				case marknum < 70:
				gradmark = 'D';
				break;
				case marknum < 80:
				gradmark = 'C';
				break;
				case marknum < 90:
				gradmark = 'B';
				break;
				case marknum < 100:
				gradmark = 'A';
				break;
				default:
				gradmark = "dont know";
			}
			e.target.closest('.studinfo').querySelector('.gradinput').value = gradmark;			
			
		}
		
		document.addEventListener('input', (e) => {
			if (e.target.classList.contains('marksinput')) {
				gradeHandler(e);
			}
		});
		document.addEventListener('change', (e) => {
		let avginput = [];
		if (e.target.classList.contains('marksinput')) {
				//$$('.totmarksinput').value = e.target.value;				
				
				
				if($$('.marksinput').value > 0 ){						
					avginput = avginput + Number.isInteger(e.target.value);
				};
				


				
			}

				 avginput.push(document.querySelectorAll('.marksbox .studmark .marksinput').value);
			for(let i = 0; i < document.querySelectorAll('.marksbox .studmark').length ; i++){
			cl(avginput)
			}
		});



