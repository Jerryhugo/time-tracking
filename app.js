const timeInfo = [{
            "title": "Work",
            "timeframes": {
                "daily": {
                    "current": 5,
                    "previous": 7
                },
                "weekly": {
                    "current": 32,
                    "previous": 36
                },
                "monthly": {
                    "current": 103,
                    "previous": 128
                }
            }
        },
        {
            "title": "Play",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 2
                },
                "weekly": {
                    "current": 10,
                    "previous": 8
                },
                "monthly": {
                    "current": 23,
                    "previous": 29
                }
            }
        },
        {
            "title": "Study",
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "weekly": {
                    "current": 4,
                    "previous": 7
                },
                "monthly": {
                    "current": 13,
                    "previous": 19
                }
            }
        },
        {
            "title": "Exercise",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 1
                },
                "weekly": {
                    "current": 4,
                    "previous": 5
                },
                "monthly": {
                    "current": 11,
                    "previous": 18
                }
            }
        },
        {
            "title": "Social",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 3
                },
                "weekly": {
                    "current": 5,
                    "previous": 10
                },
                "monthly": {
                    "current": 21,
                    "previous": 23
                }
            }
        },
        {
            "title": "Self Care",
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "weekly": {
                    "current": 2,
                    "previous": 2
                },
                "monthly": {
                    "current": 7,
                    "previous": 11
                }
            }
        }
    ]
    // work data
const currentDay = timeInfo[0].timeframes.daily.current
const previousDay = timeInfo[0].timeframes.daily.previous
const currentWeek = timeInfo[0].timeframes.weekly.current
const previousWeek = timeInfo[0].timeframes.weekly.previous;
const currentMonth = timeInfo[0].timeframes.monthly.current;
const previousMonth = timeInfo[0].timeframes.monthly.previous;

//play data
const pCurrentDay = timeInfo[1].timeframes.daily.current
const pPreviousDay = timeInfo[1].timeframes.daily.previous
const pCurrentWeek = timeInfo[1].timeframes.weekly.current
const pPreviousWeek = timeInfo[1].timeframes.weekly.previous;
const pCurrentMonth = timeInfo[1].timeframes.monthly.current;
const pPreviousMonth = timeInfo[1].timeframes.monthly.previous;

//study 
const sCurrentDay = timeInfo[2].timeframes.daily.current
const sPreviousDay = timeInfo[0].timeframes.daily.previous
const sCurrentWeek = timeInfo[2].timeframes.weekly.current
const sPreviousWeek = timeInfo[2].timeframes.weekly.previous;
const sPurrentMonth = timeInfo[2].timeframes.monthly.current;
const sPreviousMonth = timeInfo[2].timeframes.monthly.previous;

//exercise
const eCurrentDay = timeInfo[3].timeframes.daily.current
const ePreviousDay = timeInfo[3].timeframes.daily.previous
const eCurrentWeek = timeInfo[3].timeframes.weekly.current
const ePreviousWeek = timeInfo[3].timeframes.weekly.previous;
const eCurrentMonth = timeInfo[3].timeframes.monthly.current;
const ePreviousMonth = timeInfo[3].timeframes.monthly.previous;

//social 
const soCurrentDay = timeInfo[4].timeframes.daily.current
const soPreviousDay = timeInfo[4].timeframes.daily.previous
const soCurrentWeek = timeInfo[4].timeframes.weekly.current
const soPreviousWeek = timeInfo[4].timeframes.weekly.previous;
const soCurrentMonth = timeInfo[4].timeframes.monthly.current;
const soPreviousMonth = timeInfo[4].timeframes.monthly.previous;

//self-care
const seCurrentDay = timeInfo[5].timeframes.daily.current
const sePreviousDay = timeInfo[5].timeframes.daily.previous
const seCurrentWeek = timeInfo[5].timeframes.weekly.current
const sePreviousWeek = timeInfo[5].timeframes.weekly.previous;
const seCurrentMonth = timeInfo[5].timeframes.monthly.current;
const sePreviousMonth = timeInfo[5].timeframes.monthly.previous;


// let arrDayCurrent = [];
// let arrDayPrevious = [];
// let arrWeekCurrent = [];
// let arrWeekPrevious = [];
// let arrMonthCurrent = [];
// let arrMonthPrevious = [];
// timeInfo.forEach((e) => {

//     arrDay.push(e.timeframes.daily.current);
//     arrDayPrevious.push(e.timeframes.daily.previous);
//     arrWeekCurrent.push(e.timeframes.weekly.current);
//     arrWeekPrevious.push(e.timeframes.weekly.previous);
//     arrMonthCurrent.push(e.timeframes.monthly.current);
//     arrMonthPreviouspush(e.timeframes.monthly.previous)

