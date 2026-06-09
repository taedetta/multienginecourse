export const sections = [
  {
    id: 'aerodynamics',
    title: 'Single Engine Aerodynamics',
    subtitle: 'Critical Engine & PAST Factors',
    icon: '✈️',
    color: '#1e40af',
    description:
      'Learn why the left engine is critical in conventional multi-engine aircraft and master the four aerodynamic factors: P-Factor, Accelerated Slipstream, Spiraling Slipstream, and Torque.',
  },
  {
    id: 'vmc',
    title: 'VMC Table',
    subtitle: 'Control vs Performance Factors',
    icon: '📊',
    color: '#0f766e',
    description:
      'Understand how CG, bank angle, weight, power, density altitude, drag devices, and prop feathering affect VMC, control authority, and climb performance.',
  },
  {
    id: 'oral',
    title: 'BE58 Oral Review',
    subtitle: 'Baron 58 Checkride Prep',
    icon: '🎓',
    color: '#b45309',
    description:
      'Complete oral exam preparation covering engines, systems, airspeeds, fuel, landing gear, electrical, and emergency procedures for the Beechcraft Baron 58.',
  },
];

const aerodynamicsQuestions = [
  {
    question: 'What is the critical engine?',
    choices: [
      'The engine with the most hours since overhaul',
      'The engine whose failure most adversely affects performance or handling',
      'The right engine in all twin-engine aircraft',
      'The engine that produces the most horsepower',
    ],
    correct: 1,
    explanation:
      'The critical engine is the one whose failure would most adversely affect the performance or handling qualities of the aircraft.',
  },
  {
    question: 'What acronym helps remember the four critical engine factors?',
    choices: ['FAST', 'PAST', 'CAST', 'PATS'],
    correct: 1,
    explanation: 'PAST = P-Factor, Accelerated Slipstream, Spiraling Slipstream, Torque.',
  },
  {
    question: 'In a conventional multi-engine airplane, which engine is typically critical?',
    choices: ['Right engine', 'Left engine', 'Both equally', 'Neither — only jets have critical engines'],
    correct: 1,
    explanation:
      'Four factors make the left engine critical in conventional multi-engine airplanes with clockwise-rotating props.',
  },
  {
    question: 'P-Factor causes yaw because:',
    choices: [
      'Both blades produce equal thrust at all times',
      'The descending blade produces more thrust than the ascending blade',
      'The propeller stops rotating during engine failure',
      'High pressure air flows from right to left',
    ],
    correct: 1,
    explanation:
      'The descending blade has a higher angle of attack and produces more thrust. If the left engine fails, P-factor from the right engine is farther from the longitudinal axis, creating more yaw.',
  },
  {
    question: 'If the LEFT engine fails, P-factor from the operating RIGHT engine:',
    choices: [
      'Is closer to the longitudinal axis, reducing yaw',
      'Is farther from the longitudinal axis, increasing yaw',
      'Has no effect on yaw',
      'Eliminates the need for rudder input',
    ],
    correct: 1,
    explanation:
      'With the left engine failed, thrust asymmetry from the right engine acts at a greater distance from the centerline, increasing the yawing moment.',
  },
  {
    question: 'Accelerated slipstream affects the aircraft by:',
    choices: [
      'Creating extra lift from airflow over the wing from the operating engine',
      'Reducing all lift on both wings equally',
      'Only affecting the vertical stabilizer',
      'Eliminating induced drag completely',
    ],
    correct: 0,
    explanation:
      'Air forced over the wing by the operating engine creates extra lift. Airflow from the right engine creates more induced airflow and a longer arm, increasing rolling moment.',
  },
  {
    question: 'Spiraling slipstream from the LEFT propeller:',
    choices: [
      'Spirals away from the rudder, making it less effective',
      'Hits the rudder and makes it more effective',
      'Only affects the left wingtip',
      'Flows from low pressure to high pressure',
    ],
    correct: 1,
    explanation:
      'Spiraling air from the left propeller hits the rudder, increasing airflow over the rudder and making it more effective when the left engine is operating.',
  },
  {
    question: 'If the left engine fails, spiraling slipstream from the right engine:',
    choices: [
      'Hits the rudder directly',
      'Spirals away from the rudder',
      'Stops completely',
      'Reverses direction toward the fuselage',
    ],
    correct: 1,
    explanation:
      'With the left engine failed, spiraling slipstream from the right engine spirals away from the rudder, reducing rudder effectiveness.',
  },
  {
    question: 'Spiraling slipstream direction flows from:',
    choices: [
      'Low pressure to high pressure',
      'High pressure to low pressure (left to right in standard diagrams)',
      'Rudder to wingtip only',
      'Tail to nose only',
    ],
    correct: 1,
    explanation:
      'High pressure airflow pushes the low-pressure spiraling slipstream to the right. The descending blade produces low pressure; the ascending blade produces high pressure.',
  },
  {
    question: 'Torque in a conventional twin tries to roll the aircraft:',
    choices: [
      'In the same direction as propeller rotation',
      'Opposite to the propeller\'s direction of rotation',
      'Only during takeoff',
      'Only when both engines are at full power',
    ],
    correct: 1,
    explanation:
      'Torque is the opposite reaction to clockwise prop rotation. If the left engine fails, torque tries to roll the aircraft to the left.',
  },
  {
    question: 'Do all multi-engine aircraft have a critical engine?',
    choices: [
      'Yes, always the left engine',
      'No — counter-rotating prop aircraft do not have a critical engine',
      'Yes, always the right engine',
      'Only turbine twins have a critical engine',
    ],
    correct: 1,
    explanation:
      'Aircraft with counter-rotating props do not have a critical engine; loss of either engine has the same aerodynamic effect.',
  },
  {
    question: 'Which factor primarily affects YAW from P-factor?',
    choices: ['Roll only', 'Pitch only', 'Yaw', 'None — P-factor affects lift only'],
    correct: 2,
    explanation: 'P-factor creates asymmetric thrust that yaws the aircraft toward the failed engine side.',
  },
  {
    question: 'Accelerated slipstream primarily creates:',
    choices: ['Yaw only', 'Roll and pitch effects', 'Only drag reduction', 'No aerodynamic effect'],
    correct: 1,
    explanation: 'Accelerated slipstream from the operating engine creates extra lift and rolling moment.',
  },
  {
    question: 'The ascending propeller blade is at:',
    choices: [
      'High angle of attack, producing low pressure',
      'Low angle of attack, producing high pressure airflow',
      'Zero angle of attack always',
      'Maximum pitch always',
    ],
    correct: 1,
    explanation:
      'The ascending blade is at a lower angle of attack and produces high pressure airflow, contributing to the spiraling slipstream direction.',
  },
];

