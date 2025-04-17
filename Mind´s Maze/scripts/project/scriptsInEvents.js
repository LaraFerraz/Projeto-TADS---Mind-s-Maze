

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event2_Act3(runtime, localVars)
	{
		
		//obter o valor da variável global
		let vidas=runtime.globalVars.vidas;
		
		vidas --;
		
		//atualiza a variável global no construct
		runtime.globalVars.vidas = vidas;
		
		if (vidas == 0){
		console.log ("Game Over");
		runtime.goToLayout("Game over");
		}
		
		
		
	},

	async FolhaDeEventosFaseFinal_Event3_Act3(runtime, localVars)
	{
		//obter o valor da variável global
		let vidas=runtime.globalVars.vidas;
		
		vidas --;
		
		//atualiza a variável global no construct
		runtime.globalVars.vidas = vidas;
		
		if (vidas == 0){
		console.log ("Game Over");
		runtime.goToLayout("Game over");
		}
		
		
		
	},

	async FolhaDeEventosFase2_Event4_Act3(runtime, localVars)
	{
		//obter o valor da variável global
		let vidas=runtime.globalVars.vidas;
		
		vidas --;
		
		//atualiza a variável global no construct
		runtime.globalVars.vidas = vidas;
		
		if (vidas == 0){
		console.log ("Game Over");
		runtime.goToLayout("Game over");
		}
		
		
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
