window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS  (5 days)",
      "date": "2026-08-07",
      "prevDate": "2026-08-02",
      "stats": [
        "64m",
        "13 sets",
        "12.9k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS  (5 days) \u2014 3 load\u2191 \u00b7 3 rep\u2191 \u00b7 0 hold.",
        "assess": "7 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/7</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Barbell Incline Bench Press",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 143 lb \u00d7 10 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 143\u00d710 at RPE 9 (\u2265 anchor 10), backoffs productive \u2014 top set 143\u2192148.8, back-off \u2248132.3; reset reps; drive to RPE 10.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 82.7,
                "reps": "10",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 121.3,
                "reps": "10",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 132,
                "reps": 4,
                "rpe": 7
              },
              "prop": {
                "lbs": 148.8,
                "reps": "5\u201310",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 143,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 132.3,
                "reps": "7\u201310",
                "rpe": 9.0
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 132,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Dumbbell Fly",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "1:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 40 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/12) \u2014 earn the jump; top set 40\u219245, back-off \u224840. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 25,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 25,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 45,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 35,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "12",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell Triceps Extension",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 12 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 50.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 75.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 60,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "14\u201320",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "1:30",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 12 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 250,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 300.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 300,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 275.0,
                "reps": "14\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 14 @ RPE 9.5 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (15/14/14) \u2014 earn the jump; top set 22.5\u219227.5, back-off \u224825. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 6
              },
              "prop": {
                "lbs": 15,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 14,
                "rpe": 9.5
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "12",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "1:30",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No torso swing",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "No working sets logged.",
          "rationale": "<b>\u2717 QC fail: no_working_sets</b> \u00b7 Cannot prescribe without performed sets.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Chest Dip",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "2:00",
          "cues": [],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: bodyweight \u00d7 None @ RPE 8 \u00b7 bodyweight \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226512 at RPE 9 before adding external load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": "8\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            }
          ]
        }
      ]
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS (4-5 days)",
      "date": "2026-08-06",
      "prevDate": "2026-08-01",
      "stats": [
        "73m",
        "14 sets",
        "8.7k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY A \u2014 BACK / BICEPS (4-5 days) \u2014 3 load\u2191 \u00b7 4 rep\u2191 \u00b7 0 hold.",
        "assess": "8 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>7/8</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Assisted Pull Up",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stall"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 175 assist \u00d7 12 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 175 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder).",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 225.0,
                "reps": "8",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": 200.0,
                "reps": "8",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 175,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "12\u201315",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "14\u201315",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Barbell Bent Over Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 143 lb \u00d7 8 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 143.3 \u2014 reps below anchor; chase reps to ~10 at RPE 10 before adding load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 77.2,
                "reps": "10",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 115.7,
                "reps": "10",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 143,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 143.3,
                "reps": "8\u201310",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 132,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 126.8,
                "reps": "10",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 30\u219235, back-off \u224832.5. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "12",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell One Arm Row",
          "icon": "\ud83d\udea3",
          "rest": "3:00",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 70 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set 70\u00d713 at RPE 9 (\u2265 anchor 12), backoffs productive \u2014 top set 70\u219275, back-off \u224867.5; reset reps; drive to RPE 10.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 35,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 40,
                "reps": "13",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 60,
                "reps": "13",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 70,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 75,
                "reps": "6\u201312",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 60,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 67.5,
                "reps": "8\u201312",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell Cross Body Hammer Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 27.5 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/10) \u2014 earn the jump; top set 27.5\u219232.5, back-off \u224830. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 17.5,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 27.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "No working sets logged.",
          "rationale": "<b>\u2717 QC fail: no_working_sets</b> \u00b7 Cannot prescribe without performed sets.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Cable Crunch",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: bodyweight \u00d7 None \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 No load logged last session \u2014 record the load and chase reps to ~12 at RPE 9.5 before adding weight.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": "15",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": "8\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null
              },
              "prop": {
                "lbs": null,
                "reps": "10\u201315",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: bodyweight \u00d7 None @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 50 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 5
              },
              "prop": {
                "lbs": 50.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "12\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "14\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        }
      ]
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS (3-4 days)",
      "date": "2026-08-04",
      "prevDate": "2026-07-30",
      "stats": [
        "61m",
        "17 sets",
        "14.2k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY C \u2014 DELTS / ABS (3-4 days) \u2014 4 load\u2191 \u00b7 2 rep\u2191 \u00b7 0 hold.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/6</b> prescriptions passed the validation gate."
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 22.5 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/14/12/17) \u2014 earn the jump; top set 22.5\u219227.5, back-off \u224825. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "17",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 22.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 20,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "12",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 20,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 15,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Band Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "band_resisted_isolation",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 14 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 65 lb band \u2014 chase reps to ~15 at RPE 9. Bands available: 35/45/55/65 only.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 21,
                "rpe": 8
              },
              "prop": {
                "lbs": 55.0,
                "reps": "21",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 14,
                "rpe": 9
              },
              "prop": {
                "lbs": 65.0,
                "reps": "14\u201321",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 17,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "16\u201321",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 20 lb \u00d7 13 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (13/15/13) \u2014 earn the jump; top set 20\u219225, back-off \u224822.5. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 12,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 20,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 17.5,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 22.5,
                "reps": "12",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 17.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [
            "Strict form only",
            "No failure",
            "Continuous tension",
            "Pump and stretch focus",
            "Do not create spillover fatigue"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 All working sets near the top (12/11) \u2014 earn the jump; top set 30\u219235, back-off \u224832.5. Isolation: only loaded once the whole cluster is productive.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201312",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 30,
                "reps": 11,
                "rpe": 8
              },
              "prop": {
                "lbs": 32.5,
                "reps": "12",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Stay upright",
            "Elbows close to body",
            "Full lockout squeeze",
            "Controlled eccentric",
            "No bouncing",
            "Stop before shoulder discomfort"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 250 lb \u00d7 20 @ RPE 8 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set hit 20 (\u226515) reps \u2014 add bands 250\u2192275 lb and rebuild reps.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 20,
                "rpe": 5
              },
              "prop": {
                "lbs": 250.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 250,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": 275.0,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 250,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 250.0,
                "reps": "14\u201315",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "rest": "2:00",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 17 @ RPE 8 \u00b7 bodyweight \u00b7 anchor 20 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226520 at RPE 9 before adding external load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 0,
                "reps": 17,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": "25",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "17\u201325",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "19\u201325",
                "rpe": 9.0
              }
            }
          ]
        }
      ]
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS  (5 days)",
      "date": "2026-08-02",
      "prevDate": "2026-07-28",
      "stats": [
        "52m",
        "15 sets",
        "10.6k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY B - CHEST / TRICEPS  (5 days) \u2014 0 load\u2191 \u00b7 6 rep\u2191 \u00b7 0 hold.",
        "assess": "7 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/7</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below."
      },
      "exercises": [
        {
          "name": "Barbell Incline Bench Press",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "3:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "barbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 143 lb \u00d7 9 @ RPE 9 \u00b7 barbell \u00b7 anchor 10 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 143.3 \u2014 reps below anchor; chase reps to ~10 at RPE 10 before adding load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 77.2,
                "reps": "10",
                "rpe": 5.0
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 110,
                "reps": 10,
                "rpe": 6
              },
              "prop": {
                "lbs": 115.7,
                "reps": "10",
                "rpe": 6.5
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 132,
                "reps": 4,
                "rpe": 7
              },
              "prop": {
                "lbs": 143.3,
                "reps": "9\u201310",
                "rpe": 10.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 143,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 126.8,
                "reps": "10",
                "rpe": 9.0
              }
            },
            {
              "type": 5,
              "last": {
                "lbs": 132,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Chest Dip",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "2:00",
          "cues": [],
          "noWeight": true,
          "loading_type": "bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: bodyweight \u00d7 8 @ RPE 8 \u00b7 bodyweight \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Bodyweight \u2014 chase reps to \u226512 at RPE 9 before adding external load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": 8,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": "8\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": 5,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell Fly",
          "icon": "\ud83c\udfcb\ufe0f",
          "rest": "1:30",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 40 lb \u00d7 8 @ RPE 9 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 40 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 25,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 22.5,
                "reps": "15",
                "rpe": 5.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "8\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": 35,
                "reps": "10\u201315",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Dumbbell Triceps Extension",
          "icon": "\ud83d\udd17",
          "rest": "2:00",
          "cues": [
            "Elbows fixed slightly in",
            "Full stretch behind head",
            "2\u20133 sec eccentric",
            "Pause in stretch",
            "No shoulder movement",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 65 lb \u00d7 8 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 75 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 50,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 50.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 65,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 75.0,
                "reps": "8\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 60,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 50.0,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            }
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "rest": "1:30",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "band_combo",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 8 @ RPE 9 \u00b7 band_combo \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 300 lb band stack \u2014 chase reps to ~15 at RPE 9 before adding a band. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 275.0,
                "reps": "20",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": 250,
                "reps": 8,
                "rpe": 6
              },
              "prop": {
                "lbs": 300.0,
                "reps": "8\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": 300,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 275.0,
                "reps": "10\u201320",
                "rpe": 9.0
              }
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "rest": "1:30",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No torso swing",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "fail",
          "action": "review_required",
          "assess": "No working sets logged.",
          "rationale": "<b>\u2717 QC fail: no_working_sets</b> \u00b7 Cannot prescribe without performed sets.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 12.5,
                "reps": 20,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            },
            {
              "type": "W",
              "last": {
                "lbs": 12.5,
                "reps": 20,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null
              }
            }
          ]
        },
        {
          "name": "Dumbbell Incline Bicep Curl",
          "icon": "\ud83d\udcaa",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "dumbbell",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: bodyweight \u00d7 None @ RPE 6 \u00b7 dumbbell \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 No load logged last session \u2014 record the load and chase reps to ~12 at RPE 9.5 before adding weight.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": "15",
                "rpe": 6.0
              }
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9.5
              },
              "prop": {
                "lbs": null,
                "reps": "10\u201315",
                "rpe": 9.5
              }
            },
            {
              "type": 3,
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": "12\u201315",
                "rpe": 9.0
              }
            }
          ]
        }
      ]
    }
  ]
};