const vmcQuestions = [
  {
    question: 'VMC is best defined as:',
    choices: [
      'Maximum cruise speed with one engine',
      'Ratio of available engine power vs available rudder power',
      'Stall speed in landing configuration',
      'Best rate of climb speed single engine',
    ],
    correct: 1,
    explanation: 'VMC = ratio of available engine power vs available rudder power.',
  },
  {
    question: 'A forward CG generally:',
    choices: [
      'Raises VMC and decreases control',
      'Lowers VMC and increases control effectiveness',
      'Has no effect on VMC',
      'Lowers VMC but decreases control',
    ],
    correct: 1,
    explanation:
      'Forward CG lowers VMC (good) and increases control because the longer arm between CG and rudder provides more leverage.',
  },
  {
    question: 'Forward CG effect on performance (rate of climb):',
    choices: ['Increases', 'Decreases', 'No change', 'Doubles climb rate'],
    correct: 1,
    explanation:
      'Forward CG requires more downward force on the tail, adding to overall downward force and decreasing lift/performance.',
  },
  {
    question: 'Banking 3–5° toward the operating engine:',
    choices: [
      'Raises VMC and requires more rudder',
      'Lowers VMC and reduces rudder input needed',
      'Has no effect on control',
      'Causes immediate stall',
    ],
    correct: 1,
    explanation:
      'Banking toward the operating engine turns the aircraft in the same direction as required rudder input, so less rudder is needed.',
  },
  {
    question: 'Proper bank angle (3–5°) effect on performance:',
    choices: [
      'Decreases performance due to excess drag',
      'Increases performance by reducing sideslip and drag',
      'Has no performance effect',
      'Eliminates need for blue line',
    ],
    correct: 1,
    explanation:
      '3–5° bank reduces sideslip and drag. No bank causes more drag; over-banking (>5°) decreases performance.',
  },
  {
    question: 'Increased weight (when banking) effect on VMC:',
    choices: ['Raises VMC', 'Lowers VMC', 'No effect', 'Eliminates VMC'],
    correct: 1,
    explanation:
      'More weight requires more lift; increased vertical lift component works in the same direction as rudder, requiring less rudder input.',
  },
  {
    question: 'Lower power setting effect on VMC:',
    choices: [
      'Raises VMC',
      'Lowers VMC',
      'No effect',
      'Only affects performance, not VMC',
    ],
    correct: 1,
    explanation: 'Lower power creates less asymmetric turning, requiring less rudder input — lowering VMC.',
  },
  {
    question: 'Lower power effect on climb performance:',
    choices: ['Increases climb', 'Decreases climb', 'No effect', 'Doubles climb rate'],
    correct: 1,
    explanation: 'Lower power decreases climb performance.',
  },
  {
    question: 'Higher density altitude effect on VMC:',
    choices: [
      'Raises VMC significantly',
      'Lowers VMC and increases control',
      'Only affects performance',
      'Eliminates rudder effectiveness',
    ],
    correct: 1,
    explanation:
      'Higher DA means less air over wing/prop (less turning tendency) but rudder remains effective, so control increases and VMC lowers.',
  },
  {
    question: 'Extended drag devices (gear & flaps) effect on VMC:',
    choices: [
      'Raise VMC by increasing asymmetric thrust',
      'Lower VMC by interrupting prop slipstream and reducing asymmetric turning',
      'Have no VMC effect',
      'Only affect multi-engine cruise',
    ],
    correct: 1,
    explanation:
      'Gear and flaps interrupt the reward-flowing airstream of the prop, reducing asymmetric turning tendency.',
  },
  {
    question: 'Feathered prop effect on VMC:',
    choices: [
      'Raises VMC',
      'Lowers VMC by reducing yaw toward the dead engine',
      'No effect',
      'Stops the aircraft immediately',
    ],
    correct: 1,
    explanation: 'A feathered prop reduces yaw toward the dead engine, lowering VMC and decreasing drag.',
  },
  {
    question: 'Which factor LOWERS VMC and is considered "good" for control?',
    choices: [
      'Aft CG and high power',
      'Forward CG, proper bank, lower power, high DA, drag devices, feathered prop',
      'Zero bank and maximum power',
      'Retracted gear at low altitude',
    ],
    correct: 1,
    explanation: 'All listed VMC table factors that lower VMC improve control margin at low airspeed.',
  },
  {
    question: 'Over-banking beyond 5° during single-engine flight:',
    choices: [
      'Always increases performance',
      'Decreases performance by reducing vertical lift needed to offset weight',
      'Has no effect',
      'Lowers VMC further with no downside',
    ],
    correct: 1,
    explanation: 'Over-banking reduces the vertical lift component needed to support weight, decreasing performance.',
  },
  {
    question: 'Lighter weight effect on rate of climb:',
    choices: [
      'Worse climb performance',
      'Better rate of climb, but can result in increased VMC',
      'No effect on either',
      'Only affects landing distance',
    ],
    correct: 1,
    explanation: 'Lighter weight improves climb performance but can increase VMC.',
  },
];

