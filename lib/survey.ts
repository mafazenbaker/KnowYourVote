import type { Phase, Issue, ValueAxis } from "./types";

// ---------------------------------------------------------------------------
// US states
// ---------------------------------------------------------------------------
export const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
];

// ---------------------------------------------------------------------------
// Value axes (Core Values) — plain, everyday framing, -2..+2
// ---------------------------------------------------------------------------
export const VALUE_AXES: ValueAxis[] = [
  {
    id: "v_govrole",
    text: "How much should the government do?",
    leftLabel: "Less — it should mostly stay out of people's lives",
    rightLabel: "More — it should actively help solve problems",
  },
  {
    id: "v_freedom",
    text: "When these two pull against each other, which matters more to you?",
    leftLabel: "People being free to make their own choices",
    rightLabel: "People looking out for one another",
  },
  {
    id: "v_environment",
    text: "Which do you lean toward?",
    leftLabel: "Keeping jobs and prices in check",
    rightLabel: "Protecting nature and the environment",
  },
  {
    id: "v_faith",
    text: "How much should religion guide the laws we make?",
    leftLabel: "Not much — keep religion and government separate",
    rightLabel: "A lot — religion should help guide our laws",
  },
  {
    id: "v_change",
    text: "In general, do you prefer…",
    leftLabel: "Keeping things the way they are",
    rightLabel: "Changing things and trying new ideas",
  },
];

// ---------------------------------------------------------------------------
// Non-branching phases (context — not scored directly, used for personalization)
// ---------------------------------------------------------------------------
export const BACKGROUND_PHASE: Phase = {
  id: "background",
  title: "A little about you",
  subtitle:
    "This just helps us explain your results. Nothing you enter is sent anywhere — it all stays on your device.",
  questions: [
    {
      id: "age",
      text: "How old are you?",
      type: "single",
      choices: [
        { id: "18-29", label: "18–29" },
        { id: "30-44", label: "30–44" },
        { id: "45-64", label: "45–64" },
        { id: "65+", label: "65 or older" },
      ],
    },
    {
      id: "education",
      text: "How far did you go in school?",
      type: "single",
      choices: [
        { id: "hs", label: "High school or less" },
        { id: "some", label: "Some college, or a trade/associate program" },
        { id: "ba", label: "College degree" },
        { id: "grad", label: "Graduate or professional degree" },
      ],
    },
    {
      id: "ethnicity",
      text: "What is your race or ethnic background?",
      help: "You can skip this. It can affect which issues matter most to people.",
      type: "single",
      optional: true,
      choices: [
        { id: "white", label: "White" },
        { id: "black", label: "Black or African American" },
        { id: "hispanic", label: "Hispanic or Latino" },
        { id: "asian", label: "Asian or Pacific Islander" },
        { id: "native", label: "Native American or Indigenous" },
        { id: "multi", label: "Two or more, or something else" },
        { id: "skip", label: "Prefer not to say" },
      ],
    },
    {
      id: "military",
      text: "Are you or a close family member in the military, or a veteran?",
      type: "single",
      choices: [
        { id: "self", label: "Yes — I serve or have served" },
        { id: "family", label: "Yes — a close family member" },
        { id: "no", label: "No" },
      ],
    },
    {
      id: "dependents",
      text: "Are you taking care of children or others who depend on you?",
      type: "single",
      choices: [
        { id: "kids", label: "Yes — children" },
        { id: "other", label: "Yes — others (like aging parents)" },
        { id: "no", label: "No" },
      ],
    },
    {
      id: "housing",
      text: "Do you own or rent your home?",
      type: "single",
      choices: [
        { id: "own", label: "I own it" },
        { id: "rent", label: "I rent" },
        { id: "other", label: "Something else" },
      ],
    },
  ],
};

