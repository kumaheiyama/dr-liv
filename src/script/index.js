$(function() {
    var basePatientsFolder = 'images/patients/';
    var baseRemediesFolder = 'images/remedies/';
    var patients = [];
    var currentPatient = null;
    var remedies = [];

    function init() {
        patients = [
            { imageUrl: '01_teddy_bear.png', curedImageUrl: '01_fine_teddy.png', remedies: ['chickenpox_medicine'] },
            { imageUrl: '02_giant_bump.png', curedImageUrl: '02_bandaged_bump.png', remedies: ['rest', 'bandage'] },
            { imageUrl: '03_cut_in_stomache.png', curedImageUrl: '03_plaster_on_stomache.png', remedies: ['plaster'] },
            { imageUrl: '05_snake_with_a_cold.png', curedImageUrl: '05_happy_snake.png', remedies: ['sleep', 'rest', 'wait', 'tissues'] },
            { imageUrl: '06_broken_leg.png', curedImageUrl: '06_leg_in_cast.png' },
            { imageUrl: '07_spider.png', curedImageUrl: '13_thumbs_up.png' },
            { imageUrl: '08_bug_with_tummy_ache.png', curedImageUrl: '08_happy_bug.png' },
            { imageUrl: '09_angry_pig.png', curedImageUrl: '13_thumbs_up.png', remedies: ['comfort_food'] },
            { imageUrl: '10_alien_with_a_cold.png', curedImageUrl: '10_alient_a_ok.png' },
            { imageUrl: '11_bunny_with_chickenpox.png', curedImageUrl: '11_fine_bunny.png' },
            { imageUrl: '14_scared_bug.png', curedImageUrl: '13_thumbs_up.png' },
            { imageUrl: '15_mouse_with_tummy_ache.png', curedImageUrl: '15_happy_mouse.png' },
            { imageUrl: '16_clown_with_runny_nose.png', curedImageUrl: '16_happy_clown.png' },
            { imageUrl: '17_snake_feeling_down.png', curedImageUrl: '13_thumbs_up.png' }
        ];
        currentPatient = patients[Math.floor(Math.random() * patients.length)];
        $(".current_patient img").attr('src', basePatientsFolder + currentPatient.imageUrl);

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
            { name: 'plenty_of_water', imageUrl:'35_plenty_of_water.png' },
            { name: 'toilet', imageUrl:'36_toilet.png' },
            { name: 'plenty_of_water', imageUrl:'37_plenty_of_water.png' },
            { name: 'socks', imageUrl:'38_socks.png' },
            { name: 'icecream', imageUrl:'39_icecream.png' },
            { name: 'medicine', imageUrl:'40_medicine.png' },
            { name: 'rest', imageUrl:'41_rest.png' }
        ];
        $("#remedies").empty();
        _.forEach(remedies, function(remedy) {
            var remedyClass = 'draggable remedy ' + remedy.name;
            if (_.includes(currentPatient.remedies, remedy.name)) {
                remedyClass += ' acceptedRemedy';
            }
            $("#remedies").append($("<img>", { 'class': remedyClass, 'src': baseRemediesFolder + remedy.imageUrl }));
        });

        $(".draggable").draggable(
            {
                cursor: 'move',
                cursorAt: { top: 50, left: 50 },
                containment: '.main-container',
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
                $(".current_patient img").fadeOut(function() {
                    $(".current_patient img").attr('src', basePatientsFolder + currentPatient.curedImageUrl);
                    $(".current_patient img").fadeIn();
                });
                $(".next_patient").fadeIn();
            }
        });
        $(".next_patient").hide();
    }
    init();

    $(".draggable").draggable(
        {
            cursor: 'move',
            cursorAt: { top: 50, left: 50 },
            containment: '.main-container',
            revert: true,
            opacity: 0.7
        }
    );
    $(".next_patient").click(function() {
        init();
    });
} );