const oralQuestions = [
  {
    question: 'Baron 58 engines are:',
    choices: [
      '2 Lycoming IO-540, carbureted',
      '2 Continental IO-550-C, fuel injected, air cooled',
      '2 Pratt & Whitney turboprops',
      '1 Continental and 1 Lycoming',
    ],
    correct: 1,
    explanation: 'IO = fuel injection, O = horizontally opposed. Two Continental IO-550-C engines.',
  },
  {
    question: 'Horsepower per engine on the Baron 58:',
    choices: ['200 HP', '250 HP', '300 HP', '350 HP'],
    correct: 2,
    explanation: 'Each engine produces 300 HP.',
  },
  {
    question: 'Maximum rated RPM:',
    choices: ['2400', '2500', '2700', '2900'],
    correct: 2,
    explanation: 'Max rated RPM is 2700.',
  },
  {
    question: 'Maximum starter time:',
    choices: ['15 seconds', '20 seconds', '30 seconds', '60 seconds'],
    correct: 2,
    explanation: 'Maximum starter time is 30 seconds.',
  },
  {
    question: 'Total usable fuel capacity:',
    choices: ['150 gal', '166 gal', '172 gal', '180 gal'],
    correct: 1,
    explanation: 'Total fuel is 172 gal; total usable is 166 gal (83 usable per side in mains).',
  },
  {
    question: 'Approved fuel types:',
    choices: ['Jet-A only', '100LL (blue) or 100 (green)', 'Mogas only', '100LL only'],
    correct: 1,
    explanation: 'Approved fuels are 100LL (blue) or 100 (green).',
  },
  {
    question: 'Oil capacity (full / minimum / normal):',
    choices: [
      '8 qts full, 6 min, 7 normal',
      '12 qts full, 9 minimum, 10-11 normal',
      '10 qts full, 8 min, 9 normal',
      '14 qts full, 10 min, 12 normal',
    ],
    correct: 1,
    explanation: '12 quarts full; 9 minimum; 10-11 normal.',
  },
  {
    question: 'Maximum gross weight:',
    choices: ['5000 lbs', '5200 lbs', '5500 lbs', '6000 lbs'],
    correct: 2,
    explanation: 'Max gross weight is 5500 lbs.',
  },
  {
    question: 'VMC (minimum control speed, red line):',
    choices: ['78 kts', '84 kts', '88 kts', '95 kts'],
    correct: 1,
    explanation: 'VMC is 84 kts — minimum control speed with one engine inoperative.',
  },
  {
    question: 'Vso (dirty stall speed):',
    choices: ['65 kts', '78 kts', '84 kts', '92 kts'],
    correct: 0,
    explanation: 'Vso is 65 kts with flaps and gear extended.',
  },
  {
    question: 'Vs1 (clean stall speed):',
    choices: ['65 kts', '78 kts', '84 kts', '101 kts'],
    correct: 1,
    explanation: 'Vs1 is 78 kts clean configuration.',
  },
  {
    question: 'Vyse (best rate of climb, single engine — blue line):',
    choices: ['95 kts', '101 kts', '105 kts', '115 kts'],
    correct: 1,
    explanation: 'Vyse is 101 kts — best rate of climb single engine (blue line).',
  },
  {
    question: 'Vy (best rate of climb, both engines):',
    choices: ['101 kts', '105 kts', '115 kts', '122 kts'],
    correct: 1,
    explanation: 'Vy is 105 kts for best rate of climb with both engines.',
  },
  {
    question: 'Vxse (best angle of climb, single engine):',
    choices: ['92 kts', '95 kts', '101 kts', '105 kts'],
    correct: 1,
    explanation: 'Vxse is 95 kts — best angle of climb single engine.',
  },
  {
    question: 'Vfe (max flap extended):',
    choices: ['101 kts', '115 kts', '122 kts', '152 kts'],
    correct: 2,
    explanation: 'Vfe is 122 kts; flap range is 69-122 (white arc).',
  },
  {
    question: 'Vle (max gear extended):',
    choices: ['122 kts', '135 kts', '152 kts', '170 kts'],
    correct: 2,
    explanation: 'Vle is 152 kts maximum gear extended.',
  },
  {
    question: 'Vr (rotation speed):',
    choices: ['78 kts', '85 kts', '92 kts', '101 kts'],
    correct: 1,
    explanation: 'Rotation speed Vr is 85 kts.',
  },
  {
    question: 'Best glide speed:',
    choices: ['101 kts', '105 kts', '115 kts', '135 kts'],
    correct: 2,
    explanation: 'Best glide is 115 kts.',
  },
  {
    question: 'Vsse (minimum intentional one-engine operation, yellow line):',
    choices: ['84 kts', '88 kts', '92 kts', '95 kts'],
    correct: 1,
    explanation: 'Vsse is 88 kts — minimum intentional one-engine operation.',
  },
  {
    question: 'Single-engine service ceiling definition:',
    choices: [
      'Will not climb more than 100 fpm',
      'Will not climb more than 50 fpm',
      'Unlimited altitude',
      'Same as multi-engine ceiling',
    ],
    correct: 1,
    explanation: 'Single-engine service ceiling: will not climb more than 50 fpm.',
  },
  {
    question: 'Multi-engine service ceiling definition:',
    choices: [
      'Will not climb more than 50 fpm',
      'Will not climb more than 100 fpm',
      '15,000 feet MSL',
      'Same as single-engine ceiling',
    ],
    correct: 1,
    explanation: 'Multi-engine service ceiling: will not climb more than 100 fpm.',
  },
  {
    question: 'Propeller system on Baron 58:',
    choices: [
      '2-blade fixed pitch',
      '3-blade constant speed; oil pressure to low pitch, springs/counterweights to high pitch',
      '4-blade turboprop',
      'Electric variable pitch only',
    ],
    correct: 1,
    explanation:
      '3-blade constant speed props. Springs/counterweights move to high pitch; oil pressure moves to low pitch.',
  },
  {
    question: 'Why don\'t props feather when oil pressure is lost on engine shutdown?',
    choices: [
      'Pilot must manually feather every time',
      'Anti-feathering lock pins prevent feathering from loss of oil pressure',
      'Props are fixed pitch',
      'Feathering is automatic on all twins',
    ],
    correct: 1,
    explanation: 'Anti-feathering lock pins prevent the prop from feathering due to oil pressure loss if the engine shuts down.',
  },
  {
    question: 'Electrical system voltage:',
    choices: ['12V single battery', '28V system with two 12V batteries in series (24V to busses)', '24V with one battery', '14V alternator only'],
    correct: 1,
    explanation: '28V system; two 12V batteries in series provide 24V to two electrical busses.',
  },
  {
    question: 'Alternators on the Baron 58:',
    choices: [
      'One 100-amp alternator',
      'Two belt-driven 50-amp alternators, one per engine',
      'Engine-driven generators only',
      'No alternators — battery only',
    ],
    correct: 1,
    explanation: 'Two belt-driven 50-amp alternators, one per engine, with dual voltage regulators.',
  },
  {
    question: 'Vacuum system provides suction via:',
    choices: [
      'One electric pump only',
      'Two engine-driven suction pumps working as a single system',
      'Ram air only',
      'Hydraulic pressure',
    ],
    correct: 1,
    explanation: 'Two engine-driven suction pumps work together; if one fails, the other continues.',
  },
  {
    question: 'Stall warning system location:',
    choices: [
      'Right wing leading edge',
      'Leading edge of left wing — electrically operated vane',
      'Tail cone only',
      'Pitot tube',
    ],
    correct: 1,
    explanation: 'Warning vane on left wing leading edge activates a horn when approaching stall.',
  },
  {
    question: 'Landing gear is operated by:',
    choices: [
      'Manual crank only',
      'Electric motor with 2-position switch on panel',
      'Hydraulic pump only',
      'Pilot muscle power on co-pilot pedals',
    ],
    correct: 1,
    explanation: 'Electric motor driven; 2-position switch on instrument panel. Manual backup crank behind co-pilot seat.',
  },
  {
    question: 'CRITICAL gear safety rule:',
    choices: [
      'Always use manual and electric together',
      'NEVER operate gear electrically with manual hand crank engaged',
      'Crank must stay engaged during flight',
      'Co-pilot operates electric gear only',
    ],
    correct: 1,
    explanation: 'Never operate gear electrically with manual hand crank engaged — it could spin and cause damage or injury.',
  },
  {
    question: 'Gear warning horn sounds in how many instances?',
    choices: ['One', 'Two', 'Three', 'Four'],
    correct: 2,
    explanation: 'Three: ≤12" MP, gear up on ground (squat switch prevents), full flaps with gear not extended.',
  },
  {
    question: 'Cross-feed procedure requires:',
    choices: [
      'Any flight attitude at max power',
      'Level flight only; inop engine off, aux pump LOW on good engine, good engine to cross-feed',
      'Both selectors to cross-feed simultaneously',
      'High pump always on',
    ],
    correct: 1,
    explanation: 'Level flight only. Inoperative engine off, aux pump on LOW on operative engine, good engine to cross-feed.',
  },
  {
    question: 'Loss of engine — immediate memory items include:',
    choices: [
      'Gear down, flaps full, idle power',
      'Bank, ball, blue line — mixture/props/throttles full, identify, verify, feather',
      'Shutdown both engines',
      'Turn toward dead engine immediately',
    ],
    correct: 1,
    explanation: 'Bank, ball, blue line. Mixture/props/throttles full. Check flaps/gear up. Dead foot — dead engine. Identify, verify, feather.',
  },
  {
    question: 'Define VMC for the oral:',
    choices: [
      'Maximum cruise speed',
      'Minimum speed at which directional control can be maintained with critical engine inoperative (84 kts published)',
      'Stall speed clean',
      'Best glide speed',
    ],
    correct: 1,
    explanation: 'VMC is minimum speed for directional control with critical engine inop — published 84 kts red line.',
  },
  {
    question: 'Manifold pressure in a climb:',
    choices: [
      'Increases 1" per 1000 ft',
      'Decreases approximately 1" per 1000 ft',
      'Stays constant',
      'Doubles every 5000 ft',
    ],
    correct: 1,
    explanation: 'Manifold pressure decreases ~1 inch per 1000 feet during climb as air density decreases.',
  },
  {
    question: 'On approach at blue line but not maintaining glide slope, you should:',
    choices: [
      'Reduce power and descend below blue line',
      'Add power to fly level at blue line, recapture glide slope, then descend adjusting power',
      'Extend flaps immediately',
      'Turn off one engine',
    ],
    correct: 1,
    explanation: 'Add power to maintain blue line level, recapture glide slope, then descend on slope adjusting power as needed.',
  },
  {
    question: 'Navigation system on this Baron:',
    choices: ['Garmin G1000 only', 'Garmin GTN 650Xi', 'Bendix/King only', 'No GPS installed'],
    correct: 1,
    explanation: 'Garmin GTN 650Xi navigation system.',
  },
  {
    question: 'Autopilot type:',
    choices: ['Garmin GFC 500', 'STEC', 'Honeywell', 'None installed'],
    correct: 1,
    explanation: 'STEC autopilot.',
  },
];