export const ECONOMIC_PHASE: Phase = {
  id: "economic",
  title: "Your money situation",
  subtitle: "Your everyday finances often shape which policies would help you most.",
  questions: [
    {
      id: "income",
      text: "About how much does your household make in a year?",
      type: "single",
      choices: [
        { id: "u30", label: "Under $30,000" },
        { id: "30-60", label: "$30,000 – $60,000" },
        { id: "60-100", label: "$60,000 – $100,000" },
        { id: "100-200", label: "$100,000 – $200,000" },
        { id: "200+", label: "Over $200,000" },
      ],
    },
    {
      id: "employment",
      text: "Which best describes your work right now?",
      type: "single",
      choices: [
        { id: "employed", label: "Working for an employer" },
        { id: "self", label: "Working for myself" },
        { id: "unemployed", label: "Not working, looking for a job" },
        { id: "retired", label: "Retired" },
        { id: "student", label: "Student" },
      ],
    },
    {
      id: "industry",
      text: "What kind of work is closest to yours?",
      type: "single",
      optional: true,
      choices: [
        { id: "health", label: "Health care" },
        { id: "tech", label: "Technology" },
        { id: "trades", label: "Trades, factory, or construction" },
        { id: "service", label: "Service, retail, or restaurants" },
        { id: "public", label: "Government, schools, or nonprofits" },
        { id: "finance", label: "Finance or office/professional work" },
        { id: "ag", label: "Farming or energy" },
        { id: "other", label: "Something else / not working" },
      ],
    },
    {
      id: "debt",
      text: "Do you owe a lot of money on any of these?",
      help: "Pick any that apply.",
      type: "multi",
      optional: true,
      choices: [
        { id: "student", label: "Student loans" },
        { id: "medical", label: "Medical bills" },
        { id: "credit", label: "Credit cards or other debt" },
        { id: "none", label: "None that's a big deal" },
      ],
    },
    {
      id: "benefits",
      text: "Do you count on any government help?",
      help: "Pick any that apply.",
      type: "multi",
      optional: true,
      choices: [
        { id: "ss", label: "Social Security" },
        { id: "medicare", label: "Medicare or Medicaid (health coverage)" },
        { id: "snap", label: "Food assistance (SNAP)" },
        { id: "housing", label: "Housing help" },
        { id: "none", label: "None" },
      ],
    },
    {
      id: "smallbiz",
      text: "Do you own a small business?",
      type: "single",
      choices: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
      ],
    },
  ],
};

export const STATE_PHASE: Phase = {
  id: "statecontext",
  title: "Where you vote",
  subtitle:
    "Your state decides which races are on your ballot. The rest helps us focus your results.",
  questions: [
    {
      id: "state",
      text: "Which state are you registered to vote in?",
      type: "state",
    },
    {
      id: "level",
      text: "Which elections do you care about most this year?",
      type: "single",
      choices: [
        { id: "federal", label: "National (Congress and Senate)" },
        { id: "state", label: "State (Governor and state lawmakers)" },
        { id: "local", label: "Local (city, county, school board)" },
        { id: "all", label: "All of them the same" },
      ],
    },
    {
      id: "localissues",
      text: "What are the biggest problems where you live right now?",
      help: "Optional — a sentence or two in your own words.",
      type: "text",
      optional: true,
    },
    {
      id: "competitive",
      text: "Are elections where you live usually close, or does one side always win?",
      type: "single",
      optional: true,
      choices: [
        { id: "toss", label: "Very close — could go either way" },
        { id: "lean", label: "Leans one way, but still a contest" },
        { id: "safe", label: "One side almost always wins" },
        { id: "unsure", label: "Not sure" },
      ],
    },
    {
      id: "ballotmeasures",
      text: "Are there any local questions or measures on your ballot you care about?",
      help: "Optional — name any that matter to you.",
      type: "text",
      optional: true,
    },
  ],
};

