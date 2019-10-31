$(function() {
    var basePatientsFolder = 'images/patients/';
    var baseRemediesFolder = 'images/remedies/';
    var waitingRoom = [];
    var patients = [];
    var currentPatient = null;
    var remedies = [];
    var noOfPatientsInWaitingRoom = 3;

    function init() {
        initPatients();
        initRemedies();
        initWaitingRoom();

        initCurrentPatient(waitingRoom[Math.floor(Math.random() * waitingRoom.length)]);

        $("#thankYou").hide();
        $(".next_patient").hide();
        $("#patient").css({float: 'none', maxWidth: '100%'});
    }
    init();

    function initPatients() {
        patients = [
            { name: 'teddy_bear', imageUrl: '01_teddy_bear.png', curedImageUrl: '01_fine_teddy.png', remedies: ['chickenpox_medicine', 'rest', 'sleep'] },
            { name: 'giant_bump', imageUrl: '02_giant_bump.png', curedImageUrl: '02_bandaged_bump.png', remedies: ['rest', 'bandage'] },
            { name: 'cut_in_stomache', imageUrl: '03_cut_in_stomache.png', curedImageUrl: '03_plaster_on_stomache.png', remedies: ['plaster'] },
            { name: 'snake_with_a_cold', imageUrl: '05_snake_with_a_cold.png', curedImageUrl: '05_happy_snake.png', remedies: ['sleep', 'rest', 'wait', 'tissues'] },
            { name: 'broken_leg', imageUrl: '06_broken_leg.png', curedImageUrl: '06_leg_in_cast.png', remedies: ['pain_killer', 'blister_pack'] },
            { name: 'spider', imageUrl: '07_spider.png', curedImageUrl: '13_thumbs_up.png', remedies: ['medicine_bottle', 'comfort_food'] },
            { name: 'bug_with_tummy_ache', imageUrl: '08_bug_with_tummy_ache.png', curedImageUrl: '08_happy_bug.png', remedies: ['plums', 'toilet', 'pear', 'rest'] },
            { name: 'angry_pig', imageUrl: '09_angry_pig.png', curedImageUrl: '13_thumbs_up.png', remedies: ['comfort_food', 'pear', 'love', 'hug', 'icecream'] },
            { name: 'alien_with_a_cold', imageUrl: '10_alien_with_a_cold.png', curedImageUrl: '10_alient_a_ok.png', remedies: ['handkerchief', 'rest', 'sleep', 'pill_bottle', 'medicine'] },
            { name: 'bunny_with_chickenpox', imageUrl: '11_bunny_with_chickenpox.png', curedImageUrl: '11_fine_bunny.png', remedies: ['chickenpox_medicine', 'rest', 'sleep'] },
            { name: 'scared_bug', imageUrl: '14_scared_bug.png', curedImageUrl: '13_thumbs_up.png', remedies: ['hug', 'love', 'read_comics'] },
            { name: 'mouse_with_tummy_ache', imageUrl: '15_mouse_with_tummy_ache.png', curedImageUrl: '15_happy_mouse.png', remedies: ['toilet', 'plums', 'plenty_of_water'] },
            { name: 'clown_with_runny_nose', imageUrl: '16_clown_with_runny_nose.png', curedImageUrl: '16_happy_clown.png', remedies: ['handkerchief', 'pill_bottle', 'rest', 'sleep'] },
            { name: 'snake_feeling_down', imageUrl: '17_snake_feeling_down.png', curedImageUrl: '13_thumbs_up.png', remedies: ['lollipop', 'hug', 'love', 'icecream'] }
        ];
    }
    function initWaitingRoom() {
        if (patients.length < noOfPatientsInWaitingRoom) { noOfPatientsInWaitingRoom = waitingRoom.length; }
        do {
            const patient = patients[Math.floor(Math.random() * patients.length)];
            if (_.find(waitingRoom, function(pat) { return pat.name === patient.name; }) === undefined) {
                waitingRoom.push(patient);
            }
        }
        while (waitingRoom.length < noOfPatientsInWaitingRoom);
        $("#waitingRoom").empty();
        _.forEach(waitingRoom, function(waitingPatient) {
            var waitingClass = 'draggable waitingPatient ' + waitingPatient.name;
            $("#waitingRoom").append($("<img>", { 'class': waitingClass, 'src': basePatientsFolder + waitingPatient.imageUrl }));
        });
    }
    function initRemedies() {
        remedies = [
            //{ name: 'toilet', imageUrl:'01_toilet.png' },
            { name: 'hug', imageUrl:'02_hug.png' },
            { name: 'chickenpox_medicine', imageUrl:'03_chickenpox_medicine.png' },
            //{ name: 'banana', imageUrl:'04_banana.png' },
            //{ name: 'pain_killer', imageUrl:'05_pain_killer.png' },
            //{ name: 'plums', imageUrl:'06_plums.png' },
            //{ name: 'socks', imageUrl:'07_socks.png' },
            //{ name: 'icecream', imageUrl:'08_icecream.png' },
            //{ name: 'rest', imageUrl:'09_rest.png' },
            { name: 'wait', imageUrl:'10_wait.png' },
            { name: 'cough_medicine', imageUrl:'11_cough_medicine.png' },
            //{ name: 'sleep', imageUrl:'12_sleep.png' },
            //{ name: 'lots_of_water', imageUrl:'13_lots_of_water.png' },
            { name: 'oatmeal', imageUrl:'14_oatmeal.png' },
            //{ name: 'food', imageUrl:'15_food.png' },
            //{ name: 'tissues', imageUrl:'16_tissues.png' },
            { name: 'ice', imageUrl:'17_ice.png' },
            { name: 'bandage', imageUrl:'18_bandage.png' },
            { name: 'plaster', imageUrl:'19_plaster.png' },
            { name: 'read_comics', imageUrl:'20_read_comics.png' },
            { name: 'blister_pack', imageUrl:'21_blister_pack.png' },
            { name: 'medicine_bottle', imageUrl:'22_medicine_bottle.png' },
            { name: 'milk', imageUrl:'23_milk.png' },
            { name: 'vaccination', imageUrl:'24_vaccination.png' },
            { name: 'comfort_food', imageUrl:'25_comfort_food.png' },
            { name: 'lollipop', imageUrl:'26_lollipop.png' },
            { name: 'sleep', imageUrl:'27_sleep.png' },
            { name: 'pill_bottle', imageUrl:'28_pill_bottle.png' },
            { name: 'love', imageUrl:'29_love.png' },
            { name: 'pain_killer', imageUrl:'30_pain_killer.png' },
            { name: 'plums', imageUrl:'31_plums.png' },
            { name: 'handkerchief', imageUrl:'32_handkerchief.png' },
            { name: 'carrot', imageUrl:'33_carrot.png' },
            { name: 'pear', imageUrl:'34_pear.png' },
            //{ name: 'plenty_of_water', imageUrl:'35_plenty_of_water.png' },
            { name: 'toilet', imageUrl:'36_toilet.png' },
            { name: 'plenty_of_water', imageUrl:'37_plenty_of_water.png' },
            { name: 'socks', imageUrl:'38_socks.png' },
            { name: 'icecream', imageUrl:'39_icecream.png' },
            { name: 'medicine', imageUrl:'40_medicine.png' },
            { name: 'rest', imageUrl:'41_rest.png' }
        ];
    }
    function setRemediesAccordingToCurrentPatient() {
        $("#remedies").empty();
        _.forEach(remedies, function(remedy) {
            var remedyClass = 'draggable remedy ' + remedy.name;
            if (_.includes(currentPatient.remedies, remedy.name)) {
                remedyClass += ' acceptedRemedy';
            }
            $("#remedies").append($("<img>", { 'class': remedyClass, 'src': baseRemediesFolder + remedy.imageUrl }));
        });
    }
    function setCurrentPatient(patient) {
        currentPatient = patient;
        $(".current_patient img").attr('src', basePatientsFolder + currentPatient.imageUrl);
    }
    function setDraggables() {
        $("#remedies .draggable").draggable(
            {
                cursor: 'move',
                cursorAt: { top: 25, left: 25 },
                containment: '.main-container',
                revert: true,
                opacity: 0.7
            }
        );
        $("#waitingRoom .draggable").draggable(
            {
                cursor: 'move',
                cursorAt: { top: 25, left: 25 },
                containment: '.main-container',
                revert: true,
                opacity: 0.7
            }
        );
    }
    function setDroppables() {
        var acceptedClasses = '.waitingPatient, .acceptedRemedy';
        $(".droppablePatient img").droppable({
            accept: acceptedClasses,
            classes: {
                'ui-droppable-active': 'ui-state-default'
            },
            drop: function(event, ui) {
                var classNames = ui.draggable.context.className.split(' ');

                var isDroppedPatient = _.indexOf(classNames, 'waitingPatient') > -1;
                var isDroppedRemedy = _.indexOf(classNames, 'remedy') > -1;
                
                if (isDroppedPatient) {
                    var waitingRoomNames = _.map(waitingRoom, 'name');
                    var droppedPatientName = _.filter(classNames, function(className) { return _.includes(waitingRoomNames, className); });
                    var droppedPatient = _.find(waitingRoom, function(pat) { return pat.name === droppedPatientName[0]; });

                    if (droppedPatient !== undefined) {
                        initCurrentPatient(droppedPatient);
                    }
                }
                else if (isDroppedRemedy) {
                    $(".current_patient img").fadeOut(function() {
                        $(".current_patient img").attr('src', basePatientsFolder + currentPatient.curedImageUrl);
                        $(".current_patient img").fadeIn();
                        $(".next_patient").fadeIn();
                        $("#patient").css({float: 'left', maxWidth: '50%'});
                    });
                }
            }
        });
    }
    function initCurrentPatient(patient) {
        setCurrentPatient(patient);
        setRemediesAccordingToCurrentPatient();
        setDraggables();
        setDroppables();
        $(".current_patient img").fadeIn();
    }

    setDraggables();
    $(".next_patient").click(function() {
        var completedPatient = _.find(waitingRoom, function(pat) { return pat.name === currentPatient.name; });
        var completedPatientIndex = _.findIndex(waitingRoom, function(pat) { return pat.name === currentPatient.name; });
        
        if (completedPatientIndex !== -1) {
            waitingRoom.splice(completedPatientIndex, 1);
        }
        
        $("#waitingRoom").children().each(function() {
            if ($(this).hasClass(completedPatient.name)) {
                $(this).fadeOut();
            }
        });
        $(".current_patient img").fadeOut(function() {
            if (waitingRoom.length > 0) {
                initCurrentPatient(waitingRoom[Math.floor(Math.random() * waitingRoom.length)]);
            }
            else {
                $(".waitingRoomSidebar").hide();
                $("#patient").hide();
                $(".remediesSidebar").hide();
                $("#thankYou").fadeIn();
            }

            $(".next_patient").hide();
            $("#patient").css({float: 'none', maxWidth: '100%'});
        });
    });

    $("#thankYou img").click(function () {
        location.reload(true);
    })
} );