const aerodynamicsFlashcards = [
  { front: 'Critical Engine', back: 'Engine whose failure most adversely affects performance or handling.' },
  { front: 'P — P-Factor', back: 'Descending blade produces more thrust; creates yaw, especially when operating engine is farther from centerline.' },
  { front: 'A — Accelerated Slipstream', back: 'Operating engine airflow over wing creates extra lift and rolling moment.' },
  { front: 'S — Spiraling Slipstream', back: 'Prop spiral airflow affects rudder effectiveness; left engine slipstream helps rudder.' },
  { front: 'T — Torque', back: 'Opposite reaction to prop rotation; tries to roll aircraft opposite prop direction.' },
  { front: 'Left Engine Critical?', back: 'Yes, in conventional twins with clockwise-rotating props (all four PAST factors).' },
  { front: 'Counter-Rotating Props', back: 'No critical engine — either engine failure has same aerodynamic effect.' },
  { front: 'P-Factor + Left Engine Failed', back: 'Right engine P-factor farther from longitudinal axis → greater yawing moment.' },
  { front: 'Spiraling Slipstream Direction', back: 'High pressure to low pressure (left to right in standard diagrams).' },
  { front: 'Torque + Left Engine Failed', back: 'Torque tries to roll aircraft to the left.' },
];