export const VOTING_PHASE: Phase = {
  id: "voting",
  title: "Your voting history",
  subtitle: "This helps us word your results in a way that fits you.",
  questions: [
    {
      id: "voted",
      text: "Have you voted before?",
      type: "single",
      choices: [
        { id: "regular", label: "Yes — I vote often, including smaller elections" },
        { id: "general", label: "Yes — mostly in the big November elections" },
        { id: "sometimes", label: "Once in a while" },
        { id: "first", label: "This would be my first time" },
      ],
    },
    {
      id: "party",
      text: "Do you think of yourself as part of a political party?",
      type: "single",
      choices: [
        { id: "dem", label: "Democrat" },
        { id: "rep", label: "Republican" },
        { id: "ind", label: "Independent (no party)" },
        { id: "other", label: "Another party" },
        { id: "none", label: "I don't identify with any" },
      ],
    },
    {
      id: "crossed",
      text: "Have you ever voted for someone from a different party than usual?",
      type: "single",
      choices: [
        { id: "yes", label: "Yes" },
        { id: "no", label: "No" },
        { id: "na", label: "I don't have a usual party" },
      ],
    },
    {
      id: "distrust",
      text: "What has made you lose trust in a candidate or party before?",
      type: "single",
      optional: true,
      choices: [
        { id: "broken", label: "They broke their promises" },
        { id: "money", label: "Too much influence from big money" },
        { id: "extreme", label: "They were too extreme" },
        { id: "dishonest", label: "They were dishonest, or had a scandal" },
        { id: "outoftouch", label: "They didn't understand people like me" },
      ],
    },
    {
      id: "swing",
      text: "What would most likely change your vote at the last minute?",
      type: "single",
      optional: true,
      choices: [
        { id: "issue", label: "One issue I really care about" },
        { id: "character", label: "Something about the person's character" },
        { id: "debate", label: "How they did in a debate" },
        { id: "local", label: "Advice from someone I trust" },
        { id: "nothing", label: "Nothing — I've made up my mind" },
      ],
    },
  ],
};

export const CONTEXT_PHASES: Phase[] = [
  BACKGROUND_PHASE,
  ECONOMIC_PHASE,
  STATE_PHASE,
  VOTING_PHASE,
];

