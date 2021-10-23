## Declarativo vs Imperativo

- Declarativo 
	1. Foco maior na lógica.
	2. Imutabilidade.
	3. Diz o "O que" fazer.
	4. Menor quantidade de código.
	5. Alto nível de escalabilidade.
	6. Menos conhecido.
	7. Menos explícito.
	8. Maior consumo de memória.

- Imperativo
	1. Foco no fluxo.
	2. Estados Mutáveis.
	3. Diz o "Como" fazer.
	4. Maior quantidade de código.
	5. Baixo nível de escalabilidade.
	6. Mais conhecido.
	7. Mais explícito.
	8. Menor consumo de memória.

- Exemplo declarativo

	SELECT 
				matricula, nome, email, media
	FROM
				alunos 
	WHERE
				media >= 9
	
	-------------------------------------
	const notas = [8, 9, 7, 6];
	
	const somar = (a, b) => a + b;
	const dividir = (a, b) => a / b;
	
	const mediaTurma = dividir(
		notas.reduce(somar),
		notas.length
	);
	
	console.log(`Média é ${mediaTurma}`);

- Exemplo imperativo
	
	const notas = [8, 7, 9, 6];
	
	function media(notas) {
		let total = 0;
		for (let i = 0; i < notas.length; i++) {
			total += notas[i]
		}
		
		return total / notas.length;
	}
	
	const mediaTurma = media(notas);
	console.log(`Média é ${mediaTurma}`);
