//100% working backup august 1st 2022

var numbers = [
	1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,55,47,48
]
 var whoUses = [
	"Recep 01",
	"Recep 02",
	"Recep 03",
	"Recep 04",
	"Recep 05",
	"Recep 06",
	"Guest 01",
	"Guest 02",
	"Guest 03",
	"Guest 04",
	"Mathaus TI",
	"Daniel TI",
	"Gabriel TI",
	"José Financeiro",   
	"Marcelo Financeiro",
	"Fernanda Financeiro", 
	"Financeiro",   
	"Laura Financeiro",   
	"Amanda Financeiro",
	"Letícia GOV",
	"Gov 02",
	"Gov 03",
	"Manutenção 01",
	"Manutenção 02",
	"Manutenção 03",
	"Bar 01",
	"Bar 02",
	"Room Service 1",
	"Room Service 2",
	"Kimberly Comercial",   
	"Lilian Comercial",     
	"Daniela Comercial",
	"Henrique Reservas",
	"Joyce Reservas",   
	"Reservas 01",
	"Danielle Marketing",
	"Monaline Marketing",
	"Yuri Almoxarifado" ,  
	"Almoxarifado 2",
	"Dilma Almoxarifado",  
	"Leandro Almoxarifado",
	"Ana RH",    
	"Ana RH",    
	"Jéssica RH",
	"Jéssica Nutricionista",
	"Alexandra Lima",
	"Joyce. Retirar assim que possível.",
	"Luis Novato",
	"Menor Aprendiz Reservas"
]
			var input = document.querySelector("input");
		    input.focus();


						var btnSnd = document.querySelector('button.send');
						btnSnd.addEventListener('click',() =>{					       
							
							var achou = false;
							if(input.value < 1){
								Swal.fire({
									icon: 'error',
									title: 'Digite uma chave válida.',
								  })
							}else{
							for(var posicao = 0; posicao < numbers.length; posicao++) {
 

								
								if(input.value == numbers[posicao]) {
 
										Swal.fire(
											"Chave existente.",
											'Está sendo usada por '+whoUses[posicao]+'. <br><br>Deseja remover?',
											'success'
										)  
										  achou = true;
										  input.value=""
										  break;
								   } 
							}
 
							if(achou == false) {
								var response = Swal.fire({
									icon:'question',
									title: 'Deseja adicionar?',
									text: 'Não foi encontrado um usuário ativo para esta chave.', 
									showDenyButton: true,
									showCancelButton: false,
									confirmButtonText: 'Sim',
									denyButtonText: 'Não',
									customClass: {
									  confirmButton: 'order-2',
									  denyButton: 'order-3',
									}
								  }).then((result) => {
									if (result.isConfirmed) {
										 Swal.fire({
											icon:'question',
											title: 'Nome do usuário',
											text: 'Usuário que será adicionado a esta chave',
											input: 'text',
											customClass: {
											  validationMessage: 'my-validation-message'
											},
											preConfirm: (value) => {
												console.log(value)
												console.log(input.value)
												if (!value) {
												Swal.showValidationMessage(
												  '<i class="fa fa-info-circle"></i> Your name is required'
												)
												input.value=""
											  }else{
												Swal.fire(
													"Chave adicionada.",
													'',
													'success'
												)
												numbers.push(input.value);
												whoUses.push(value)
												console.log()
												input.value=""

											  }
											}
										  })
									} else if (result.isDenied) {
									  Swal.fire('Nenhum dado adicionado.', '', 'error')
									}
								  })
							}
						}
							input.focus();})

						
						var btnAdd = document.querySelector('button.new');
						var input = document.querySelector('input');

						function changeMode(){
							var element = document.body;
							element.classList.toggle("dark-mode");
						}