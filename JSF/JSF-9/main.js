// 9-1. Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону,
// потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

$('h2.head').addClass('head_color');
$('h2.head .inner').addClass('inner_size');

// 9-2. На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

$('a').filter('[href^="https://"]').attr('target', 'blank');

// 9-3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

$('h3').each(function () {
    $(this).next('div').insertBefore($(this));
});

// 9-4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

const checkBoxes = $('input[type="checkbox"]');
checkBoxes.change(function () {
    const checkedCount = checkBoxes.filter(':checked').length;
    if (checkedCount === 3) {
        checkBoxes.prop('disabled', true);
    }
})