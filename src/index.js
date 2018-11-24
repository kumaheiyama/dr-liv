$(function() {
    var patients = [];
    var currentPatient = null;
    var ailments = [];
    var currentAilment = null;
    var remedies = [];
    function init() {
        patients = [
            { imageUrl: 'images/patients/01_teddy_bear.png' }
        ];
        currentPatient = patients[Math.floor(Math.random() * patients.length)];
        $(".current_patient img").attr('src', currentPatient.imageUrl);

        ailments = [
            { name: 'fever', imageUrl: 'images/ailments/01_fever.png',
                remedies: ['sleep', 'rest', 'lots_of_water', 'pain_killer'] },
            { name: 'tummy ache', imageUrl: 'images/ailments/02_tummy_ache.png',
                remedies: ['toilet', 'plums', 'lots_of_water'] },
            { name: 'runny nose', imageUrl: 'images/ailments/03_runny_nose.png',
                remedies: ['sleep', 'rest', 'wait'] },
            { name: 'spots', imageUrl: 'images/ailments/04_spots.png',
                remedies: ['chickenpox_medicine'] }
        ];
        currentAilment = ailments[Math.floor(Math.random() * ailments.length)];
        $(".current_ailment img").attr('src', currentAilment.imageUrl);
    
        remedies = [
            { name: 'toilet', imageUrl: 'images/remedies/01_toilet.png' },
            { name: 'hug', imageUrl: 'images/remedies/02_hug.png' },
            { name: 'chickenpox_medicine', imageUrl: 'images/remedies/03_chickenpox_medicine.png' },
            { name: 'banana', imageUrl: 'images/remedies/04_banana.png' },
            { name: 'pain_killer', imageUrl: 'images/remedies/05_pain_killer.png' },
            { name: 'plums', imageUrl: 'images/remedies/06_plums.png' },
            { name: 'socks', imageUrl: 'images/remedies/07_socks.png' },
            { name: 'icecream', imageUrl: 'images/remedies/08_icecream.png' },
            { name: 'rest', imageUrl: 'images/remedies/09_rest.png' },
            { name: 'wait', imageUrl: 'images/remedies/10_wait.png' },
            { name: 'cough_medicine', imageUrl: 'images/remedies/11_cough_medicine.png' },
            { name: 'sleep', imageUrl: 'images/remedies/12_sleep.png' },
            { name: 'lots_of_water', imageUrl: 'images/remedies/13_lots_of_water.png' },
            { name: 'oatmeal', imageUrl: 'images/remedies/14_oatmeal.png' }
        ];
        $("#remedies").empty();
        _.forEach(remedies, function(remedy) {
            var remedyClass = 'draggable remedy ' + remedy.name;
            if (_.includes(currentAilment.remedies, remedy.name)) {
                remedyClass += ' acceptedRemedy';
            }
            $("#remedies").append($("<img>", { 'class': remedyClass, 'src': remedy.imageUrl }));
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
        var canGoToNextPatient = false;
        $(".droppableRemedy img").droppable({
            accept: acceptedRemedies,
            classes: {
                'ui-droppable-active': 'ui-state-default'
            },
            drop: function(event, ui) {
                //$(this).addClass('ui-state-highlight');
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