// ---------------------------------------------------------------------------
// Issue modules (branching). Each choice carries a value on a -2..+2 scale used
// only to measure how close two answers are. Wording is plain and neutral;
// lower values sit on the "smaller government / market / traditional" side and
// higher values on the "more active government / change" side.
// ---------------------------------------------------------------------------
export const ISSUES: Issue[] = [
  {
    id: "healthcare",
    label: "Health Care",
    icon: "🏥",
    blurb: "Getting care, what it costs, and how insurance works.",
    questions: [
      {
        id: "hc_coverage",
        text: "How should the country help more people get health insurance?",
        type: "single",
        choices: [
          { id: "a", label: "Let insurance companies compete, with fewer government rules", value: -2 },
          { id: "b", label: "Keep today's system (most get insurance through work) and fix problems as they come up", value: -1 },
          { id: "c", label: "Create a government plan people could choose, alongside private ones", value: 1 },
          { id: "d", label: "Switch to one government health plan that covers everyone", value: 2 },
        ],
      },
      {
        id: "hc_drugs",
        text: "What should happen with the price of medicine?",
        type: "single",
        choices: [
          { id: "a", label: "Let companies set their own prices", value: -2 },
          { id: "b", label: "Push for more competition and clearer pricing", value: 0 },
          { id: "c", label: "Let the government bargain for lower prices", value: 1 },
          { id: "d", label: "Have the government put limits on prices", value: 2 },
        ],
      },
      {
        id: "hc_preexisting",
        text: "Should insurance companies have to cover people who are already sick?",
        type: "single",
        choices: [
          { id: "a", label: "No — let the market decide", value: -2 },
          { id: "b", label: "Handle it another way, like special plans for higher-risk patients", value: -1 },
          { id: "c", label: "Yes, with some flexibility for insurers", value: 1 },
          { id: "d", label: "Yes, always — no exceptions", value: 2 },
        ],
      },
      {
        id: "hc_medicaid",
        text: "Medicaid is free or low-cost coverage for people with lower incomes. What should your state do with it?",
        type: "single",
        choices: [
          { id: "a", label: "Rely on it less over time", value: -2 },
          { id: "b", label: "Cover more people, but require them to work", value: -1 },
          { id: "c", label: "Cover more people", value: 1 },
          { id: "d", label: "Cover more people and add more benefits", value: 2 },
        ],
      },
      {
        id: "hc_costs",
        text: "What's the best way to bring down health care costs overall?",
        type: "single",
        choices: [
          { id: "a", label: "Let people shop around and use savings accounts to pay for care", value: -2 },
          { id: "b", label: "Fix the current work-based and private system", value: -1 },
          { id: "c", label: "Add a government plan to create more competition", value: 1 },
          { id: "d", label: "Have the government set prices and budgets", value: 2 },
        ],
      },
    ],
  },
  {
    id: "economy",
    label: "Jobs & Money",
    icon: "💵",
    blurb: "Taxes, pay, government spending, and trade.",
    questions: [
      {
        id: "ec_taxes",
        text: "What should happen with taxes?",
        type: "single",
        choices: [
          { id: "a", label: "Cut taxes for most people, especially businesses", value: -2 },
          { id: "b", label: "Keep taxes low and make them simpler", value: -1 },
          { id: "c", label: "Raise taxes on high earners and big companies", value: 1 },
          { id: "d", label: "Raise taxes on the wealthy a lot to pay for public programs", value: 2 },
        ],
      },
      {
        id: "ec_wage",
        text: "What should happen with the lowest legal pay (the minimum wage)?",
        type: "single",
        choices: [
          { id: "a", label: "There shouldn't be a national minimum — let each state decide", value: -2 },
          { id: "b", label: "Keep it about where it is now", value: -1 },
          { id: "c", label: "Raise it slowly over time", value: 1 },
          { id: "d", label: "Raise it to at least $15 an hour nationwide", value: 2 },
        ],
      },
      {
        id: "ec_spending",
        text: "How should the government handle its spending?",
        type: "single",
        choices: [
          { id: "a", label: "Spend less to lower the national debt", value: -2 },
          { id: "b", label: "Slow down how fast spending grows", value: -1 },
          { id: "c", label: "Spend more now to help people, even if debt goes up for a while", value: 1 },
          { id: "d", label: "Spend a lot on things like jobs, roads, and bridges", value: 2 },
        ],
      },
      {
        id: "ec_trade",
        text: "What's the best approach to buying and selling with other countries?",
        type: "single",
        choices: [
          { id: "a", label: "Mostly free trade, with few taxes on imports", value: -2 },
          { id: "b", label: "Mostly open, with a few special deals", value: -1 },
          { id: "c", label: "Trade freely, but add some protections for American workers", value: 1 },
          { id: "d", label: "Add taxes on imports to protect jobs at home", value: 2 },
        ],
      },
      {
        id: "ec_labor",
        text: "What's your view on unions (workers joining together to bargain for better pay)?",
        type: "single",
        choices: [
          { id: "a", label: "Limit how much power unions have", value: -2 },
          { id: "b", label: "Stay neutral about unions", value: -1 },
          { id: "c", label: "Support workers' right to join unions and bargain", value: 1 },
          { id: "d", label: "Strongly expand protections for workers and unions", value: 2 },
        ],
      },
    ],
  },
  {
    id: "immigration",
    label: "Immigration",
    icon: "🛂",
    blurb: "The border, and how people become legal or citizens.",
    questions: [
      {
        id: "im_undocumented",
        text: "What should happen to immigrants living here without legal permission?",
        type: "single",
        choices: [
          { id: "a", label: "Focus on enforcing the law and sending them back", value: -2 },
          { id: "b", label: "Let some stay, decided case by case", value: -1 },
          { id: "c", label: "Offer a way to become legal if they meet certain rules", value: 1 },
          { id: "d", label: "Offer a clear path to become citizens", value: 2 },
        ],
      },
      {
        id: "im_border",
        text: "What should the country focus on at the border?",
        type: "single",
        choices: [
          { id: "a", label: "Walls and tougher enforcement", value: -2 },
          { id: "b", label: "More border officers and technology", value: -1 },
          { id: "c", label: "Balance enforcement with faster help for people seeking safety", value: 1 },
          { id: "d", label: "Focus on handling people legally and fixing why they leave home", value: 2 },
        ],
      },
      {
        id: "im_levels",
        text: "How many immigrants should be allowed in legally?",
        type: "single",
        choices: [
          { id: "a", label: "Fewer than today", value: -2 },
          { id: "b", label: "About the same, based on job skills", value: -1 },
          { id: "c", label: "More, for both skilled workers and families", value: 1 },
          { id: "d", label: "Many more, and make the process simpler", value: 2 },
        ],
      },
      {
        id: "im_daca",
        text: "Some people were brought here illegally as children (often called 'Dreamers'). What should happen to them?",
        type: "single",
        choices: [
          { id: "a", label: "End their protections", value: -2 },
          { id: "b", label: "Protect them only for now, case by case", value: -1 },
          { id: "c", label: "Give them permanent legal protection", value: 1 },
          { id: "d", label: "Protect them and offer a path to citizenship", value: 2 },
        ],
      },
      {
        id: "im_asylum",
        text: "What about refugees — people fleeing danger in their home countries?",
        type: "single",
        choices: [
          { id: "a", label: "Let in far fewer", value: -2 },
          { id: "b", label: "Let in somewhat fewer", value: -1 },
          { id: "c", label: "Keep letting in about as many as now", value: 1 },
          { id: "d", label: "Let in more people who need safety", value: 2 },
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Schools",
    icon: "🎓",
    blurb: "Public school funding, school choice, and college costs.",
    questions: [
      {
        id: "ed_k12",
        text: "What's the best approach to public schools (grades K–12)?",
        type: "single",
        choices: [
          { id: "a", label: "Give families money to pick any school, including private ones", value: -2 },
          { id: "b", label: "Allow some choice, like charter schools", value: -1 },
          { id: "c", label: "Put more money into public schools", value: 1 },
          { id: "d", label: "Put a lot more into public schools and limit private-school vouchers", value: 2 },
        ],
      },
      {
        id: "ed_debt",
        text: "What should happen with student loan debt?",
        type: "single",
        choices: [
          { id: "a", label: "People should pay back what they borrowed — no forgiveness", value: -2 },
          { id: "b", label: "Forgive loans only for those who need it most", value: -1 },
          { id: "c", label: "Forgive some of it and lower interest rates", value: 1 },
          { id: "d", label: "Cancel most student debt and make public college free", value: 2 },
        ],
      },
      {
        id: "ed_college",
        text: "How should college be made more affordable?",
        type: "single",
        choices: [
          { id: "a", label: "Let competition bring prices down on its own", value: -2 },
          { id: "b", label: "Let people repay loans based on what they earn", value: -1 },
          { id: "c", label: "Give more grants and financial aid", value: 1 },
          { id: "d", label: "Make public college free", value: 2 },
        ],
      },
      {
        id: "ed_curriculum",
        text: "Who should decide what schools teach?",
        type: "single",
        choices: [
          { id: "a", label: "Mostly parents and local communities, with little federal say", value: -2 },
          { id: "b", label: "States should set the standards", value: -1 },
          { id: "c", label: "There should be strong shared public standards", value: 1 },
          { id: "d", label: "There should be national standards focused on fairness for all kids", value: 2 },
        ],
      },
      {
        id: "ed_prek",
        text: "What about care and learning for young children, before kindergarten?",
        type: "single",
        choices: [
          { id: "a", label: "It's mainly up to families to arrange and pay for", value: -2 },
          { id: "b", label: "Give families a little help", value: -1 },
          { id: "c", label: "Make it easier for more families to get", value: 1 },
          { id: "d", label: "Offer free pre-K to everyone", value: 2 },
        ],
      },
    ],
  },
  {
    id: "climate",
    label: "Climate & Energy",
    icon: "🌎",
    blurb: "Pollution rules, oil and gas, and clean energy.",
    questions: [
      {
        id: "cl_urgency",
        text: "How much should the government do about climate change?",
        type: "single",
        choices: [
          { id: "a", label: "Very little", value: -2 },
          { id: "b", label: "A little — mostly let businesses lead", value: -1 },
          { id: "c", label: "Take real action with rules and incentives", value: 1 },
          { id: "d", label: "Act fast and lead a big shift to clean energy", value: 2 },
        ],
      },
      {
        id: "cl_fossil",
        text: "What should happen with oil, gas, and coal?",
        type: "single",
        choices: [
          { id: "a", label: "Produce more of them", value: -2 },
          { id: "b", label: "Keep producing them, with some cleanup", value: -1 },
          { id: "c", label: "Slowly use less of them", value: 1 },
          { id: "d", label: "Move away from them quickly", value: 2 },
        ],
      },
      {
        id: "cl_renew",
        text: "What about clean energy like solar, wind, and electric cars?",
        type: "single",
        choices: [
          { id: "a", label: "Don't give them government help", value: -2 },
          { id: "b", label: "Give them a little help", value: -1 },
          { id: "c", label: "Give them more support", value: 1 },
          { id: "d", label: "Invest a lot of public money in them", value: 2 },
        ],
      },
      {
        id: "cl_carbon",
        text: "Should companies have to pay or follow limits for the pollution they cause?",
        type: "single",
        choices: [
          { id: "a", label: "No", value: -2 },
          { id: "b", label: "Only if they choose to", value: -1 },
          { id: "c", label: "Yes — charge companies for pollution", value: 1 },
          { id: "d", label: "Yes — set strict limits and charge for pollution", value: 2 },
        ],
      },
      {
        id: "cl_tradeoff",
        text: "When energy jobs and the environment pull in different directions, which comes first?",
        type: "single",
        choices: [
          { id: "a", label: "Protecting energy jobs and keeping costs low", value: -2 },
          { id: "b", label: "Leaning toward jobs", value: -1 },
          { id: "c", label: "Leaning toward the environment, while helping workers adjust", value: 1 },
          { id: "d", label: "Protecting the environment", value: 2 },
        ],
      },
    ],
  },
  {
    id: "justice",
    label: "Crime & Guns",
    icon: "⚖️",
    blurb: "Policing, prison sentences, and gun laws.",
    questions: [
      {
        id: "cj_police",
        text: "What's your view on policing?",
        type: "single",
        choices: [
          { id: "a", label: "Give police more money and be tougher on crime", value: -2 },
          { id: "b", label: "Support police, with a few changes", value: -1 },
          { id: "c", label: "Make changes to hold police more accountable", value: 1 },
          { id: "d", label: "Move some police money to services like mental health", value: 2 },
        ],
      },
      {
        id: "cj_sentencing",
        text: "How long should prison sentences be?",
        type: "single",
        choices: [
          { id: "a", label: "Tough, including fixed minimum sentences", value: -2 },
          { id: "b", label: "Keep things about as they are", value: -1 },
          { id: "c", label: "Shorten fixed minimum sentences", value: 1 },
          { id: "d", label: "Make big changes and keep fewer people in prison", value: 2 },
        ],
      },
      {
        id: "cj_guns",
        text: "What's your view on gun laws?",
        type: "single",
        choices: [
          { id: "a", label: "Protect gun rights, with few limits", value: -2 },
          { id: "b", label: "Only small changes", value: -1 },
          { id: "c", label: "Require background checks for all buyers and add some limits", value: 1 },
          { id: "d", label: "Add strong limits, including on military-style rifles", value: 2 },
        ],
      },
      {
        id: "cj_drugs",
        text: "How should the country handle drugs?",
        type: "single",
        choices: [
          { id: "a", label: "Enforce drug laws strictly", value: -2 },
          { id: "b", label: "Keep the current approach", value: -1 },
          { id: "c", label: "Focus on treatment instead of jail", value: 1 },
          { id: "d", label: "Stop treating drug use as a crime, and make marijuana legal", value: 2 },
        ],
      },
      {
        id: "cj_death",
        text: "What's your view on the death penalty?",
        type: "single",
        choices: [
          { id: "a", label: "Keep it", value: -2 },
          { id: "b", label: "Use it only in rare cases", value: -1 },
          { id: "c", label: "Lean toward ending it", value: 1 },
          { id: "d", label: "End it", value: 2 },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Social Issues & Rights",
    icon: "🌈",
    blurb: "Abortion, LGBTQ+ rights, and civil rights.",
    questions: [
      {
        id: "so_abortion",
        text: "What's your view on abortion?",
        type: "single",
        choices: [
          { id: "a", label: "Ban it, with few or no exceptions", value: -2 },
          { id: "b", label: "Allow it only with strong limits", value: -1 },
          { id: "c", label: "Keep it legal, with some limits", value: 1 },
          { id: "d", label: "Keep it legal and easy to get", value: 2 },
        ],
      },
      {
        id: "so_lgbtq",
        text: "What about rights for LGBTQ+ people?",
        type: "single",
        choices: [
          { id: "a", label: "Don't add new protections", value: -2 },
          { id: "b", label: "Add only limited protections", value: -1 },
          { id: "c", label: "Protect them from being treated unfairly", value: 1 },
          { id: "d", label: "Add strong nationwide protections", value: 2 },
        ],
      },
      {
        id: "so_religion",
        text: "How much should religion shape our laws?",
        type: "single",
        choices: [
          { id: "a", label: "A lot", value: -2 },
          { id: "b", label: "Some", value: -1 },
          { id: "c", label: "Mostly keep religion and government separate", value: 1 },
          { id: "d", label: "Keep them completely separate", value: 2 },
        ],
      },
      {
        id: "so_voting",
        text: "What matters more in how we run elections?",
        type: "single",
        choices: [
          { id: "a", label: "Making them secure, like requiring a photo ID", value: -2 },
          { id: "b", label: "Leaning toward security", value: -1 },
          { id: "c", label: "Leaning toward making voting easier", value: 1 },
          { id: "d", label: "Making it easier for everyone to vote", value: 2 },
        ],
      },
      {
        id: "so_dei",
        text: "What about programs meant to promote diversity and fair treatment (sometimes called DEI)?",
        type: "single",
        choices: [
          { id: "a", label: "Oppose them", value: -2 },
          { id: "b", label: "Doubt they help", value: -1 },
          { id: "c", label: "Support them", value: 1 },
          { id: "d", label: "Strongly support them", value: 2 },
        ],
      },
    ],
  },
  {
    id: "foreign",
    label: "Other Countries",
    icon: "🌐",
    blurb: "The military, allies, and helping other nations.",
    questions: [
      {
        id: "fp_military",
        text: "What should happen with military spending?",
        type: "single",
        choices: [
          { id: "a", label: "Spend more", value: -2 },
          { id: "b", label: "Keep it about the same", value: -1 },
          { id: "c", label: "Spend a little less", value: 1 },
          { id: "d", label: "Spend a lot less", value: 2 },
        ],
      },
      {
        id: "fp_aid",
        text: "What about money the U.S. gives to help other countries?",
        type: "single",
        choices: [
          { id: "a", label: "Cut it a lot", value: -2 },
          { id: "b", label: "Cut it some", value: -1 },
          { id: "c", label: "Keep it about the same", value: 1 },
          { id: "d", label: "Give more", value: 2 },
        ],
      },
      {
        id: "fp_intervention",
        text: "When should the U.S. get involved in conflicts in other countries?",
        type: "single",
        choices: [
          { id: "a", label: "Be ready to use the military to protect our interests", value: -2 },
          { id: "b", label: "Only in select cases", value: -1 },
          { id: "c", label: "Try talking things out first", value: 1 },
          { id: "d", label: "Stay out of other countries' conflicts", value: 2 },
        ],
      },
      {
        id: "fp_alliances",
        text: "How should the U.S. work with longtime partner countries (like our NATO allies)?",
        type: "single",
        choices: [
          { id: "a", label: "Put America first and make fewer commitments", value: -2 },
          { id: "b", label: "Rework the deals", value: -1 },
          { id: "c", label: "Support our current partnerships", value: 1 },
          { id: "d", label: "Build even closer ties", value: 2 },
        ],
      },
      {
        id: "fp_china",
        text: "What's the best approach to China?",
        type: "single",
        choices: [
          { id: "a", label: "Take a tough stance, including taxes on their goods", value: -2 },
          { id: "b", label: "Be firm and careful", value: -1 },
          { id: "c", label: "Work together where we can, but still compete", value: 1 },
          { id: "d", label: "Focus on cooperation", value: 2 },
        ],
      },
    ],
  },
  {
    id: "housing",
    label: "Housing",
    icon: "🏘️",
    blurb: "The cost of homes, building rules, and homelessness.",
    questions: [
      {
        id: "ho_afford",
        text: "How should we make housing more affordable?",
        type: "single",
        choices: [
          { id: "a", label: "Cut rules so builders can build more", value: -2 },
          { id: "b", label: "Give builders small incentives", value: -1 },
          { id: "c", label: "Mix public and private effort, with some government help", value: 1 },
          { id: "d", label: "Have the government invest heavily in affordable housing", value: 2 },
        ],
      },
      {
        id: "ho_zoning",
        text: "What about the rules on where and what kind of homes can be built?",
        type: "single",
        choices: [
          { id: "a", label: "Keep decisions local and limit crowding", value: -2 },
          { id: "b", label: "Make small changes to the rules", value: -1 },
          { id: "c", label: "Change rules to allow more homes, including apartments", value: 1 },
          { id: "d", label: "Require more housing, especially near buses and trains", value: 2 },
        ],
      },
      {
        id: "ho_renters",
        text: "What about protections for renters?",
        type: "single",
        choices: [
          { id: "a", label: "Don't limit how much landlords can charge", value: -2 },
          { id: "b", label: "Only very basic protections", value: -1 },
          { id: "c", label: "Add some protections for renters", value: 1 },
          { id: "d", label: "Limit rent increases and add strong protections", value: 2 },
        ],
      },
      {
        id: "ho_homeless",
        text: "How should we deal with homelessness?",
        type: "single",
        choices: [
          { id: "a", label: "Enforce the law and clear encampments", value: -2 },
          { id: "b", label: "Mix enforcement with help and services", value: -1 },
          { id: "c", label: "Focus on getting people into housing first, plus services", value: 1 },
          { id: "d", label: "Build a lot of public housing and provide services", value: 2 },
        ],
      },
      {
        id: "ho_ownership",
        text: "Should the government help people buy their first home?",
        type: "single",
        choices: [
          { id: "a", label: "No — leave it to the market", value: -2 },
          { id: "b", label: "Only a little help", value: -1 },
          { id: "c", label: "Help with down payments", value: 1 },
          { id: "d", label: "Create big programs for first-time buyers", value: 2 },
        ],
      },
    ],
  },
];

export const ISSUE_BY_ID: Record<string, Issue> = Object.fromEntries(
  ISSUES.map((i) => [i.id, i]),
);
