		function mostraralesta ()
		{
			// body...
			alert('hizo click!');
		}

		function hacerclick ()
		{
			// body...
			document.getElementsByTagName('p')[0].onclick=mostraralesta;
		}
		window.onload=hacerclick;