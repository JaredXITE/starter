/*LECTURE: Logical Operators
1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
country that speaks english, has less than 50 million people and is not an
island.
3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
not, log 'Portugal does not meet your criteria :('
5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
change some variables in order to make the condition true (unless you live in Canada :D)*/

const language = "english";
const isIsland = true;

if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
}