// })
$("#work .ref h2").text(currentDay + "hrs")
$("#work .ref p").text("Previous Day" + previousDay + "hrs")
$("#play .ref h2").text(pCurrentDay + "hrs")
$("#play .ref p").text("Previous Day" + pPreviousDay + "hrs")
$("#study .ref h2").text(sCurrentDay + "hrs");
$("#study .ref p").text("previous Day" + sPreviousDay + "hrs")
$("#exercise .ref h2").text(eCurrentDay + "hrs");
$("#exercise .ref p").text("previous Day" + ePreviousDay + "hrs");
$("#social .ref h2").text(soCurrentDay + "hrs");
$("#social .ref p").text("previous Day" + soPreviousDay + "hrs");
$("#self-care .ref h2").text(seCurrentDay + "hrs");
$("#self-care .ref p").text("previous Day" + sePreviousDay + "hrs");


$("#time-control #day").click(() => {
    if (!$("#day").hasClass("active")) {
        $("#day").addClass("active")
    }
    if ($("#week").hasClass("active")) {
        $("#week").removeClass("active")
    }
    if ($("#month").hasClass("active")) {
        $("#month").removeClass("active")
    }
    $("#work .ref h2").text(currentDay + "hrs")
    $("#work .ref p").text("Previous Day" + previousDay + "hrs")
    $("#play .ref h2").text(pCurrentDay + "hrs")
    $("#play .ref p").text("Previous Day" + pPreviousDay + "hrs")
    $("#study .ref h2").text(sCurrentDay + "hrs");
    $("#study .ref p").text("previous Day" + sPreviousDay + "hrs")
    $("#exercise .ref h2").text(eCurrentDay + "hrs");
    $("#exercise .ref p").text("previous Day" + ePreviousDay + "hrs");
    $("#social .ref h2").text(soCurrentDay + "hrs");
    $("#social .ref p").text("previous Day" + soPreviousDay + "hrs");
    $("#self-care .ref h2").text(seCurrentDay + "hrs");
    $("#self-care .ref p").text("previous Day" + sePreviousDay + "hrs");
})

$("#time-control #week").click(() => {
    if (!$("#week").hasClass("active")) {
        $("#week").addClass("active")
    }
    if ($("#day").hasClass("active")) {
        $("#day").removeClass("active")
    }
    if ($("#month").hasClass("active")) {
        $("#month").removeClass("active")
    }
    $("#work .ref h2").text(currentWeek + "hrs")
    $("#work .ref p").text("Previous Day" + previousWeek + "hrs")
    $("#play .ref h2").text(pCurrentWeek + "hrs")
    $("#play .ref p").text("Previous Day" + pPreviousWeek + "hrs")
    $("#study .ref h2").text(sCurrentWeek + "hrs");
    $("#study .ref p").text("previous Day" + sPreviousWeek + "hrs")
    $("#exercise .ref h2").text(eCurrentWeek + "hrs");
    $("#exercise .ref p").text("previous Day" + ePreviousWeek + "hrs");
    $("#social .ref h2").text(soCurrentWeek + "hrs");
    $("#social .ref p").text("previous Day" + soPreviousWeek + "hrs");
    $("#self-care .ref h2").text(seCurrentWeek + "hrs");
    $("#self-care .ref p").text("previous Day" + sePreviousWeek + "hrs");
})

$("#time-control #month").click(() => {
    if (!$("#month").hasClass("active")) {
        $("#month").addClass("active")
    }
    if ($("#day").hasClass("active")) {
        $("#day").removeClass("active")
    }
    if ($("#week").hasClass("active")) {
        $("#week").removeClass("active")
    }
    $("#work .ref h2").text(currentMonth + "hrs")
    $("#work .ref p").text("Previous Day" + previousMonth + "hrs")
    $("#play .ref h2").text(pCurrentMonth + "hrs")
    $("#play .ref p").text("Previous Day" + pPreviousMonth + "hrs")
    $("#study .ref h2").text(seCurrentMonth + "hrs");
    $("#study .ref p").text("previous Day" + sPreviousMonth + "hrs")
    $("#exercise .ref h2").text(eCurrentMonth + "hrs");
    $("#exercise .ref p").text("previous Day" + ePreviousMonth + "hrs");
    $("#social .ref h2").text(soCurrentMonth + "hrs");
    $("#social .ref p").text("previous Day" + soPreviousMonth + "hrs");
    $("#self-care .ref h2").text(seCurrentMonth + "hrs");
    $("#self-care .ref p").text("previous Day" + sePreviousMonth + "hrs");
})