const vmcFlashcards = [
  { front: 'VMC Definition', back: 'Ratio of available engine power vs available rudder power.' },
  { front: 'Forward CG → VMC', back: 'Lowers VMC (good). More rudder leverage. Decreases performance.' },
  { front: 'Bank 3-5° → VMC', back: 'Lowers VMC. Less rudder needed. Increases performance (less sideslip).' },
  { front: 'Increased Weight (banking)', back: 'Lowers VMC. More vertical lift helps rudder. Heavier = worse climb.' },
  { front: 'Lower Power → VMC', back: 'Lowers VMC (less asymmetric yaw). Decreases climb performance.' },
  { front: 'High Density Altitude', back: 'Lowers VMC. Less turning tendency; rudder still effective.' },
  { front: 'Drag Devices Extended', back: 'Lowers VMC. Interrupts prop slipstream. Decreases climb.' },
  { front: 'Feathered Prop', back: 'Lowers VMC. Less yaw toward dead engine. Increases performance (less drag).' },
  { front: 'Over-Bank > 5°', back: 'Bad for performance — loses vertical lift component.' },
  { front: 'No Bank', back: 'More sideslip and drag — worse performance.' },
];

const oralFlashcards = [
  { front: 'Engines', back: '2 × Continental IO-550-C, fuel injected, air cooled, 300 HP each.' },
  { front: 'Max RPM / Starter', back: '2700 RPM max. 30 seconds max starter time.' },
  { front: 'Fuel', back: '100LL or 100. 172 total / 166 usable (83 per side).' },
  { front: 'Oil', back: '12 qts full, 9 min, 10-11 normal.' },
  { front: 'Max Gross', back: '5500 lbs.' },
  { front: 'VMC / Vso / Vs1', back: 'VMC 84, Vso 65, Vs1 78.' },
  { front: 'Vy / Vyse / Vxse', back: 'Vy 105, Vyse 101 (blue), Vxse 95.' },
  { front: 'Vfe / Vle / Vr', back: 'Vfe 122, Vle 152, Vr 85.' },
  { front: 'Vsse / Best Glide', back: 'Vsse 88 (yellow). Best glide 115 kts.' },
  { front: 'Service Ceilings', back: 'SE: ≤50 fpm climb. ME: ≤100 fpm climb.' },
  { front: 'Prop System', back: '3-blade constant speed. Oil → low pitch. Springs → high pitch. Anti-feather locks.' },
  { front: 'Electrical', back: '28V. Two 12V batteries series. Two 50A alternators. Dual regulators.' },
  { front: 'Vacuum', back: 'Two engine-driven pumps as one system. Pop-out buttons indicate failure.' },
  { front: 'Gear System', back: 'Electric motor. Manual crank behind co-pilot. NEVER electric + crank engaged.' },
  { front: 'Gear Warning (3)', back: '≤12" MP, gear up on ground, full flaps gear not down.' },
  { front: 'Cross-Feed', back: 'Level flight only. Dead engine off. Pump LOW. Good engine cross-feed.' },
  { front: 'Engine Failure', back: 'Bank, ball, blue line. Mixture/props/throttles full. Identify, verify, feather.' },
  { front: 'Manifold Pressure', back: 'Vacuum on intake stroke. Decreases ~1" per 1000 ft in climb.' },
  { front: 'Avionics', back: 'GTN 650Xi nav/com. STEC autopilot.' },
  { front: 'Accelerate-Stop', back: 'Distance to accelerate to Vr, idle, full stop (POH chart).' },
];

