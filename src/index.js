$(function() {
    var basePatiensFolder = 'images/patients/';
    var baseRemediesFolder = 'images/remedies/';
    var baseAilmentFolder = 'images/ailments/';
    var patients = [];
    var currentPatient = null;
    var ailments = [];
    var currentAilment = null;
    var remedies = [];

    function init() {
        patients = [
            { imageUrl: '01_teddy_bear.png' }
        ];
        currentPatient = patients[Math.floor(Math.random() * patients.length)];
        $(".current_patient img").attr('src', basePatiensFolder + currentPatient.imageUrl);

        ailments = [
            { name: 'fever', imageUrl: '01_fever.png',
                remedies: ['sleep', 'rest', 'lots_of_water', 'pain_killer'] },
            { name: 'tummy ache', imageUrl: '02_tummy_ache.png',
                remedies: ['toilet', 'plums', 'lots_of_water'] },
            { name: 'runny nose', imageUrl: '03_runny_nose.png',
                remedies: ['sleep', 'rest', 'wait', 'tissues'] },
            { name: 'spots', imageUrl: '04_spots.png',
                remedies: ['chickenpox_medicine'] }
        ];
        currentAilment = ailments[Math.floor(Math.random() * ailments.length)];
        $(".current_ailment img").attr('src', baseAilmentFolder + currentAilment.imageUrl);
    
        remedies = [
            { name: 'toilet', imageUrl: '01_toilet.png' },
            { name: 'hug', imageUrl: '02_hug.png' },
            { name: 'chickenpox_medicine', imageUrl: '03_chickenpox_medicine.png' },
            { name: 'banana', imageUrl: '04_banana.png' },
            { name: 'pain_killer', imageUrl: '05_pain_killer.png' },
            { name: 'plums', imageUrl: '06_plums.png' },
            { name: 'socks', imageUrl: '07_socks.png' },
            { name: 'icecream', imageUrl: '08_icecream.png' },
            { name: 'rest', imageUrl: '09_rest.png' },
            { name: 'wait', imageUrl: '10_wait.png' },
            { name: 'cough_medicine', imageUrl: '11_cough_medicine.png' },
            { name: 'sleep', imageUrl: '12_sleep.png' },
            { name: 'lots_of_water', imageUrl: '13_lots_of_water.png' },
            { name: 'oatmeal', imageUrl: '14_oatmeal.png' },
            { name: 'food', imageUrl: '15_food.png'},
            { name: 'tissues', imageUrl: '16_tissues.png'}
        ];
        $("#remedies").empty();
        _.forEach(remedies, function(remedy) {
            var remedyClass = 'draggable remedy ' + remedy.name;
            if (_.includes(currentAilment.remedies, remedy.name)) {
                remedyClass += ' acceptedRemedy';
            }
            $("#remedies").append($("<img>", { 'class': remedyClass, 'src': baseRemediesFolder + remedy.imageUrl }));
        });

        $(".draggable").draggable(
            {
                cursor: 'move',
                cursorAt: { top: 50, left:50 },
                containment: '.main-ui',
                revert: true,
                opacity: 0.7
            }
        );
        var acceptedRemedies = '.acceptedRemedy';
        $(".droppableRemedy img").droppable({
            accept: acceptedRemedies,
            classes: {
                'ui-droppable-active': 'ui-state-default'
            },
            drop: function(event, ui) {
                //TODO $(this).addClass('ui-state-highlight');
                $(".next_patient").show();
            }
        });
        $(".next_patient").hide();
    }
    init();

    $(".draggable").draggable(
        {
            cursor: 'move',
            cursorAt: { top: 50, left:50 },
            containment: '.main-ui',
            revert: true,
            opacity: 0.7
        }
    );
    $(".next_patient").click(function() {
        init();
    });
} );
