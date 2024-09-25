export const SEP22ELEVATION = 1456258;
export const SEP22DISTANCE = 11241;
export const SEP22ELAPSEDTIME = 65970;

export function calculateRankings(activities: RideType[]) {
  const assignRank = (
    sortedArr: RideType[],
    key: "distance" | "elapsedTime" | "elevationGain"
  ) => {
    return sortedArr.map((item, index) => ({
      ...item,
      [`${key}`]: {
        value: item[`${key}`].value,
        rank: index + 1,
      },
    }));
  };

  const distanceRanked = assignRank(
    [...activities].sort((a, b) => b.distance.value - a.distance.value),
    "distance"
  );

  const timeRanked = assignRank(
    [...distanceRanked].sort(
      (a, b) => b.elapsedTime.value - a.elapsedTime.value
    ),
    "elapsedTime"
  );

  const elevationRanked = assignRank(
    [...timeRanked].sort(
      (a, b) => b.elevationGain.value - a.elevationGain.value
    ),
    "elevationGain"
  );

  return elevationRanked;
}

export type RideType = {
  title: string;
  athleteName: string;
  distance: { value: number; rank?: number };
  elapsedTime: { value: number; rank?: number };
  elevationGain: { value: number; rank?: number };
  url?: string;
};

export const sep22Data: RideType[] = [
  {
    title: "One way to spend your Sunday",
    athleteName: "Alessandro C.",
    distance: {
      value: 157,
      rank: 3,
    },
    elapsedTime: {
      value: 757,
      rank: 6,
    },
    elevationGain: {
      value: 29160,
      rank: 1,
    },
  },
  {
    title: "Everest",
    athleteName: "Russ",
    distance: {
      value: 128,
      rank: 4,
    },
    elapsedTime: {
      value: 771,
      rank: 3,
    },
    elevationGain: {
      value: 29127,
      rank: 2,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Miles M.",
    distance: {
      value: 168,
      rank: 1,
    },
    elapsedTime: {
      value: 944,
      rank: 1,
    },
    elevationGain: {
      value: 29078,
      rank: 3,
    },
  },
  {
    title: "everest",
    athleteName: "Xinsong L.",
    distance: {
      value: 165,
      rank: 2,
    },
    elapsedTime: {
      value: 770,
      rank: 4,
    },
    elevationGain: {
      value: 29078,
      rank: 4,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Dominic O.",
    distance: {
      value: 127,
      rank: 6,
    },
    elapsedTime: {
      value: 794,
      rank: 2,
    },
    elevationGain: {
      value: 29042,
      rank: 5,
    },
  },
  {
    title: "Everest - Combined From Two Rides",
    athleteName: "Dane F.",
    distance: {
      value: 124,
      rank: 8,
    },
    elapsedTime: {
      value: 752,
      rank: 7,
    },
    elevationGain: {
      value: 29029,
      rank: 6,
    },
  },
  {
    title: "I’m a broken little lad",
    athleteName: "Parker D.",
    distance: {
      value: 128,
      rank: 5,
    },
    elapsedTime: {
      value: 764,
      rank: 5,
    },
    elevationGain: {
      value: 21931,
      rank: 7,
    },
  },
  {
    title: "Candlelight Repeats (100X)",
    athleteName: "Patrick H.",
    distance: {
      value: 89,
      rank: 24,
    },
    elapsedTime: {
      value: 592,
      rank: 16,
    },
    elevationGain: {
      value: 20287,
      rank: 8,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Yogi Giovanni R.",
    distance: {
      value: 113,
      rank: 11,
    },
    elapsedTime: {
      value: 556,
      rank: 18,
    },
    elevationGain: {
      value: 20120,
      rank: 9,
    },
    url: "https://www.strava.com/activities/12480073401",
  },
  {
    title: "Soledad challenge",
    athleteName: "Elisa L.",
    distance: {
      value: 126,
      rank: 7,
    },
    elapsedTime: {
      value: 687,
      rank: 9,
    },
    elevationGain: {
      value: 20058,
      rank: 10,
    },
    url: "https://www.strava.com/activities/12480393910",
  },
  {
    title: "If La Jolla could just pave a damn street...",
    athleteName: "Adam S.",
    distance: {
      value: 122,
      rank: 9,
    },
    elapsedTime: {
      value: 553,
      rank: 19,
    },
    elevationGain: {
      value: 17434,
      rank: 11,
    },
  },
  {
    title: "MAAP Equinox Experience w/Team Best aka Soledadapalooza",
    athleteName: "Yee F.",
    distance: {
      value: 119,
      rank: 10,
    },
    elapsedTime: {
      value: 605,
      rank: 15,
    },
    elevationGain: {
      value: 16538,
      rank: 12,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Luke S.",
    distance: {
      value: 111,
      rank: 12,
    },
    elapsedTime: {
      value: 535,
      rank: 23,
    },
    elevationGain: {
      value: 16292,
      rank: 13,
    },
  },
  {
    title: "fall equinox babyyy",
    athleteName: "Sylas L.",
    distance: {
      value: 102,
      rank: 17,
    },
    elapsedTime: {
      value: 541,
      rank: 21,
    },
    elevationGain: {
      value: 15626,
      rank: 14,
    },
  },
  {
    title: "Half-Everest Century Ride",
    athleteName: "Laura C. G.",
    distance: {
      value: 103,
      rank: 16,
    },
    elapsedTime: {
      value: 736,
      rank: 8,
    },
    elevationGain: {
      value: 15528,
      rank: 15,
    },
  },
  {
    title: "Morning Gravel Ride",
    athleteName: "Stephane R.",
    distance: {
      value: 109,
      rank: 13,
    },
    elapsedTime: {
      value: 643,
      rank: 14,
    },
    elevationGain: {
      value: 15521,
      rank: 16,
    },
  },
  {
    title: "Livin’ on a Prayer",
    athleteName: "Rory P.",
    distance: {
      value: 81,
      rank: 29,
    },
    elapsedTime: {
      value: 433,
      rank: 36,
    },
    elevationGain: {
      value: 15256,
      rank: 17,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Andrew S.",
    distance: {
      value: 87,
      rank: 25,
    },
    elapsedTime: {
      value: 433,
      rank: 35,
    },
    elevationGain: {
      value: 15197,
      rank: 18,
    },
  },
  {
    title: "Half Everest",
    athleteName: "Daniel K.",
    distance: {
      value: 67,
      rank: 52,
    },
    elapsedTime: {
      value: 576,
      rank: 17,
    },
    elevationGain: {
      value: 15161,
      rank: 19,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Oscar V.",
    distance: {
      value: 93,
      rank: 20,
    },
    elapsedTime: {
      value: 681,
      rank: 10,
    },
    elevationGain: {
      value: 15111,
      rank: 20,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Rob #.",
    distance: {
      value: 77,
      rank: 32,
    },
    elapsedTime: {
      value: 672,
      rank: 12,
    },
    elevationGain: {
      value: 15092,
      rank: 21,
    },
  },
  {
    title: "Half way day",
    athleteName: "Adam C.",
    distance: {
      value: 68,
      rank: 50,
    },
    elapsedTime: {
      value: 436,
      rank: 34,
    },
    elevationGain: {
      value: 15082,
      rank: 22,
    },
  },
  {
    title: "Team Best Soledad Mt One Million foot climb challenge",
    athleteName: "Ryan M.",
    distance: {
      value: 106,
      rank: 15,
    },
    elapsedTime: {
      value: 672,
      rank: 11,
    },
    elevationGain: {
      value: 15033,
      rank: 23,
    },
  },
  {
    title: "ok i’m going home now",
    athleteName: "Ansel S.",
    distance: {
      value: 93,
      rank: 21,
    },
    elapsedTime: {
      value: 526,
      rank: 26,
    },
    elevationGain: {
      value: 14688,
      rank: 24,
    },
  },
  {
    title: "Soledad Million Feet Challenge",
    athleteName: "Xavier N.",
    distance: {
      value: 93,
      rank: 22,
    },
    elapsedTime: {
      value: 536,
      rank: 22,
    },
    elevationGain: {
      value: 11877,
      rank: 25,
    },
  },
  {
    title: "Soledad Day",
    athleteName: "Aaron L.",
    distance: {
      value: 69,
      rank: 48,
    },
    elapsedTime: {
      value: 361,
      rank: 52,
    },
    elevationGain: {
      value: 11626,
      rank: 26,
    },
  },
  {
    title: "1m soledad feet mapp ride",
    athleteName: "Tony F.",
    distance: {
      value: 95,
      rank: 19,
    },
    elapsedTime: {
      value: 531,
      rank: 25,
    },
    elevationGain: {
      value: 11139,
      rank: 27,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Ronson N.",
    distance: {
      value: 71,
      rank: 42,
    },
    elapsedTime: {
      value: 380,
      rank: 46,
    },
    elevationGain: {
      value: 11070,
      rank: 28,
    },
  },
  {
    title: "Kill Two Birds with One Ride",
    athleteName: "Karlene E.",
    distance: {
      value: 107,
      rank: 14,
    },
    elapsedTime: {
      value: 649,
      rank: 13,
    },
    elevationGain: {
      value: 11049,
      rank: 29,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "larry L.",
    distance: {
      value: 71,
      rank: 43,
    },
    elapsedTime: {
      value: 486,
      rank: 31,
    },
    elevationGain: {
      value: 11038,
      rank: 30,
    },
  },
  {
    title: "Soledad Million Challenge",
    athleteName: "Mathew Y.",
    distance: {
      value: 66,
      rank: 53,
    },
    elapsedTime: {
      value: 533,
      rank: 24,
    },
    elevationGain: {
      value: 10898,
      rank: 31,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Luke P.",
    distance: {
      value: 70,
      rank: 47,
    },
    elapsedTime: {
      value: 320,
      rank: 77,
    },
    elevationGain: {
      value: 10821,
      rank: 32,
    },
  },
  {
    title: "Soledad challenge- hopefully 10k in a day of climbing",
    athleteName: "Little R.",
    distance: {
      value: 71,
      rank: 44,
    },
    elapsedTime: {
      value: 503,
      rank: 27,
    },
    elevationGain: {
      value: 10730,
      rank: 33,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Steve Y.",
    distance: {
      value: 71,
      rank: 45,
    },
    elapsedTime: {
      value: 417,
      rank: 40,
    },
    elevationGain: {
      value: 10516,
      rank: 34,
    },
  },
  {
    title: "Soledad Million",
    athleteName: "Chicken Tender  S.",
    distance: {
      value: 77,
      rank: 33,
    },
    elapsedTime: {
      value: 552,
      rank: 20,
    },
    elevationGain: {
      value: 10451,
      rank: 35,
    },
  },
  {
    title: "1/100 of 1,000,000",
    athleteName: "Nedla R.",
    distance: {
      value: 73,
      rank: 38,
    },
    elapsedTime: {
      value: 394,
      rank: 42,
    },
    elevationGain: {
      value: 10451,
      rank: 36,
    },
  },
  {
    title: "Soledad Challenge",
    athleteName: "Larry Tanzo *PRT* ..",
    distance: {
      value: 78,
      rank: 30,
    },
    elapsedTime: {
      value: 447,
      rank: 32,
    },
    elevationGain: {
      value: 10405,
      rank: 37,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Colin L.",
    distance: {
      value: 78,
      rank: 31,
    },
    elapsedTime: {
      value: 400,
      rank: 41,
    },
    elevationGain: {
      value: 10352,
      rank: 38,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Pengyu Y.",
    distance: {
      value: 76,
      rank: 35,
    },
    elapsedTime: {
      value: 498,
      rank: 29,
    },
    elevationGain: {
      value: 10332,
      rank: 39,
    },
  },
  {
    title: "Morning Ride (Sept. - 22)",
    athleteName: "Zixuan Z.",
    distance: {
      value: 76,
      rank: 36,
    },
    elapsedTime: {
      value: 498,
      rank: 30,
    },
    elevationGain: {
      value: 10332,
      rank: 40,
    },
  },
  {
    title: "Soledad 1 mill",
    athleteName: "Andre H.",
    distance: {
      value: 85,
      rank: 27,
    },
    elapsedTime: {
      value: 377,
      rank: 48,
    },
    elevationGain: {
      value: 10303,
      rank: 41,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Teddy H.",
    distance: {
      value: 62,
      rank: 62,
    },
    elapsedTime: {
      value: 325,
      rank: 69,
    },
    elevationGain: {
      value: 10280,
      rank: 42,
    },
  },
  {
    title: "Thanks Cadence",
    athleteName: "Jelger K.",
    distance: {
      value: 77,
      rank: 34,
    },
    elapsedTime: {
      value: 431,
      rank: 37,
    },
    elevationGain: {
      value: 10234,
      rank: 43,
    },
  },
  {
    title: "The Tall Way to In-N-Out. 🍔",
    athleteName: "Sean M.",
    distance: {
      value: 72,
      rank: 40,
    },
    elapsedTime: {
      value: 305,
      rank: 95,
    },
    elevationGain: {
      value: 10085,
      rank: 44,
    },
  },
  {
    title: "Soledad Million Challenge - 10th 10K on the hill",
    athleteName: "Chris D.",
    distance: {
      value: 58,
      rank: 75,
    },
    elapsedTime: {
      value: 370,
      rank: 50,
    },
    elevationGain: {
      value: 10070,
      rank: 45,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "John N.",
    distance: {
      value: 72,
      rank: 41,
    },
    elapsedTime: {
      value: 421,
      rank: 39,
    },
    elevationGain: {
      value: 10041,
      rank: 46,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Fred W.",
    distance: {
      value: 69,
      rank: 49,
    },
    elapsedTime: {
      value: 283,
      rank: 106,
    },
    elevationGain: {
      value: 10030,
      rank: 47,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Gabe V.",
    distance: {
      value: 91,
      rank: 23,
    },
    elapsedTime: {
      value: 378,
      rank: 47,
    },
    elevationGain: {
      value: 9188,
      rank: 48,
    },
  },
  {
    title: "Only had 3 hours to play, got as much vert in as I could. 😅 😅 😅",
    athleteName: "N8  🤘.",
    distance: {
      value: 43,
      rank: 128,
    },
    elapsedTime: {
      value: 192,
      rank: 150,
    },
    elevationGain: {
      value: 8991,
      rank: 49,
    },
  },
  {
    title: "Soledad million: my contribution",
    athleteName: "E F.",
    distance: {
      value: 59,
      rank: 71,
    },
    elapsedTime: {
      value: 314,
      rank: 87,
    },
    elevationGain: {
      value: 8524,
      rank: 50,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "MotoDDS LJ D.",
    distance: {
      value: 59,
      rank: 72,
    },
    elapsedTime: {
      value: 269,
      rank: 113,
    },
    elevationGain: {
      value: 8517,
      rank: 51,
    },
  },
  {
    title: "Ascent of Soledad",
    athleteName: "Zac S.",
    distance: {
      value: 61,
      rank: 65,
    },
    elapsedTime: {
      value: 309,
      rank: 89,
    },
    elevationGain: {
      value: 8240,
      rank: 52,
    },
  },
  {
    title: "Duathalon Stack - Part 2:\n  EG Layering",
    athleteName: "STORM R.",
    distance: {
      value: 57,
      rank: 80,
    },
    elapsedTime: {
      value: 298,
      rank: 98,
    },
    elevationGain: {
      value: 8210,
      rank: 53,
    },
  },
  {
    title: "Soledaddy Million Challenge p/b MAAP",
    athleteName: "Tait C.",
    distance: {
      value: 71,
      rank: 46,
    },
    elapsedTime: {
      value: 323,
      rank: 71,
    },
    elevationGain: {
      value: 8209,
      rank: 54,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jordi L.",
    distance: {
      value: 57,
      rank: 81,
    },
    elapsedTime: {
      value: 308,
      rank: 90,
    },
    elevationGain: {
      value: 8181,
      rank: 55,
    },
  },
  {
    title: "Morning Ride - Soledad Million",
    athleteName: "quiet S.",
    distance: {
      value: 64,
      rank: 57,
    },
    elapsedTime: {
      value: 331,
      rank: 64,
    },
    elevationGain: {
      value: 8161,
      rank: 56,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Alejandro A.",
    distance: {
      value: 59,
      rank: 73,
    },
    elapsedTime: {
      value: 292,
      rank: 102,
    },
    elevationGain: {
      value: 8138,
      rank: 57,
    },
  },
  {
    title: "Soledad Million Challenge p/b MAAP",
    athleteName: "Nicolas F.",
    distance: {
      value: 45,
      rank: 120,
    },
    elapsedTime: {
      value: 273,
      rank: 112,
    },
    elevationGain: {
      value: 8122,
      rank: 58,
    },
  },
  {
    title: "Soledadilus",
    athleteName: "Soledandy 🦜.",
    distance: {
      value: 52,
      rank: 97,
    },
    elapsedTime: {
      value: 354,
      rank: 57,
    },
    elevationGain: {
      value: 8107,
      rank: 59,
    },
  },
  {
    title: "Soledad Million Elevation Challenge done 🤪",
    athleteName: "𝓢𝓽𝓪𝓰𝓮 2 𝓒𝔂𝓬𝓵𝓮𝓻𝔂 𝓜.",
    distance: {
      value: 58,
      rank: 76,
    },
    elapsedTime: {
      value: 251,
      rank: 120,
    },
    elevationGain: {
      value: 8062,
      rank: 60,
    },
  },
  {
    title: "Sep 22 - 8000 Soledaddies",
    athleteName: "Tiger Y.",
    distance: {
      value: 57,
      rank: 82,
    },
    elapsedTime: {
      value: 249,
      rank: 128,
    },
    elevationGain: {
      value: 8059,
      rank: 61,
    },
  },
  {
    title: "Death by Mt. Soledad",
    athleteName: "Ramon S.",
    distance: {
      value: 62,
      rank: 63,
    },
    elapsedTime: {
      value: 285,
      rank: 103,
    },
    elevationGain: {
      value: 8036,
      rank: 62,
    },
  },
  {
    title: "Soledad Million Challenge - Equinox Experience",
    athleteName: "Tino M.",
    distance: {
      value: 59,
      rank: 74,
    },
    elapsedTime: {
      value: 315,
      rank: 83,
    },
    elevationGain: {
      value: 8007,
      rank: 63,
    },
  },
  {
    title: "Soledad Million Challenge ⛰️ 💯",
    athleteName: "Dante C.",
    distance: {
      value: 53,
      rank: 95,
    },
    elapsedTime: {
      value: 307,
      rank: 92,
    },
    elevationGain: {
      value: 7968,
      rank: 64,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Pete S.",
    distance: {
      value: 101,
      rank: 18,
    },
    elapsedTime: {
      value: 427,
      rank: 38,
    },
    elevationGain: {
      value: 7912,
      rank: 65,
    },
  },
  {
    title: "Little contribution for the Soledad Equinox w/ Team Best",
    athleteName: "Eloïse P.",
    distance: {
      value: 76,
      rank: 37,
    },
    elapsedTime: {
      value: 381,
      rank: 44,
    },
    elevationGain: {
      value: 7850,
      rank: 66,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jordan K.",
    distance: {
      value: 58,
      rank: 77,
    },
    elapsedTime: {
      value: 250,
      rank: 124,
    },
    elevationGain: {
      value: 7692,
      rank: 67,
    },
  },
  {
    title: "Just cruising Palomar",
    athleteName: "Jon S.",
    distance: {
      value: 54,
      rank: 90,
    },
    elapsedTime: {
      value: 322,
      rank: 75,
    },
    elevationGain: {
      value: 7508,
      rank: 68,
    },
  },
  {
    title: "Mt. Soledad Challenge",
    athleteName: "David C.",
    distance: {
      value: 58,
      rank: 78,
    },
    elapsedTime: {
      value: 282,
      rank: 107,
    },
    elevationGain: {
      value: 7417,
      rank: 69,
    },
  },
  {
    title: "A Hill Too Far",
    athleteName: "Sales P.",
    distance: {
      value: 48,
      rank: 107,
    },
    elapsedTime: {
      value: 342,
      rank: 62,
    },
    elevationGain: {
      value: 7161,
      rank: 70,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Breddie  M.",
    distance: {
      value: 45,
      rank: 121,
    },
    elapsedTime: {
      value: 308,
      rank: 91,
    },
    elevationGain: {
      value: 7127,
      rank: 71,
    },
  },
  {
    title: "Soledad Million Challenge",
    athleteName: "Jackson D.",
    distance: {
      value: 64,
      rank: 58,
    },
    elapsedTime: {
      value: 439,
      rank: 33,
    },
    elevationGain: {
      value: 7102,
      rank: 72,
    },
  },
  {
    title: "Known hill hater rides up hill many times",
    athleteName: "Luke H.",
    distance: {
      value: 51,
      rank: 102,
    },
    elapsedTime: {
      value: 294,
      rank: 100,
    },
    elevationGain: {
      value: 7075,
      rank: 73,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Peter S.",
    distance: {
      value: 56,
      rank: 87,
    },
    elapsedTime: {
      value: 326,
      rank: 68,
    },
    elevationGain: {
      value: 6980,
      rank: 74,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Maddison R.",
    distance: {
      value: 44,
      rank: 125,
    },
    elapsedTime: {
      value: 211,
      rank: 141,
    },
    elevationGain: {
      value: 6934,
      rank: 75,
    },
  },
  {
    title: "Soledad challenge",
    athleteName: "Dave C.",
    distance: {
      value: 52,
      rank: 98,
    },
    elapsedTime: {
      value: 356,
      rank: 54,
    },
    elevationGain: {
      value: 6767,
      rank: 76,
    },
  },
  {
    title: "Morning Gravel Ride",
    athleteName: "Todd B.",
    distance: {
      value: 46,
      rank: 109,
    },
    elapsedTime: {
      value: 251,
      rank: 122,
    },
    elevationGain: {
      value: 6764,
      rank: 77,
    },
  },
  {
    title: "Soledad Sunday 7x",
    athleteName: "Eric R.",
    distance: {
      value: 60,
      rank: 69,
    },
    elapsedTime: {
      value: 293,
      rank: 101,
    },
    elevationGain: {
      value: 6742,
      rank: 78,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Hannah F.",
    distance: {
      value: 52,
      rank: 99,
    },
    elapsedTime: {
      value: 359,
      rank: 53,
    },
    elevationGain: {
      value: 6587,
      rank: 79,
    },
  },
  {
    title: "Soledad Million",
    athleteName: "Samuel V.",
    distance: {
      value: 64,
      rank: 59,
    },
    elapsedTime: {
      value: 343,
      rank: 60,
    },
    elevationGain: {
      value: 6505,
      rank: 80,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Eduard P.",
    distance: {
      value: 54,
      rank: 91,
    },
    elapsedTime: {
      value: 343,
      rank: 61,
    },
    elevationGain: {
      value: 6496,
      rank: 81,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Max Y.",
    distance: {
      value: 50,
      rank: 103,
    },
    elapsedTime: {
      value: 250,
      rank: 125,
    },
    elevationGain: {
      value: 6429,
      rank: 82,
    },
  },
  {
    title: "My contribution to the Soledad Million Challenge",
    athleteName: "Carolyn B.",
    distance: {
      value: 68,
      rank: 51,
    },
    elapsedTime: {
      value: 354,
      rank: 56,
    },
    elevationGain: {
      value: 6426,
      rank: 83,
    },
  },
  {
    title: "Soledad Million by Mapp",
    athleteName: "Scott T.",
    distance: {
      value: 54,
      rank: 92,
    },
    elapsedTime: {
      value: 320,
      rank: 78,
    },
    elevationGain: {
      value: 6396,
      rank: 84,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Max Haggard 🗡.",
    distance: {
      value: 44,
      rank: 126,
    },
    elapsedTime: {
      value: 225,
      rank: 135,
    },
    elevationGain: {
      value: 6328,
      rank: 85,
    },
  },
  {
    title: "Soledad MAAP Milly",
    athleteName: "jonnyknight ✌.",
    distance: {
      value: 54,
      rank: 93,
    },
    elapsedTime: {
      value: 305,
      rank: 96,
    },
    elevationGain: {
      value: 6282,
      rank: 86,
    },
  },
  {
    title: "Soledad Million MAAP\n March",
    athleteName: "Steven  K.",
    distance: {
      value: 53,
      rank: 96,
    },
    elapsedTime: {
      value: 284,
      rank: 105,
    },
    elevationGain: {
      value: 6219,
      rank: 87,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Tanner S.",
    distance: {
      value: 39,
      rank: 142,
    },
    elapsedTime: {
      value: 320,
      rank: 79,
    },
    elevationGain: {
      value: 6128,
      rank: 88,
    },
  },
  {
    title:
      "Soledad Million foot Challenge. 4 Hillsides, 4 Nautilus br. Long hour back.",
    athleteName: "Brett C.",
    distance: {
      value: 61,
      rank: 66,
    },
    elapsedTime: {
      value: 296,
      rank: 99,
    },
    elevationGain: {
      value: 6031,
      rank: 89,
    },
  },
  {
    title: "Soledad climbing challenge",
    athleteName: "Josh Bonnici ⚖️ B.",
    distance: {
      value: 50,
      rank: 104,
    },
    elapsedTime: {
      value: 253,
      rank: 119,
    },
    elevationGain: {
      value: 6026,
      rank: 90,
    },
  },
  {
    title: "Soledad Million (my wee contribution of 6x up)",
    athleteName: "Dan H.",
    distance: {
      value: 65,
      rank: 55,
    },
    elapsedTime: {
      value: 322,
      rank: 73,
    },
    elevationGain: {
      value: 6019,
      rank: 91,
    },
  },
  {
    title: "I lost count",
    athleteName: "DMarzenit ..",
    distance: {
      value: 65,
      rank: 56,
    },
    elapsedTime: {
      value: 381,
      rank: 45,
    },
    elevationGain: {
      value: 6003,
      rank: 92,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Logan Hunter B.",
    distance: {
      value: 87,
      rank: 26,
    },
    elapsedTime: {
      value: 362,
      rank: 51,
    },
    elevationGain: {
      value: 5944,
      rank: 93,
    },
  },
  {
    title: "Best Gravel in the world!",
    athleteName: "Jacopo 🍊 D.",
    distance: {
      value: 49,
      rank: 105,
    },
    elapsedTime: {
      value: 356,
      rank: 55,
    },
    elevationGain: {
      value: 5882,
      rank: 94,
    },
  },
  {
    title: 'Soledad "million"',
    athleteName: "Faiz E.",
    distance: {
      value: 58,
      rank: 79,
    },
    elapsedTime: {
      value: 349,
      rank: 58,
    },
    elevationGain: {
      value: 5836,
      rank: 95,
    },
  },
  {
    title: "might go back later",
    athleteName: "Dalton T.",
    distance: {
      value: 42,
      rank: 131,
    },
    elapsedTime: {
      value: 257,
      rank: 116,
    },
    elevationGain: {
      value: 5829,
      rank: 96,
    },
  },
  {
    title: "Soledad Million!!!",
    athleteName: "Sydney S.",
    distance: {
      value: 64,
      rank: 60,
    },
    elapsedTime: {
      value: 323,
      rank: 72,
    },
    elevationGain: {
      value: 5803,
      rank: 97,
    },
  },
  {
    title: "Soledad Equinox Challenge",
    athleteName: "Luca V.",
    distance: {
      value: 48,
      rank: 108,
    },
    elapsedTime: {
      value: 277,
      rank: 110,
    },
    elevationGain: {
      value: 5609,
      rank: 98,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Grace M.",
    distance: {
      value: 39,
      rank: 143,
    },
    elapsedTime: {
      value: 315,
      rank: 86,
    },
    elevationGain: {
      value: 5429,
      rank: 99,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Chao J.",
    distance: {
      value: 46,
      rank: 110,
    },
    elapsedTime: {
      value: 314,
      rank: 88,
    },
    elevationGain: {
      value: 5416,
      rank: 100,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Huang Z.",
    distance: {
      value: 46,
      rank: 111,
    },
    elapsedTime: {
      value: 315,
      rank: 84,
    },
    elevationGain: {
      value: 5412,
      rank: 101,
    },
  },
  {
    title: "Soledad x 7",
    athleteName: "Huang Z.",
    distance: {
      value: 46,
      rank: 112,
    },
    elapsedTime: {
      value: 316,
      rank: 81,
    },
    elevationGain: {
      value: 5388,
      rank: 102,
    },
  },
  {
    title: "Soledad Million Challenge - 7 ups",
    athleteName: "Pengyu Y.",
    distance: {
      value: 46,
      rank: 113,
    },
    elapsedTime: {
      value: 315,
      rank: 85,
    },
    elevationGain: {
      value: 5388,
      rank: 103,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Gang C.",
    distance: {
      value: 46,
      rank: 114,
    },
    elapsedTime: {
      value: 316,
      rank: 82,
    },
    elevationGain: {
      value: 5370,
      rank: 104,
    },
  },
  {
    title: "Mt Soledad x 7",
    athleteName: "Ron F.",
    distance: {
      value: 46,
      rank: 115,
    },
    elapsedTime: {
      value: 254,
      rank: 118,
    },
    elevationGain: {
      value: 5338,
      rank: 105,
    },
  },
  {
    title: "Mt soledad 7",
    athleteName: "yang C.",
    distance: {
      value: 41,
      rank: 135,
    },
    elapsedTime: {
      value: 285,
      rank: 104,
    },
    elevationGain: {
      value: 5314,
      rank: 106,
    },
  },
  {
    title: "MAAP Equinox: 1 MILLION collective ft climbing challenge.",
    athleteName: "Travis J.",
    distance: {
      value: 38,
      rank: 146,
    },
    elapsedTime: {
      value: 206,
      rank: 143,
    },
    elevationGain: {
      value: 5222,
      rank: 107,
    },
  },
  {
    title: "Soledad Million",
    athleteName: "Robert P.",
    distance: {
      value: 43,
      rank: 129,
    },
    elapsedTime: {
      value: 255,
      rank: 117,
    },
    elevationGain: {
      value: 5183,
      rank: 108,
    },
  },
  {
    title: "Soledad Million Challenge",
    athleteName: "Ed P.",
    distance: {
      value: 36,
      rank: 154,
    },
    elapsedTime: {
      value: 274,
      rank: 111,
    },
    elevationGain: {
      value: 5176,
      rank: 109,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Matthew G.",
    distance: {
      value: 39,
      rank: 144,
    },
    elapsedTime: {
      value: 212,
      rank: 139,
    },
    elevationGain: {
      value: 5176,
      rank: 110,
    },
  },
  {
    title: "7 Soledaddies",
    athleteName: "Jack L.",
    distance: {
      value: 45,
      rank: 122,
    },
    elapsedTime: {
      value: 190,
      rank: 151,
    },
    elevationGain: {
      value: 5176,
      rank: 111,
    },
  },
  {
    title: "Soledad EverQuest with a touch of Torrey Pines",
    athleteName: "Danger M.",
    distance: {
      value: 52,
      rank: 100,
    },
    elapsedTime: {
      value: 303,
      rank: 97,
    },
    elevationGain: {
      value: 5134,
      rank: 112,
    },
  },
  {
    title: "MAAP million and v02 efforts",
    athleteName: "Corey J.",
    distance: {
      value: 34,
      rank: 161,
    },
    elapsedTime: {
      value: 151,
      rank: 171,
    },
    elevationGain: {
      value: 5094,
      rank: 113,
    },
  },
  {
    title: "Soledad Million challenge",
    athleteName: "Carson B.",
    distance: {
      value: 40,
      rank: 140,
    },
    elapsedTime: {
      value: 342,
      rank: 63,
    },
    elevationGain: {
      value: 5060,
      rank: 114,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Pej K.",
    distance: {
      value: 49,
      rank: 106,
    },
    elapsedTime: {
      value: 228,
      rank: 134,
    },
    elevationGain: {
      value: 5042,
      rank: 115,
    },
  },
  {
    title: "Soledad Million ft. Solstice Challenge",
    athleteName: "Chris H.",
    distance: {
      value: 46,
      rank: 116,
    },
    elapsedTime: {
      value: 250,
      rank: 126,
    },
    elevationGain: {
      value: 5035,
      rank: 116,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Gavin G.",
    distance: {
      value: 54,
      rank: 94,
    },
    elapsedTime: {
      value: 248,
      rank: 131,
    },
    elevationGain: {
      value: 4989,
      rank: 117,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Lance H.",
    distance: {
      value: 33,
      rank: 163,
    },
    elapsedTime: {
      value: 172,
      rank: 161,
    },
    elevationGain: {
      value: 4734,
      rank: 118,
    },
  },
  {
    title: "Climbing",
    athleteName: "Jared L.",
    distance: {
      value: 57,
      rank: 83,
    },
    elapsedTime: {
      value: 216,
      rank: 137,
    },
    elevationGain: {
      value: 4683,
      rank: 119,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Thomas S.",
    distance: {
      value: 35,
      rank: 156,
    },
    elapsedTime: {
      value: 166,
      rank: 163,
    },
    elevationGain: {
      value: 4583,
      rank: 120,
    },
  },
  {
    title: "Soledad milli",
    athleteName: "Kyle M.",
    distance: {
      value: 36,
      rank: 155,
    },
    elapsedTime: {
      value: 249,
      rank: 130,
    },
    elevationGain: {
      value: 4510,
      rank: 121,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Casey Foust •.",
    distance: {
      value: 42,
      rank: 132,
    },
    elapsedTime: {
      value: 249,
      rank: 129,
    },
    elevationGain: {
      value: 4507,
      rank: 122,
    },
  },
  {
    title: "I feel like I was just here",
    athleteName: "Neal L.",
    distance: {
      value: 44,
      rank: 127,
    },
    elapsedTime: {
      value: 259,
      rank: 115,
    },
    elevationGain: {
      value: 4504,
      rank: 123,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Humberto G.",
    distance: {
      value: 56,
      rank: 88,
    },
    elapsedTime: {
      value: 324,
      rank: 70,
    },
    elevationGain: {
      value: 4419,
      rank: 124,
    },
  },
  {
    title: "Soledaddy Challenge",
    athleteName: "Ty S.",
    distance: {
      value: 32,
      rank: 165,
    },
    elapsedTime: {
      value: 166,
      rank: 164,
    },
    elevationGain: {
      value: 4392,
      rank: 125,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Micah L.",
    distance: {
      value: 42,
      rank: 133,
    },
    elapsedTime: {
      value: 219,
      rank: 136,
    },
    elevationGain: {
      value: 4391,
      rank: 126,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jason H.",
    distance: {
      value: 31,
      rank: 168,
    },
    elapsedTime: {
      value: 173,
      rank: 160,
    },
    elevationGain: {
      value: 4376,
      rank: 127,
    },
  },
  {
    title: "🦀 Crabber’s Soledad Crawl",
    athleteName: "Dave M.",
    distance: {
      value: 56,
      rank: 89,
    },
    elapsedTime: {
      value: 281,
      rank: 108,
    },
    elevationGain: {
      value: 4350,
      rank: 128,
    },
  },
  {
    title: "Riding the 5 Fingers 🖐️",
    athleteName: "Neil S.",
    distance: {
      value: 61,
      rank: 67,
    },
    elapsedTime: {
      value: 327,
      rank: 65,
    },
    elevationGain: {
      value: 4287,
      rank: 129,
    },
  },
  {
    title: "Soledad million challenge",
    athleteName: "Andrew B.",
    distance: {
      value: 46,
      rank: 117,
    },
    elapsedTime: {
      value: 327,
      rank: 66,
    },
    elevationGain: {
      value: 4271,
      rank: 130,
    },
  },
  {
    title: "Soledad Million Challenge Part II",
    athleteName: "Angela P.",
    distance: {
      value: 29,
      rank: 171,
    },
    elapsedTime: {
      value: 189,
      rank: 152,
    },
    elevationGain: {
      value: 4257,
      rank: 131,
    },
  },
  {
    title:
      "Accidentally paused my Strava for 20 miles but good ride with some of my fav boys",
    athleteName: "Laurel A.",
    distance: {
      value: 60,
      rank: 70,
    },
    elapsedTime: {
      value: 386,
      rank: 43,
    },
    elevationGain: {
      value: 4172,
      rank: 132,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Luke C.",
    distance: {
      value: 39,
      rank: 145,
    },
    elapsedTime: {
      value: 279,
      rank: 109,
    },
    elevationGain: {
      value: 4146,
      rank: 133,
    },
  },
  {
    title: "Soledad Loop",
    athleteName: "Patrick R.",
    distance: {
      value: 45,
      rank: 123,
    },
    elapsedTime: {
      value: 263,
      rank: 114,
    },
    elevationGain: {
      value: 4081,
      rank: 134,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Dima D.",
    distance: {
      value: 62,
      rank: 64,
    },
    elapsedTime: {
      value: 245,
      rank: 132,
    },
    elevationGain: {
      value: 4081,
      rank: 135,
    },
  },
  {
    title: "Hill Climb Revenge",
    athleteName: "Collin B.",
    distance: {
      value: 37,
      rank: 151,
    },
    elapsedTime: {
      value: 250,
      rank: 127,
    },
    elevationGain: {
      value: 4068,
      rank: 136,
    },
  },
  {
    title: "Soledad Murder Fest 🤪",
    athleteName: "Katie G.",
    distance: {
      value: 46,
      rank: 118,
    },
    elapsedTime: {
      value: 327,
      rank: 67,
    },
    elevationGain: {
      value: 4022,
      rank: 137,
    },
  },
  {
    title: "I’m tired today.",
    athleteName: "Jaime A.",
    distance: {
      value: 28,
      rank: 177,
    },
    elapsedTime: {
      value: 149,
      rank: 174,
    },
    elevationGain: {
      value: 4002,
      rank: 138,
    },
  },
  {
    title: "09/22/24:  MSUB Sunday + Mt. Soledad Million Challenge",
    athleteName: "Jim P.",
    distance: {
      value: 64,
      rank: 61,
    },
    elapsedTime: {
      value: 371,
      rank: 49,
    },
    elevationGain: {
      value: 3968,
      rank: 139,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Sara C.",
    distance: {
      value: 57,
      rank: 84,
    },
    elapsedTime: {
      value: 318,
      rank: 80,
    },
    elevationGain: {
      value: 3965,
      rank: 140,
    },
  },
  {
    title:
      "I’m doing my part! I’m doing my part! I’m doing my part! I DIDN'T DO SHIT!!",
    athleteName: "Andy B.",
    distance: {
      value: 82,
      rank: 28,
    },
    elapsedTime: {
      value: 305,
      rank: 94,
    },
    elevationGain: {
      value: 3924,
      rank: 141,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Robin R.",
    distance: {
      value: 27,
      rank: 180,
    },
    elapsedTime: {
      value: 135,
      rank: 180,
    },
    elevationGain: {
      value: 3881,
      rank: 142,
    },
  },
  {
    title: "Euro af",
    athleteName: "Max B.",
    distance: {
      value: 37,
      rank: 152,
    },
    elapsedTime: {
      value: 251,
      rank: 123,
    },
    elevationGain: {
      value: 3860,
      rank: 143,
    },
  },
  {
    title: "Soledadding (5 ways)",
    athleteName: "Jason B.",
    distance: {
      value: 28,
      rank: 178,
    },
    elapsedTime: {
      value: 153,
      rank: 168,
    },
    elevationGain: {
      value: 3835,
      rank: 144,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "sully N.",
    distance: {
      value: 29,
      rank: 172,
    },
    elapsedTime: {
      value: 129,
      rank: 188,
    },
    elevationGain: {
      value: 3832,
      rank: 145,
    },
  },
  {
    title: "Mont Soledad 🤙🥳",
    athleteName: "Oscar M.",
    distance: {
      value: 32,
      rank: 166,
    },
    elapsedTime: {
      value: 150,
      rank: 173,
    },
    elevationGain: {
      value: 3480,
      rank: 146,
    },
  },
  {
    title: "soledaddy",
    athleteName: "Laurel A.",
    distance: {
      value: 26,
      rank: 184,
    },
    elapsedTime: {
      value: 125,
      rank: 190,
    },
    elevationGain: {
      value: 3451,
      rank: 147,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jonathan M.",
    distance: {
      value: 26,
      rank: 185,
    },
    elapsedTime: {
      value: 132,
      rank: 185,
    },
    elevationGain: {
      value: 3415,
      rank: 148,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Matthew S.",
    distance: {
      value: 23,
      rank: 193,
    },
    elapsedTime: {
      value: 134,
      rank: 182,
    },
    elevationGain: {
      value: 3389,
      rank: 149,
    },
  },
  {
    title: "Little stroll",
    athleteName: "Barry L.",
    distance: {
      value: 38,
      rank: 147,
    },
    elapsedTime: {
      value: 230,
      rank: 133,
    },
    elevationGain: {
      value: 3382,
      rank: 150,
    },
  },
  {
    title: "Just when you think the day is going to be good! 😡🤬",
    athleteName: "DeShawn M.",
    distance: {
      value: 29,
      rank: 173,
    },
    elapsedTime: {
      value: 151,
      rank: 172,
    },
    elevationGain: {
      value: 3372,
      rank: 151,
    },
  },
  {
    title: "Soledad Million Challenge Part I",
    athleteName: "Angela P.",
    distance: {
      value: 23,
      rank: 194,
    },
    elapsedTime: {
      value: 138,
      rank: 177,
    },
    elevationGain: {
      value: 3290,
      rank: 152,
    },
  },
  {
    title: "Evening Ride",
    athleteName: "Danny H.",
    distance: {
      value: 66,
      rank: 54,
    },
    elapsedTime: {
      value: 321,
      rank: 76,
    },
    elevationGain: {
      value: 3266,
      rank: 153,
    },
  },
  {
    title: "S U N D A Y 🦎",
    athleteName: "Yovanny L.",
    distance: {
      value: 52,
      rank: 101,
    },
    elapsedTime: {
      value: 210,
      rank: 142,
    },
    elevationGain: {
      value: 3176,
      rank: 154,
    },
  },
  {
    title: "MAAP Equinox Mt Soledad ride.",
    athleteName: "Pizza T.",
    distance: {
      value: 35,
      rank: 157,
    },
    elapsedTime: {
      value: 203,
      rank: 144,
    },
    elevationGain: {
      value: 3107,
      rank: 155,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Orthja E.",
    distance: {
      value: 29,
      rank: 174,
    },
    elapsedTime: {
      value: 121,
      rank: 194,
    },
    elevationGain: {
      value: 3084,
      rank: 156,
    },
  },
  {
    title: "Soledadding 2 (with Parker)",
    athleteName: "Jason B.",
    distance: {
      value: 22,
      rank: 198,
    },
    elapsedTime: {
      value: 134,
      rank: 183,
    },
    elevationGain: {
      value: 3054,
      rank: 157,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Parker B.",
    distance: {
      value: 22,
      rank: 199,
    },
    elapsedTime: {
      value: 136,
      rank: 179,
    },
    elevationGain: {
      value: 3014,
      rank: 158,
    },
  },
  {
    title: "Gimme my water bottle!  MAAP climbing challenge",
    athleteName: "Teriyaki G.",
    distance: {
      value: 30,
      rank: 169,
    },
    elapsedTime: {
      value: 154,
      rank: 167,
    },
    elevationGain: {
      value: 2992,
      rank: 159,
    },
  },
  {
    title: "$oledad Million Feet Challenge",
    athleteName: "Timothy S.",
    distance: {
      value: 24,
      rank: 191,
    },
    elapsedTime: {
      value: 108,
      rank: 204,
    },
    elevationGain: {
      value: 2966,
      rank: 160,
    },
  },
  {
    title: "Hi. Bye.",
    athleteName: "Mauria N.",
    distance: {
      value: 35,
      rank: 158,
    },
    elapsedTime: {
      value: 185,
      rank: 154,
    },
    elevationGain: {
      value: 2805,
      rank: 161,
    },
  },
  {
    title: "MAAP million ft challenge",
    athleteName: "ali O.",
    distance: {
      value: 41,
      rank: 136,
    },
    elapsedTime: {
      value: 188,
      rank: 153,
    },
    elevationGain: {
      value: 2777,
      rank: 162,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Melissa K.",
    distance: {
      value: 43,
      rank: 130,
    },
    elapsedTime: {
      value: 306,
      rank: 93,
    },
    elevationGain: {
      value: 2762,
      rank: 163,
    },
  },
  {
    title: "The Ride that ended MC 2024",
    athleteName: "Quoc V.",
    distance: {
      value: 22,
      rank: 200,
    },
    elapsedTime: {
      value: 168,
      rank: 162,
    },
    elevationGain: {
      value: 2565,
      rank: 164,
    },
  },
  {
    title: "It’s still September; at least Santa is not up yet.",
    athleteName: "Mark M.",
    distance: {
      value: 20,
      rank: 204,
    },
    elapsedTime: {
      value: 115,
      rank: 199,
    },
    elevationGain: {
      value: 2546,
      rank: 165,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Luke C.",
    distance: {
      value: 16,
      rank: 212,
    },
    elapsedTime: {
      value: 96,
      rank: 211,
    },
    elevationGain: {
      value: 2510,
      rank: 166,
    },
  },
  {
    title: "Mount Soledad Strava climbing challenge",
    athleteName: "Fermin Robles S.",
    distance: {
      value: 16,
      rank: 213,
    },
    elapsedTime: {
      value: 79,
      rank: 222,
    },
    elevationGain: {
      value: 2411,
      rank: 167,
    },
  },
  {
    title: "Unknowingly became part of the Soledad Challenge!",
    athleteName: "Michael Y.",
    distance: {
      value: 32,
      rank: 167,
    },
    elapsedTime: {
      value: 121,
      rank: 193,
    },
    elevationGain: {
      value: 2369,
      rank: 168,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Zackery S.",
    distance: {
      value: 37,
      rank: 153,
    },
    elapsedTime: {
      value: 181,
      rank: 155,
    },
    elevationGain: {
      value: 2352,
      rank: 169,
    },
  },
  {
    title: "Oofff 😴 😴",
    athleteName: "Max S.",
    distance: {
      value: 40,
      rank: 141,
    },
    elapsedTime: {
      value: 174,
      rank: 158,
    },
    elevationGain: {
      value: 2290,
      rank: 170,
    },
  },
  {
    title: "Soledad million feet challenge",
    athleteName: "Thomas H.",
    distance: {
      value: 19,
      rank: 208,
    },
    elapsedTime: {
      value: 113,
      rank: 203,
    },
    elevationGain: {
      value: 2280,
      rank: 171,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Brandon T.",
    distance: {
      value: 41,
      rank: 137,
    },
    elapsedTime: {
      value: 162,
      rank: 165,
    },
    elevationGain: {
      value: 2264,
      rank: 172,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Tony L.",
    distance: {
      value: 19,
      rank: 209,
    },
    elapsedTime: {
      value: 90,
      rank: 214,
    },
    elevationGain: {
      value: 2264,
      rank: 173,
    },
  },
  {
    title: "Soledad, one and done",
    athleteName: "Todd S.",
    distance: {
      value: 28,
      rank: 179,
    },
    elapsedTime: {
      value: 118,
      rank: 197,
    },
    elevationGain: {
      value: 2244,
      rank: 174,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Dan C.",
    distance: {
      value: 34,
      rank: 162,
    },
    elapsedTime: {
      value: 144,
      rank: 175,
    },
    elevationGain: {
      value: 2237,
      rank: 175,
    },
  },
  {
    title: "Great ride with rad group up Soledad!",
    athleteName: "Alek B.",
    distance: {
      value: 73,
      rank: 39,
    },
    elapsedTime: {
      value: 346,
      rank: 59,
    },
    elevationGain: {
      value: 2208,
      rank: 176,
    },
  },
  {
    title: "Soledad Million Contribution...",
    athleteName: "Tom A.",
    distance: {
      value: 30,
      rank: 170,
    },
    elapsedTime: {
      value: 118,
      rank: 196,
    },
    elevationGain: {
      value: 2182,
      rank: 177,
    },
  },
  {
    title: "52x Soledad Cross BABYYYYYY",
    athleteName: "Henry E.",
    distance: {
      value: 23,
      rank: 195,
    },
    elapsedTime: {
      value: 123,
      rank: 192,
    },
    elevationGain: {
      value: 2139,
      rank: 178,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Paxton R.",
    distance: {
      value: 24,
      rank: 192,
    },
    elapsedTime: {
      value: 108,
      rank: 205,
    },
    elevationGain: {
      value: 2034,
      rank: 179,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Ryan L.",
    distance: {
      value: 57,
      rank: 85,
    },
    elapsedTime: {
      value: 202,
      rank: 145,
    },
    elevationGain: {
      value: 1995,
      rank: 180,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Christian R.",
    distance: {
      value: 41,
      rank: 138,
    },
    elapsedTime: {
      value: 195,
      rank: 148,
    },
    elevationGain: {
      value: 1978,
      rank: 181,
    },
  },
  {
    title: "Fear Is The Mind-Killer.",
    athleteName: "colin F.",
    distance: {
      value: 12,
      rank: 221,
    },
    elapsedTime: {
      value: 115,
      rank: 200,
    },
    elevationGain: {
      value: 1972,
      rank: 182,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Lance H.",
    distance: {
      value: 33,
      rank: 164,
    },
    elapsedTime: {
      value: 127,
      rank: 189,
    },
    elevationGain: {
      value: 1932,
      rank: 183,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Stephen H.",
    distance: {
      value: 38,
      rank: 148,
    },
    elapsedTime: {
      value: 178,
      rank: 156,
    },
    elevationGain: {
      value: 1873,
      rank: 184,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Graham D.",
    distance: {
      value: 61,
      rank: 68,
    },
    elapsedTime: {
      value: 322,
      rank: 74,
    },
    elevationGain: {
      value: 1827,
      rank: 185,
    },
  },
  {
    title: "Mt Soledad Million Challenge - 2 laps",
    athleteName: "Carlin T.",
    distance: {
      value: 20,
      rank: 205,
    },
    elapsedTime: {
      value: 119,
      rank: 195,
    },
    elevationGain: {
      value: 1821,
      rank: 186,
    },
  },
  {
    title: "Recovery 637",
    athleteName: "Arturo T.",
    distance: {
      value: 15,
      rank: 216,
    },
    elapsedTime: {
      value: 101,
      rank: 209,
    },
    elevationGain: {
      value: 1818,
      rank: 187,
    },
  },
  {
    title: "Big tires 🤌🏻",
    athleteName: "Efran T.",
    distance: {
      value: 25,
      rank: 187,
    },
    elapsedTime: {
      value: 113,
      rank: 202,
    },
    elevationGain: {
      value: 1785,
      rank: 188,
    },
  },
  {
    title: "Soledad challege ride",
    athleteName: "John S.",
    distance: {
      value: 27,
      rank: 181,
    },
    elapsedTime: {
      value: 152,
      rank: 170,
    },
    elevationGain: {
      value: 1762,
      rank: 189,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jack G.",
    distance: {
      value: 15,
      rank: 217,
    },
    elapsedTime: {
      value: 92,
      rank: 213,
    },
    elevationGain: {
      value: 1752,
      rank: 190,
    },
  },
  {
    title: "Chill Sunday ride with Burlingang",
    athleteName: "Andy H.",
    distance: {
      value: 38,
      rank: 149,
    },
    elapsedTime: {
      value: 196,
      rank: 147,
    },
    elevationGain: {
      value: 1745,
      rank: 191,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Nicholas  H.",
    distance: {
      value: 23,
      rank: 196,
    },
    elapsedTime: {
      value: 153,
      rank: 169,
    },
    elevationGain: {
      value: 1745,
      rank: 192,
    },
  },
  {
    title: "Equinox",
    athleteName: "Elias E.",
    distance: {
      value: 35,
      rank: 159,
    },
    elapsedTime: {
      value: 130,
      rank: 186,
    },
    elevationGain: {
      value: 1742,
      rank: 193,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Kiefer G.",
    distance: {
      value: 16,
      rank: 214,
    },
    elapsedTime: {
      value: 89,
      rank: 216,
    },
    elevationGain: {
      value: 1709,
      rank: 194,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Thomas S.",
    distance: {
      value: 45,
      rank: 124,
    },
    elapsedTime: {
      value: 202,
      rank: 146,
    },
    elevationGain: {
      value: 1680,
      rank: 195,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Ulises G.",
    distance: {
      value: 25,
      rank: 188,
    },
    elapsedTime: {
      value: 143,
      rank: 176,
    },
    elevationGain: {
      value: 1667,
      rank: 196,
    },
  },
  {
    title: "Virtual climbing, but not on a trainer and also outdoors",
    athleteName: "Bryan W.",
    distance: {
      value: 12,
      rank: 222,
    },
    elapsedTime: {
      value: 60,
      rank: 228,
    },
    elevationGain: {
      value: 1620,
      rank: 197,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Gerald G.",
    distance: {
      value: 46,
      rank: 119,
    },
    elapsedTime: {
      value: 211,
      rank: 140,
    },
    elevationGain: {
      value: 1598,
      rank: 198,
    },
  },
  {
    title: "1.5 Hours Z2",
    athleteName: "Josh P.",
    distance: {
      value: 25,
      rank: 189,
    },
    elapsedTime: {
      value: 114,
      rank: 201,
    },
    elevationGain: {
      value: 1588,
      rank: 199,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Ethan S.",
    distance: {
      value: 14,
      rank: 218,
    },
    elapsedTime: {
      value: 77,
      rank: 223,
    },
    elevationGain: {
      value: 1576,
      rank: 200,
    },
  },
  {
    title: "Swami's LSD - short ☁️",
    athleteName: "Fredy Z.",
    distance: {
      value: 38,
      rank: 150,
    },
    elapsedTime: {
      value: 174,
      rank: 159,
    },
    elevationGain: {
      value: 1516,
      rank: 201,
    },
  },
  {
    title: "Fortuna + some olivenhain dirt with Hannah",
    athleteName: "Andrew A.",
    distance: {
      value: 16,
      rank: 215,
    },
    elapsedTime: {
      value: 90,
      rank: 215,
    },
    elevationGain: {
      value: 1476,
      rank: 202,
    },
  },
  {
    title: "Reminder ride: features",
    athleteName: "Ja G.",
    distance: {
      value: 8,
      rank: 239,
    },
    elapsedTime: {
      value: 137,
      rank: 178,
    },
    elevationGain: {
      value: 1459,
      rank: 203,
    },
  },
  {
    title: "Soledad 1m pt 2",
    athleteName: "Vlad P.",
    distance: {
      value: 11,
      rank: 225,
    },
    elapsedTime: {
      value: 67,
      rank: 225,
    },
    elevationGain: {
      value: 1427,
      rank: 204,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Lucas L.",
    distance: {
      value: 21,
      rank: 202,
    },
    elapsedTime: {
      value: 216,
      rank: 138,
    },
    elevationGain: {
      value: 1391,
      rank: 205,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jimmy O.",
    distance: {
      value: 29,
      rank: 175,
    },
    elapsedTime: {
      value: 123,
      rank: 191,
    },
    elevationGain: {
      value: 1339,
      rank: 206,
    },
  },
  {
    title: "Coffee Cycle Elevation Ride",
    athleteName: "Maureen F.",
    distance: {
      value: 10,
      rank: 232,
    },
    elapsedTime: {
      value: 60,
      rank: 230,
    },
    elevationGain: {
      value: 1303,
      rank: 207,
    },
  },
  {
    title: "Morning Mountain Bike Ride",
    athleteName: "Ken F.",
    distance: {
      value: 10,
      rank: 233,
    },
    elapsedTime: {
      value: 107,
      rank: 206,
    },
    elevationGain: {
      value: 1250,
      rank: 208,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Steve M.",
    distance: {
      value: 11,
      rank: 226,
    },
    elapsedTime: {
      value: 116,
      rank: 198,
    },
    elevationGain: {
      value: 1231,
      rank: 209,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Jack G.",
    distance: {
      value: 20,
      rank: 206,
    },
    elapsedTime: {
      value: 92,
      rank: 212,
    },
    elevationGain: {
      value: 1178,
      rank: 210,
    },
  },
  {
    title: "Million foot challenge",
    athleteName: "Tommy O.",
    distance: {
      value: 10,
      rank: 234,
    },
    elapsedTime: {
      value: 48,
      rank: 235,
    },
    elevationGain: {
      value: 1116,
      rank: 211,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Andrew M.",
    distance: {
      value: 27,
      rank: 182,
    },
    elapsedTime: {
      value: 134,
      rank: 181,
    },
    elevationGain: {
      value: 1093,
      rank: 212,
    },
  },
  {
    title:
      "Was it the last day of Summer or the first day of Winter? I'm confused... 🥶",
    athleteName: "Timothy S.",
    distance: {
      value: 25,
      rank: 190,
    },
    elapsedTime: {
      value: 79,
      rank: 221,
    },
    elevationGain: {
      value: 1040,
      rank: 213,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Henry T.",
    distance: {
      value: 7,
      rank: 241,
    },
    elapsedTime: {
      value: 50,
      rank: 233,
    },
    elevationGain: {
      value: 1025,
      rank: 214,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Eddie G.",
    distance: {
      value: 57,
      rank: 86,
    },
    elapsedTime: {
      value: 251,
      rank: 121,
    },
    elevationGain: {
      value: 1004,
      rank: 215,
    },
  },
  {
    title: "Soledad 1m pt 1",
    athleteName: "Vlad P.",
    distance: {
      value: 11,
      rank: 227,
    },
    elapsedTime: {
      value: 47,
      rank: 236,
    },
    elevationGain: {
      value: 843,
      rank: 216,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Danny Y.",
    distance: {
      value: 11,
      rank: 228,
    },
    elapsedTime: {
      value: 49,
      rank: 234,
    },
    elevationGain: {
      value: 840,
      rank: 217,
    },
  },
  {
    title: "Mellow Sunday in PQ",
    athleteName: "Mark Y.",
    distance: {
      value: 17,
      rank: 210,
    },
    elapsedTime: {
      value: 130,
      rank: 187,
    },
    elevationGain: {
      value: 811,
      rank: 218,
    },
  },
  {
    title: "To and from",
    athleteName: "Nedla R.",
    distance: {
      value: 17,
      rank: 211,
    },
    elapsedTime: {
      value: 500,
      rank: 28,
    },
    elevationGain: {
      value: 799,
      rank: 219,
    },
  },
  {
    title: "Local practice",
    athleteName: "Michael R.",
    distance: {
      value: 11,
      rank: 229,
    },
    elapsedTime: {
      value: 42,
      rank: 238,
    },
    elevationGain: {
      value: 758,
      rank: 220,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Se R.",
    distance: {
      value: 13,
      rank: 219,
    },
    elapsedTime: {
      value: 54,
      rank: 231,
    },
    elevationGain: {
      value: 738,
      rank: 221,
    },
  },
  {
    title: "Soledad “PR”",
    athleteName: "Ryan C.",
    distance: {
      value: 7,
      rank: 242,
    },
    elapsedTime: {
      value: 66,
      rank: 226,
    },
    elevationGain: {
      value: 732,
      rank: 222,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Se R.",
    distance: {
      value: 13,
      rank: 220,
    },
    elapsedTime: {
      value: 54,
      rank: 232,
    },
    elevationGain: {
      value: 722,
      rank: 223,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Barbara S.",
    distance: {
      value: 20,
      rank: 207,
    },
    elapsedTime: {
      value: 82,
      rank: 220,
    },
    elevationGain: {
      value: 673,
      rank: 224,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Andrew Monzon *.",
    distance: {
      value: 41,
      rank: 139,
    },
    elapsedTime: {
      value: 133,
      rank: 184,
    },
    elevationGain: {
      value: 660,
      rank: 225,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Peter I.",
    distance: {
      value: 42,
      rank: 134,
    },
    elapsedTime: {
      value: 160,
      rank: 166,
    },
    elevationGain: {
      value: 634,
      rank: 226,
    },
  },
  {
    title: "Friars rd",
    athleteName: "Mac M.",
    distance: {
      value: 22,
      rank: 201,
    },
    elapsedTime: {
      value: 100,
      rank: 210,
    },
    elevationGain: {
      value: 562,
      rank: 227,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Luke L.",
    distance: {
      value: 7,
      rank: 243,
    },
    elapsedTime: {
      value: 32,
      rank: 243,
    },
    elevationGain: {
      value: 529,
      rank: 228,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Jonathan C.",
    distance: {
      value: 26,
      rank: 186,
    },
    elapsedTime: {
      value: 102,
      rank: 208,
    },
    elevationGain: {
      value: 519,
      rank: 229,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "AJ I.",
    distance: {
      value: 29,
      rank: 176,
    },
    elapsedTime: {
      value: 85,
      rank: 218,
    },
    elevationGain: {
      value: 473,
      rank: 230,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "quiet S.",
    distance: {
      value: 10,
      rank: 235,
    },
    elapsedTime: {
      value: 38,
      rank: 240,
    },
    elevationGain: {
      value: 437,
      rank: 231,
    },
  },
  {
    title: "Wahoo died…least it got the good part of the ride",
    athleteName: "Grace M.",
    distance: {
      value: 11,
      rank: 230,
    },
    elapsedTime: {
      value: 106,
      rank: 207,
    },
    elevationGain: {
      value: 431,
      rank: 232,
    },
  },
  {
    title: "Happy Birthday 🎉",
    athleteName: "Soup",
    distance: {
      value: 27,
      rank: 183,
    },
    elapsedTime: {
      value: 69,
      rank: 224,
    },
    elevationGain: {
      value: 420,
      rank: 233,
    },
    url: "https://www.youtube.com/watch?v=KQLPL1qRhn8",
  },
  {
    title: "Night ride through the gauntlet.",
    athleteName: "Robby “Ridetime” H.",
    distance: {
      value: 23,
      rank: 197,
    },
    elapsedTime: {
      value: 178,
      rank: 157,
    },
    elevationGain: {
      value: 404,
      rank: 234,
    },
  },
  {
    title: "Lunch Ride",
    athleteName: "Benji Bockting L.",
    distance: {
      value: 9,
      rank: 237,
    },
    elapsedTime: {
      value: 46,
      rank: 237,
    },
    elevationGain: {
      value: 401,
      rank: 235,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Dan C.",
    distance: {
      value: 5,
      rank: 248,
    },
    elapsedTime: {
      value: 37,
      rank: 241,
    },
    elevationGain: {
      value: 368,
      rank: 236,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Andrew Monzon *.",
    distance: {
      value: 6,
      rank: 244,
    },
    elapsedTime: {
      value: 23,
      rank: 251,
    },
    elevationGain: {
      value: 345,
      rank: 237,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jonathan M.",
    distance: {
      value: 4,
      rank: 252,
    },
    elapsedTime: {
      value: 16,
      rank: 253,
    },
    elevationGain: {
      value: 322,
      rank: 238,
    },
  },
  {
    title: "de_bike_shop",
    athleteName: "SDSU Victor C.",
    distance: {
      value: 12,
      rank: 223,
    },
    elapsedTime: {
      value: 65,
      rank: 227,
    },
    elevationGain: {
      value: 319,
      rank: 239,
    },
  },
  {
    title: "Evening Ride",
    athleteName: "Rudy B.",
    distance: {
      value: 6,
      rank: 245,
    },
    elapsedTime: {
      value: 26,
      rank: 248,
    },
    elevationGain: {
      value: 296,
      rank: 240,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Everett W.",
    distance: {
      value: 35,
      rank: 160,
    },
    elapsedTime: {
      value: 195,
      rank: 149,
    },
    elevationGain: {
      value: 224,
      rank: 241,
    },
  },
  {
    title:
      "Bottle Support was lacking from both Team Car and Neutral Support this am",
    athleteName: "Bob B.",
    distance: {
      value: 21,
      rank: 203,
    },
    elapsedTime: {
      value: 88,
      rank: 217,
    },
    elevationGain: {
      value: 210,
      rank: 242,
    },
  },
  {
    title: "Just a couple of fairies touring the fairy village",
    athleteName: "Lauren S.",
    distance: {
      value: 10,
      rank: 236,
    },
    elapsedTime: {
      value: 84,
      rank: 219,
    },
    elevationGain: {
      value: 168,
      rank: 243,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Jordan K.",
    distance: {
      value: 5,
      rank: 249,
    },
    elapsedTime: {
      value: 25,
      rank: 249,
    },
    elevationGain: {
      value: 160,
      rank: 244,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Ryan B.",
    distance: {
      value: 6,
      rank: 246,
    },
    elapsedTime: {
      value: 29,
      rank: 244,
    },
    elevationGain: {
      value: 155,
      rank: 245,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "𝓢𝓽𝓪𝓰𝓮 2 𝓒𝔂𝓬𝓵𝓮𝓻𝔂 𝓜.",
    distance: {
      value: 11,
      rank: 231,
    },
    elapsedTime: {
      value: 38,
      rank: 239,
    },
    elevationGain: {
      value: 151,
      rank: 246,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Luke L.",
    distance: {
      value: 3,
      rank: 254,
    },
    elapsedTime: {
      value: 11,
      rank: 254,
    },
    elevationGain: {
      value: 138,
      rank: 247,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Zixuan(Paris) W.",
    distance: {
      value: 5,
      rank: 250,
    },
    elapsedTime: {
      value: 22,
      rank: 252,
    },
    elevationGain: {
      value: 125,
      rank: 248,
    },
  },
  {
    title: "Tandem Ride",
    athleteName: "Nick G.",
    distance: {
      value: 12,
      rank: 224,
    },
    elapsedTime: {
      value: 60,
      rank: 229,
    },
    elevationGain: {
      value: 122,
      rank: 249,
    },
  },
  {
    title: "Evening Ride",
    athleteName: "Jordan K.",
    distance: {
      value: 9,
      rank: 238,
    },
    elapsedTime: {
      value: 36,
      rank: 242,
    },
    elevationGain: {
      value: 111,
      rank: 250,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "quiet S.",
    distance: {
      value: 8,
      rank: 240,
    },
    elapsedTime: {
      value: 27,
      rank: 247,
    },
    elevationGain: {
      value: 89,
      rank: 251,
    },
  },
  {
    title: "Evening Mountain Bike Ride",
    athleteName: "Robby “Ridetime” H.",
    distance: {
      value: 5,
      rank: 251,
    },
    elapsedTime: {
      value: 28,
      rank: 246,
    },
    elevationGain: {
      value: 67,
      rank: 252,
    },
  },
  {
    title: "Morning Ride",
    athleteName: "Jonathan M.",
    distance: {
      value: 4,
      rank: 253,
    },
    elapsedTime: {
      value: 24,
      rank: 250,
    },
    elevationGain: {
      value: 53,
      rank: 253,
    },
  },
  {
    title: "Doing My Part",
    athleteName: "Cooper M.",
    distance: {
      value: 1,
      rank: 255,
    },
    elapsedTime: {
      value: 3,
      rank: 257,
    },
    elevationGain: {
      value: 53,
      rank: 254,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Jordan K.",
    distance: {
      value: 6,
      rank: 247,
    },
    elapsedTime: {
      value: 28,
      rank: 245,
    },
    elevationGain: {
      value: 44,
      rank: 255,
    },
  },
  {
    title: "I’m doing my part",
    athleteName: "James L.",
    distance: {
      value: 1,
      rank: 256,
    },
    elapsedTime: {
      value: 5,
      rank: 256,
    },
    elevationGain: {
      value: 44,
      rank: 256,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Rob R.",
    distance: {
      value: 1,
      rank: 257,
    },
    elapsedTime: {
      value: 2,
      rank: 258,
    },
    elevationGain: {
      value: 40,
      rank: 257,
    },
  },
  {
    title: "Afternoon Ride",
    athleteName: "Tommy O.",
    distance: {
      value: 1,
      rank: 258,
    },
    elapsedTime: {
      value: 6,
      rank: 255,
    },
    elevationGain: {
      value: 17,
      rank: 258,
    },
  },
];