export const sectionContent = {
  aerodynamics: {
    questions: aerodynamicsQuestions,
    flashcards: aerodynamicsFlashcards,
    memoryPairs: aerodynamicsFlashcards.slice(0, 8),
    orderGame: {
      title: 'Order the PAST Factors',
      items: ['P-Factor', 'Accelerated Slipstream', 'Spiraling Slipstream', 'Torque'],
      hint: 'Remember: PAST — the four critical engine factors in order.',
    },
  },
  vmc: {
    questions: vmcQuestions,
    flashcards: vmcFlashcards,
    memoryPairs: vmcFlashcards.slice(0, 8),
    matchGame: {
      title: 'VMC Factor Effects',
      pairs: [
        { term: 'Forward CG', effect: 'Lowers VMC, increases control' },
        { term: '3-5° Bank', effect: 'Lowers VMC, less rudder needed' },
        { term: 'Lower Power', effect: 'Lowers VMC, less climb' },
        { term: 'High DA', effect: 'Lowers VMC, less performance' },
        { term: 'Gear/Flaps Out', effect: 'Lowers VMC, more drag' },
        { term: 'Feathered Prop', effect: 'Lowers VMC, less drag' },
      ],
    },
  },
  oral: {
    questions: oralQuestions,
    flashcards: oralFlashcards,
    memoryPairs: oralFlashcards.slice(0, 10),
    airspeedGame: {
      title: 'Baron 58 Airspeeds',
      pairs: [
        { term: 'Vso', speed: '65 kts' },
        { term: 'Vs1', speed: '78 kts' },
        { term: 'VMC', speed: '84 kts' },
        { term: 'Vr', speed: '85 kts' },
        { term: 'Vsse', speed: '88 kts' },
        { term: 'Vx', speed: '92 kts' },
        { term: 'Vxse', speed: '95 kts' },
        { term: 'Vyse', speed: '101 kts' },
        { term: 'Vy', speed: '105 kts' },
        { term: 'Best Glide', speed: '115 kts' },
        { term: 'Vfe', speed: '122 kts' },
        { term: 'Vle', speed: '152 kts' },
      ],
    },
  },
};
