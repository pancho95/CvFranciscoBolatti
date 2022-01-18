//content of web

var data = {
	'en':{
		'profesion':'Frontend Developer',
		'contact':'Contact',
		'objective':'Objective',
		'bio':
		'I am a person passionate about the development of web applications, wanting to pour all my knowledge into a company in order to continue training as a programmer.',
		'skills':'Skills',
		'education':'Academic Formation',
		'title1':'Mobile application development',
		'time1':'July 2019 - October 2019',
		'description-edu1':'Development of mobile applications using technologies such as: HTML5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, design UX/UI.',
		'place2':'TERCIARY URQUIZA',
		'title2':'Software Development Technician',
		'time2':'April 2019 - December 2019',
		'description-edu2':'8/25 approved subjects',
		'work-exp':'Work Experience',
		'title-work1':'FRONTEND DEVELOPER',
		'place3':'Empretienda SAS',
		'time3':'June 2021 - Present',
		'des-work1':'- Template development and layout',
		'des-work2':'- Development of new functionalities for the store system',
		'des-work3':'- Development of configuration panel for bot WhatsApp',
		'des-work4':'- Upload of the PideTuTaxi application to the AppStore',
		'title-work2':'FRONTEND DEVELOPER',
		'place4':'Airtrack S.A',
		'time4':'November 2020 - June 2021'
	},
	'es':{
		'profesion':'Desarrollador Frontend',
		'contact':'Contacto',
		'objective':'Objetivo',
		'bio':
		'Soy una persona apasionada por el desarrollo de aplicaciones web, con ganas de volcar todos mis conocimientos en una empresa para poder seguir formándome como programador.',
		'skills':'Habilidades',
		'education':'Formación Académica',
		'title1':'Desarrollo de aplicaciones móviles',
		'time1':'Julio 2019 - Octubre 2019',
		'description-edu1':'Desarrollo de aplicaciones móviles usando tecnologías como: HTML5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, diseño UX/UI.',
		'place2':'TERCIARIO URQUIZA',
		'title2':'Técnico en desarrollo de software',
		'time2':'Abril 2019 - Diciembre 2019',
		'description-edu2':'8/25 materias aprobadas',
		'work-exp':'Experiencia Laboral',
		'title-work1':'DESARROLLADOR FRONTEND',
		'place3':'Empretienda SAS',
		'time3':'Junio 2021 - Actualidad',
		'des-work1':'- Maquetado de plantillas para el sistema de tiendas',
		'des-work2':'- Desarrollo de nuevas funcionalidades para el sistema de tiendas',
		'des-work3':'- Desarrollo de panel de configuración para bot de Whatsapp',
		'des-work4':'- Subida de la aplicación PideTuTaxi al AppStore',
		'title-work2':'DESARROLLADOR FRONTEND',
		'place4':'Airtrack S.A',
		'time4':'Noviembre 2020 - Junio 2021'
	}
}



//function to change language
function language()
{
	$(function()
	{
		$('.translate').click(function()
		{
			var lang = $(this).attr('id');

			$('.lang').each(function(index, element)
			{
				$(this).text(data[lang][$(this).attr('key')]);
			});
		});
	});
}



// function to change to dark mode

	function darkmode()
	{
		var body = document.body;

		var header = document.querySelector('.header');

		var work = document.querySelector('.border-work');

		var edu = document.querySelector('.border-edu');

		// var web1 = document.querySelector('.web1');
		// var web2 = document.querySelector('.web2');
		
		// body and header color change
		body.classList.toggle('bg-dark');
		body.classList.toggle('text-white');
		header.classList.toggle('bg-image');
		header.classList.toggle('bg-secondary');
		
		// border color change

		work.classList.toggle('border-work1');

		edu.classList.toggle('border-edu1');

		// change color links
		// if (web1.classList.contains('text-dark') && web2.classList.contains('text-dark') ) {

		// 	web1.classList.remove('text-dark')
		// 	web1.classList.add('text-white')

		// 	web2.classList.remove('text-dark')
		// 	web2.classList.add('text-white')


		// } 
		// else
		// {

		// 	web1.classList.remove('text-white')
		// 	web1.classList.add('text-dark')

		// 	web2.classList.remove('text-white')
		// 	web2.classList.add('text-dark')


		// }
		

		
	}


