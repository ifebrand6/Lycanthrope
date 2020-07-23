    /*
    NAME: UDEOGU IFECHUWKU
    TASK:  LYCANTHROPE'S LOG
    STACK: FRONTEND
    WEEKL THREE
    */
const humanForm = require('./exp').humanForm;
const wolfForm = require('./exp').wolfForm

const Lycanthrope  = {
    eventList: [
        {"events":["swimming","exercise","weekend"]},
        {"events":["pray","pudding","pizza","weekend","touched tree"]},
        {"events":["swimming","tweeting","coding","cycling","weekend"]},
        {"events":["Egusi Soup","ice cream","coding","computer","weekend"]},
        {"events":["potatoes","candy","coding","exercise","weekend","dentist"]},
        {"events":["Jollof rice","pudding","coding","running","weekend"]},
        {"events":["pizza","coding","computer","work","touched tree"]},
        {"events":["pray","beans","coding","cycling","work"]},
        {"events":["cauliflower","coding","work"]},
        {"events":["pizza","coding","cycling","work"]},
        {"events":["lasagna","tweeting","coding","work"]},
        {"events":["coding","weekend","touched tree"]},
        {"events":["lettuce","coding","television","weekend"]},
        {"events":["spaghetti","coding","work"]},
                ],
            eventEvalator: function () {
                const eventTracker = this.eventList
                console.log(`NO OF DAYS RECORDED: ${this.eventList.length}`)
                    for (let i = 0; i < eventTracker.length; i++) {
                        const anEvent = eventTracker[i];
                        // console.log( test[i].length)
                        // console.log("THi")
                    const anEventActivities = anEvent.events
                    let day = i + 1;
                        for (let i = 0; i < anEventActivities.length; i++) {
                            const value = anEventActivities[i];
                        if (value === 'pizza') {
                            this.logger(day)
                        }
            
                        }
                    }
                
            },
            logger: function (day){
                console.log(`
                ___________________________________________________________________ 
                |DAY ${day}                                                        |
                |Jacques will turn into a wolf in day ${day} because he eat pizza! |
                ____________________________________________________________________
                `
                 + wolfForm
                 )

            },
            addEvent(...args){
                 this.eventList.push({events: args})
            }
}
// a = [{'a': []}]
// function add(...ar){
//     return this.a.push([{'a': [ar]}])
// }
Lycanthrope.addEvent("go to school","tester");
Lycanthrope.addEvent("go to school","pizza")
// console.log(Lycanthrope.eventList)
Lycanthrope.eventEvalator();

