window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-10-06",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-10-03",
      "nextAvailable": {
        "earliest": "2026-10-09",
        "latest": "2026-10-10",
        "fatigue_state": "moderate",
        "driver": "delts recovery (stretch stimulus, moderate fatigue, ~52h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-07T06:30:20.156488",
        "fatigue_signal": {
          "bent over row barbell": 0.918157366553844,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4812730151933794,
          "cross body hammer curl dumbbell": 0.2864396230210652,
          "hammer curl dumbbell": 0.225,
          "incline bench press barbell": 0.9805643406746363,
          "incline bicep curl dumbbell": 0.504961606219069,
          "lateral raise band": 0.6798558442013953,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6421719555965384,
          "pull up assisted": 3.4175646156611776,
          "rear_dumbbell_raise": 0.23745438071276187,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.3573795984412531,
          "triceps extension dumbbell": 0.6120562767160889,
          "triceps_pushdown": 3.16280478936201
        },
        "fatigue_accumulation": {
          "session_id": "1c75c7a0-c7a7-413f-bf70-f548a3c47052",
          "session_date": "2026-10-05T00:00:00",
          "global_fatigue_score": 5.966660022735596,
          "fatigue_trend_3": 4.278349876403809,
          "fatigue_trend_5": 5.04116678237915,
          "recovery_debt": 5.1459641456604
        },
        "deload_state": {
          "snapshot_date": "2026-10-06T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 5.966660022735596,
          "regression_trigger": 0.625,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "44m",
        "14 sets",
        "10.8k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 0 load\u2191 \u00b7 1 rep\u2191 \u00b7 1 hold \u00b7 2 non-primary excluded.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>2/5</b> prescriptions passed the validation gate; <b>3 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 2
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "skip_overlap",
          "assess": "Most recent primary session: 30 lb \u00d7 15 @ RPE 10, 25 lb \u00d7 16 @ RPE 9, and 22.5 lb \u00d7 16 @ RPE 9 on 2026-10-03.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 OMIT \u2014 Seated Lateral Raise classified skip_overlap: fatigue/recovery debt exceeds the acceptable level (high over the configured threshold) for added volume today. No working sets prescribed today.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 10
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 1102.5,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=skip_overlap).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "skip_overlap",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": {
            "sessionId": "e05acb62-a2e6-447e-806c-d02928f2a433",
            "date": "2026-10-03",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 15,
                "rpe": 10.0
              },
              {
                "lbs": 25.0,
                "reps": 16,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 16,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": false,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-03 (72h ago).",
            "Fatigue state for this occurrence: 'high'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
            "Escalation: fatigue_state=high overrides the history_inference-decided primary_progression result -> skip_overlap (bounded post-resolution escalation; single destination, cannot override a manual override)."
          ]
        },
        {
          "name": "Lateral Raise (Band)",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
          "cues": [
            "Step out to create bottom tension",
            "Smooth tempo",
            "No slack at bottom",
            "No torso sway",
            "Keep delts loaded throughout"
          ],
          "noWeight": false,
          "loading_type": "band_resisted_isolation",
          "qc": "fail",
          "action": "progress_reps_tempo",
          "assess": "Last top set: 65 lb \u00d7 15 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2)</b> \u00b7 Already on the top band (65 lb). No heavier band in inventory \u2014 progress reps \u2192 tempo \u2192 pauses \u2192 ROM \u2192 volume before any new step. Back-off already reached its own 15-rep anchor at its own load (55) for 15-17 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Already at the heaviest available resistance; progress reps, tempo and ROM before any new load.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 12,
                "rpe": 6
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 65.0,
                "reps": "15\u201320",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 65,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "15\u201317",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 45,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2475.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 91.37333333333333,
              "decisionScoreRaw": 91.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 22.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 83.99833333333335,
              "decisionScoreRaw": 83.99833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 21.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 82.54,
              "decisionScoreRaw": 82.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 76.83166666666666,
              "decisionScoreRaw": 76.83166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 80.04,
              "decisionScoreRaw": 80.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
            "date": "2026-09-20",
            "sets": [
              {
                "lbs": 55.0,
                "reps": 8,
                "rpe": 6.0
              },
              {
                "lbs": 65.0,
                "reps": 22,
                "rpe": 9.0
              },
              {
                "lbs": 55.0,
                "reps": 20,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying shoulders muscle exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-10-03 (72h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=4)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (27.5) for 15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "12\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "15",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 25,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1097.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 36.01916666666666,
              "decisionScoreRaw": 36.01916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 7,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 36.74833333333333,
              "decisionScoreRaw": 36.74833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 15.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 35.24833333333333,
              "decisionScoreRaw": 35.24833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 31.873333333333335,
              "decisionScoreRaw": 31.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 10,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 30.456666666666663,
              "decisionScoreRaw": 30.456666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 27.5,
                "actualReps": 10.0,
                "loadDelta": -2,
                "repDelta": -5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "e05acb62-a2e6-447e-806c-d02928f2a433",
            "date": "2026-10-03",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-10-03 (72h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "muscleGroup": "abdominals",
          "rest": "1:30",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 18 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2)</b> \u00b7 Hold 0: no external load is logged on the top set, so there is no load step to take; chase reps to ~12 at RPE 9.5. Back-off already reached its own 12-rep anchor at its own load (0) for 18 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 0 lb at RPE 9.5 or lower; then increase to 5 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 0,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 0,
                "reps": "18",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": 0,
                "reps": "18",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 2,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 0.0,
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "e05acb62-a2e6-447e-806c-d02928f2a433",
            "date": "2026-10-03",
            "sets": [
              {
                "lbs": null,
                "reps": 18,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 18,
                "rpe": 8.0
              },
              {
                "lbs": null,
                "reps": 18,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 4/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying abdominals muscle exposure: 2026-10-03 (72h ago).",
            "Most recent qualifying core_hip_flexion cluster exposure: 2026-10-03 (72h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group abdominals, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 48h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
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
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "bloodflow",
          "assess": "Most recent primary session: 300 lb \u00d7 15 @ RPE 10 and 275 lb \u00d7 12 @ RPE 9 on 2026-10-05. Today's Day C occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 reference_volume_exceeded_profile_slots(performed=2,slots=1,delta=1), bloodflow_plausibility_recompute(from=200,to=175,ref_load=175,ref_reps=15,ref_rpe=8,cap=7)</b> \u00b7 Blood-flow/recovery exposure \u2014 Triceps Pushdown received its primary progression work on 2026-10-05. Prescribe 130 lb \u00d7 8 @ RPE 5 and 175 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 300 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 305 lb.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 130,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 175,
                "reps": "20",
                "rpe": 7.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 175,
                "reps": 20,
                "rpe": 7
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 175,
                "reps": 15,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 6125.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=bloodflow_recovery).",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (44h, stretch stimulus, low fatigue) extends to 2026-10-08, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "1c75c7a0-c7a7-413f-bf70-f548a3c47052",
            "date": "2026-10-05",
            "sets": [
              {
                "lbs": 200.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 250.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 15,
                "rpe": 10.0
              },
              {
                "lbs": 275.0,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-05 (24h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-10-05 (24h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-10-05 (24h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day B (2026-10-08, 48h away).",
            "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
            "Level 4 decided: exact-exercise exposure 24h ago against a 50h recovery window -> bloodflow_recovery."
          ]
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "B",
      "title": "DAY B - CHEST / TRICEPS",
      "date": "2026-10-05",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-09-27",
      "nextAvailable": {
        "earliest": "2026-10-09",
        "latest": "2026-10-10",
        "fatigue_state": "elevated",
        "driver": "chest recovery (heavy stimulus, elevated fatigue, ~84h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-07T06:30:20.156488",
        "fatigue_signal": {
          "bent over row barbell": 0.918157366553844,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4812730151933794,
          "cross body hammer curl dumbbell": 0.2864396230210652,
          "hammer curl dumbbell": 0.225,
          "incline bench press barbell": 0.9805643406746363,
          "incline bicep curl dumbbell": 0.504961606219069,
          "lateral raise band": 0.6798558442013953,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6421719555965384,
          "pull up assisted": 3.4175646156611776,
          "rear_dumbbell_raise": 0.23745438071276187,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.3573795984412531,
          "triceps extension dumbbell": 0.6120562767160889,
          "triceps_pushdown": 3.16280478936201
        },
        "fatigue_accumulation": {
          "session_id": "1c75c7a0-c7a7-413f-bf70-f548a3c47052",
          "session_date": "2026-10-05T00:00:00",
          "global_fatigue_score": 5.966660022735596,
          "fatigue_trend_3": 4.278349876403809,
          "fatigue_trend_5": 5.04116678237915,
          "recovery_debt": 5.1459641456604
        },
        "deload_state": {
          "snapshot_date": "2026-10-06T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 5.966660022735596,
          "regression_trigger": 0.625,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "131m",
        "12 sets",
        "14.3k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY B - CHEST / TRICEPS \u2014 1 load\u2191 \u00b7 2 rep\u2191 \u00b7 1 hold \u00b7 2 non-primary excluded.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/6</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 2
      },
      "exercises": [
        {
          "name": "Incline Bench Press (Barbell)",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": "chest",
          "rest": "2:00",
          "cues": [
            "Shoulder blades set",
            "Lower under control",
            "Press through upper chest",
            "No bouncing",
            "Stop before bar speed dies"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 170 lb \u00d7 7 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=barbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 170 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (150) for 7-9 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 170 lb at RPE 9.5 or lower; then increase to 175 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 93.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 95,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 132,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 170,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 170,
                "reps": "7\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 150,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 150,
                "reps": "7\u20139",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2240.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 165.13166666666663,
              "decisionScoreRaw": 165.13166666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 165.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 167.05666666666664,
              "decisionScoreRaw": 167.05666666666664,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 165.0,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-06",
              "decision": "hold",
              "decisionScore": 163.90333333333334,
              "decisionScoreRaw": 163.90333333333334,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
              "outcome": {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-01",
              "decision": "hold",
              "decisionScore": 159.13666666666666,
              "decisionScoreRaw": 159.13666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
              "outcome": {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-27",
              "decision": "hold",
              "decisionScore": 157.93583333333333,
              "decisionScoreRaw": 157.93583333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
              "outcome": {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "85df1d57-ccce-463c-acb1-c5af8a3ba513",
            "date": "2026-09-27",
            "sets": [
              {
                "lbs": 93.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 132.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 170.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 137.5,
                "reps": 8,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying chest muscle exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying push_horizontal cluster exposure: 2026-09-27 (192h ago).",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 78h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Chest Fly (Dumbbell)",
          "icon": "\ud83c\udfcb\ufe0f",
          "muscleGroup": "chest",
          "rest": "2:00",
          "cues": [
            "Stretch focus",
            "Soft elbow bend fixed",
            "2\u20133 sec eccentric",
            "No pressing motion",
            "Stop short of shoulder irritation"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "increase_load",
          "assess": "Last top set: 50 lb \u00d7 15 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 All working sets near the top (15/12) \u2014 earn the jump; top set 50\u219255; +10.0% load costs ~3 reps, so the rep target drops 15\u219212 [range 8-12]. Isolation: only loaded once the whole cluster is productive. Back-off earned its own jump too \u2014 50 for 10-12, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 12 clean reps at 50 lb at RPE 9.5 or lower; then increase to 55 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 30,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 30,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 50,
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 55,
                "reps": "8\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 45,
                "reps": 12,
                "rpe": 8
              },
              "prop": {
                "lbs": 50,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1290.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 53.873333333333335,
              "decisionScoreRaw": 53.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 50.0,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 54.84555555555555,
              "decisionScoreRaw": 54.84555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 47.5,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-06",
              "decision": "hold",
              "decisionScore": 52.23444444444445,
              "decisionScoreRaw": 52.23444444444445,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
              "outcome": {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 47.5,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-01",
              "decision": "hold",
              "decisionScore": 51.59555555555555,
              "decisionScoreRaw": 51.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
              "outcome": {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 45.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-27",
              "decision": "hold",
              "decisionScore": 46.84555555555555,
              "decisionScoreRaw": 46.84555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
              "outcome": {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 45.0,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "85df1d57-ccce-463c-acb1-c5af8a3ba513",
            "date": "2026-09-27",
            "sets": [
              {
                "lbs": 27.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 50.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 45.0,
                "reps": 11,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying chest muscle exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying chest_isolation cluster exposure: 2026-09-27 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 54h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Triceps Extension (Dumbbell)",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
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
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 72.5 lb \u00d7 7 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4), anomalous_set_excluded(reps=13,rpe=9,vs_reps=7,vs_rpe=9)</b> \u00b7 Hold 72.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off 65 for 9-15 \u2014 derived from the top set; no matching performed back-off was logged.",
          "when_to_add_load": "Reach 12 clean reps at 72.5 lb at RPE 9.5 or lower; then increase to 80 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 45,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 40,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 72.5,
                "reps": 7,
                "rpe": 9
              },
              "prop": {
                "lbs": 72.5,
                "reps": "7\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 65,
                "reps": "9\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1352.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 78.70666666666668,
              "decisionScoreRaw": 78.70666666666668,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 72.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 77.1788888888889,
              "decisionScoreRaw": 77.1788888888889,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 72.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-06",
              "decision": "hold",
              "decisionScore": 81.04,
              "decisionScoreRaw": 81.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
              "outcome": {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 72.5,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-01",
              "decision": "hold",
              "decisionScore": 77.62333333333333,
              "decisionScoreRaw": 77.62333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
              "outcome": {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 67.5,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-27",
              "decision": "hold",
              "decisionScore": 74.62333333333333,
              "decisionScoreRaw": 74.62333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
              "outcome": {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 67.5,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "85df1d57-ccce-463c-acb1-c5af8a3ba513",
            "date": "2026-09-27",
            "sets": [
              {
                "lbs": 45.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 72.5,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 65.0,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Day B wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-27 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Triceps Pushdown",
          "icon": "\ud83d\udd17",
          "muscleGroup": "triceps",
          "rest": "2:00",
          "cues": [
            "Elbows pinned",
            "Full lockout",
            "Controlled return",
            "No shoulder roll",
            "Keep tension on triceps"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "skip_overlap",
          "assess": "Most recent primary session: 300 lb \u00d7 11 @ RPE 10 and 275 lb \u00d7 11 @ RPE 9 on 2026-09-27.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 OMIT \u2014 Triceps Pushdown classified skip_overlap: fatigue/recovery debt exceeds the acceptable level (high over the configured threshold) for added volume today. No working sets prescribed today.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 250,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 300,
                "reps": 15,
                "rpe": 10
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 275,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 7800.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=skip_overlap).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "skip_overlap",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": {
            "sessionId": "85df1d57-ccce-463c-acb1-c5af8a3ba513",
            "date": "2026-09-27",
            "sets": [
              {
                "lbs": 200.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 250.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 11,
                "rpe": 10.0
              },
              {
                "lbs": 275.0,
                "reps": 11,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": false,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-09-27 (192h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-27 (192h ago).",
            "Fatigue state for this occurrence: 'high'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression.",
            "Escalation: fatigue_state=high overrides the history_inference-decided primary_progression result -> skip_overlap (bounded post-resolution escalation; single destination, cannot override a manual override)."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "1:30",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "bloodflow",
          "assess": "Most recent primary session: 40 lb \u00d7 10 @ RPE 9 and 32.5 lb \u00d7 11 @ RPE 9 on 2026-10-04. Today's Day B occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u26a0 QC warn \u2014 bloodflow_plausibility_recompute(from=25,to=20,ref_load=22.5,ref_reps=20,ref_rpe=8,cap=7), equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Blood-flow/recovery exposure \u2014 Incline Bicep Curl (Dumbbell) received its primary progression work on 2026-10-04. Prescribe 15 lb \u00d7 8 @ RPE 5 and 20 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 40 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 45 lb.",
          "when_to_add_load": "Reach 12 clean reps at 40 lb at RPE 9.5 or lower; then increase to 45 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 20,
                "reps": "20",
                "rpe": 7.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 22.5,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 20,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 850.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=bloodflow_recovery).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "887a2187-49c8-49c6-a613-50afd760cc4c",
            "date": "2026-10-04",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 40.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 32.5,
                "reps": 11,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 4/6 ownership signals over the runner-up (1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-10-04 (24h ago).",
            "Most recent qualifying biceps muscle exposure: 2026-10-04 (24h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-04 (24h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day A (2026-10-07, 48h away).",
            "Level 3: resolved primary-owner day is A, not today's B; continuing to history/recovery evidence.",
            "Level 4 decided: exact-exercise exposure 24h ago against a 50h recovery window -> bloodflow_recovery."
          ]
        },
        {
          "name": "Hammer Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:00",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 22.5 lb \u00d7 15 @ RPE 8 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4), isolation_load_jump_capped(from=22.5,to=30,pct=33.3333,predicted_reps=2)</b> \u00b7 Hold 22.5 \u2014 the smallest available step (22.5\u219230) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 22.5, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (20) for 20 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 22.5 lb at RPE 9.5 or lower; then increase to 30 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 10,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 22.5,
                "reps": "15\u201320",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 8
              },
              "prop": {
                "lbs": 20,
                "reps": "20",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 2,
              "last": {
                "lbs": 20,
                "reps": 20,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 737.5,
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": null,
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day B inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'highest relative load'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying biceps muscle exposure: 2026-10-04 (24h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-10-04 (24h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS",
      "date": "2026-10-04",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-09-26",
      "nextAvailable": {
        "earliest": "2026-10-08",
        "latest": "2026-10-09",
        "fatigue_state": "elevated",
        "driver": "back recovery (heavy stimulus, elevated fatigue, ~86h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-07T06:30:20.156488",
        "fatigue_signal": {
          "bent over row barbell": 0.918157366553844,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4812730151933794,
          "cross body hammer curl dumbbell": 0.2864396230210652,
          "hammer curl dumbbell": 0.225,
          "incline bench press barbell": 0.9805643406746363,
          "incline bicep curl dumbbell": 0.504961606219069,
          "lateral raise band": 0.6798558442013953,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6421719555965384,
          "pull up assisted": 3.4175646156611776,
          "rear_dumbbell_raise": 0.23745438071276187,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.3573795984412531,
          "triceps extension dumbbell": 0.6120562767160889,
          "triceps_pushdown": 3.16280478936201
        },
        "fatigue_accumulation": {
          "session_id": "1c75c7a0-c7a7-413f-bf70-f548a3c47052",
          "session_date": "2026-10-05T00:00:00",
          "global_fatigue_score": 5.966660022735596,
          "fatigue_trend_3": 4.278349876403809,
          "fatigue_trend_5": 5.04116678237915,
          "recovery_debt": 5.1459641456604
        },
        "deload_state": {
          "snapshot_date": "2026-10-06T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 5.966660022735596,
          "regression_trigger": 0.625,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "62m",
        "10 sets",
        "8.9k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY A \u2014 BACK / BICEPS \u2014 0 load\u2191 \u00b7 5 rep\u2191 \u00b7 0 hold.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/5</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 0
      },
      "exercises": [
        {
          "name": "Pull Up (Assisted)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "lats",
          "rest": "3:00",
          "cues": [
            "Full ROM",
            "Stretch at bottom",
            "Chest up",
            "Drive elbows down",
            "No kipping",
            "Reduce assistance before adding reps if reps stalli"
          ],
          "noWeight": false,
          "loading_type": "band_assisted_bodyweight",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 150 assist \u00d7 10 @ RPE 9 \u00b7 band_assisted_bodyweight \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Hold 150 lb assist \u2014 build toward 15 reps before reducing assistance. Bands 50/75/100/125 stack to 50/75/100/125/150/175/200/225/250/275/300/350 (less assist = harder). Back-off holds its own last load (175) for 10-12 \u2014 it has not reached the 15-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 15 clean reps with 150 lb assistance at RPE 10 or lower; then reduce assistance to 125 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 200.0,
                "reps": "10",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 200,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": 175.0,
                "reps": "6",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 150,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 150.0,
                "reps": "10\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 175,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 3250.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: increase (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "increase",
              "decisionScore": 532.3316666666667,
              "decisionScoreRaw": 532.3316666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 225.0,
                "actualReps": 6.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "increase",
              "decisionScore": 560.04,
              "decisionScoreRaw": 560.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "increase",
              "decisionScore": 562.9566666666667,
              "decisionScoreRaw": 562.9566666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "increase",
              "decisionScore": 576.7066666666666,
              "decisionScoreRaw": 576.7066666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 275.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "increase",
              "decisionScore": 543.2483333333333,
              "decisionScoreRaw": 543.2483333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 220.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "d764d3ea-3ea5-405c-a904-17ff28021091",
            "date": "2026-05-13",
            "sets": [
              {
                "lbs": 150.0,
                "reps": 7,
                "rpe": 8.5
              },
              {
                "lbs": 150.0,
                "reps": 9,
                "rpe": 10.0
              },
              {
                "lbs": 175.0,
                "reps": 6,
                "rpe": 10.0
              },
              {
                "lbs": 150.0,
                "reps": 7,
                "rpe": 7.5
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 5/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior lats muscle exposure found.",
            "No qualifying prior pull_vertical cluster exposure found.",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group lats, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Bent Over Row (Barbell)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "upperback",
          "rest": "3:00",
          "cues": [
            "Stable torso",
            "Pull to low chest / upper abs",
            "No jerking",
            "Control eccentric",
            "Do not turn it into a hip hinge shrug"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 159.5 lb \u00d7 8 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=barbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 159.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (148.5) for 8-10 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 159.5 lb at RPE 9.5 or lower; then increase to 165 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 90,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 126.5,
                "reps": 6,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 159.5,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 159.5,
                "reps": "8\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 148.5,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 148.5,
                "reps": "8\u201310",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 2464.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 164.9025,
              "decisionScoreRaw": 164.9025,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 159.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 163.48166666666665,
              "decisionScoreRaw": 163.48166666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 154.0,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 158.9441666666667,
              "decisionScoreRaw": 158.9441666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 154.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 157.79833333333332,
              "decisionScoreRaw": 157.79833333333332,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 148.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 151.53166666666667,
              "decisionScoreRaw": 151.53166666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 148.0,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "412a17c0-ef15-4020-b764-339280c8af2f",
            "date": "2026-09-26",
            "sets": [
              {
                "lbs": 88.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 126.5,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 159.5,
                "reps": 8,
                "rpe": 9.0
              },
              {
                "lbs": 148.5,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying upperback muscle exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-09-26 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:00",
          "cues": [
            "Full stretch with shoulder extended",
            "Elbows fixed",
            "Supinate hard at top",
            "2\u20133 sec eccentric",
            "No shoulder movement"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 40 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 40 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (32.5) for 11-13 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 40 lb at RPE 9.5 or lower; then increase to 45 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 40,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 40,
                "reps": "10\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "11\u201313",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 757.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-19) \u2014 ignored",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-10-05). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-07, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-19",
              "decision": "hold",
              "decisionScore": 27.29,
              "decisionScoreRaw": 27.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 22.5,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 39.59555555555555,
              "decisionScoreRaw": 39.59555555555555,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 29.356666666666666,
              "decisionScoreRaw": 29.356666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 22.8,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-12",
              "decision": "hold",
              "decisionScore": 29.762222222222217,
              "decisionScoreRaw": 29.762222222222217,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 20.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 39.95666666666666,
              "decisionScoreRaw": 39.95666666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 10.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-19",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "412a17c0-ef15-4020-b764-339280c8af2f",
            "date": "2026-09-26",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 37.5,
                "reps": 12,
                "rpe": 9.0
              },
              {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 4/6 ownership signals over the runner-up (1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying biceps muscle exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-26 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "One Arm Row (Dumbbell)",
          "icon": "\ud83d\udea3",
          "muscleGroup": "upperback",
          "rest": "2:00",
          "cues": [
            "Stretch at bottom",
            "Drive elbow back",
            "No torso rotation",
            "Keep ribcage locked",
            "Control lowering"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 90 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 90 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off holds its own last load (80) for 10-12 \u2014 it has not reached the 12-rep anchor on its own performance yet.",
          "when_to_add_load": "Reach 12 clean reps at 90 lb at RPE 9.5 or lower; then increase to 95 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 47.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 50,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "W",
              "last": {
                "lbs": 67.5,
                "reps": 5,
                "rpe": 6
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 90,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 90,
                "reps": "10\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 80,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 80,
                "reps": "10\u201312",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1700.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 90.06083333333335,
              "decisionScoreRaw": 90.06083333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 85.0,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 86.915,
              "decisionScoreRaw": 86.915,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 80.0,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 83.3525,
              "decisionScoreRaw": 83.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 77.5,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 84.29,
              "decisionScoreRaw": 84.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 75.0,
                "actualReps": 13.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 83.665,
              "decisionScoreRaw": 83.665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 75.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "412a17c0-ef15-4020-b764-339280c8af2f",
            "date": "2026-09-26",
            "sets": [
              {
                "lbs": 47.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 67.5,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 85.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 75.0,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying upperback muscle exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-09-26 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Cross Body Hammer Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:00",
          "cues": [
            "Neutral grip fixed",
            "Elbow slightly forward",
            "No torso swing",
            "Control eccentric",
            "Keep tension on brachialis"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "add_reps",
          "assess": "Last top set: 37.5 lb \u00d7 10 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u26a0 QC warn \u2014 equipment_conflict_g4_held(identity=dumbbell,card=cable_or_machine,hold=G-4)</b> \u00b7 Hold 37.5 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off already reached its own 12-rep anchor at its own load (32.5) for 12-14 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 37.5 lb at RPE 9.5 or lower; then increase to 40 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 37.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 37.5,
                "reps": "10\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 32.5,
                "reps": "12\u201314",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 765.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-15) \u2014 ignored",
          "recoveryOverlapWarning": "Day B (chest/arms) also trains arms (the logged Day B session on 2026-10-05). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-10-07, past that. Advisory only -- no volume was changed.",
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 39.178888888888885,
              "decisionScoreRaw": 39.178888888888885,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 9.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 38.401111111111106,
              "decisionScoreRaw": 38.401111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 8.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-05",
              "decision": "hold",
              "decisionScore": 40.73444444444444,
              "decisionScoreRaw": 40.73444444444444,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
              "outcome": {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 37.5,
                "actualReps": 11.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-30",
              "decision": "hold",
              "decisionScore": 38.901111111111106,
              "decisionScoreRaw": 38.901111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
              "outcome": {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 35.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-26",
              "decision": "hold",
              "decisionScore": 38.901111111111106,
              "decisionScoreRaw": 38.901111111111106,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
              "outcome": {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 35.0,
                "actualReps": 12.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
                "date": "2026-09-15",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
                "date": "2026-09-10",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "9b3c35d7-ab51-49fe-bb70-3a07aae20b8a",
                "date": "2026-09-05",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "ba2a74fa-60ca-4ab2-b529-fc6ad41d62a7",
                "date": "2026-08-30",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f31c8909-17b0-4360-b6ef-b929e08bbf7f",
                "date": "2026-08-26",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "412a17c0-ef15-4020-b764-339280c8af2f",
            "date": "2026-09-26",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 37.5,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 32.5,
                "reps": 9,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day A inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day A wins 'highest top-set effort (RPE)'.",
            "Day A wins 'highest relative load'.",
            "Day A wins 'greatest qualifying working-set count'.",
            "Day A wins 'consistent top-set-plus-backoff structure'.",
            "Day A wins 'rotation frequency (most appearances)'.",
            "Day A wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying biceps muscle exposure: 2026-09-26 (192h ago).",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-26 (192h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (A) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        }
      ],
      "sequencingAdvisory": "\"Incline Bicep Curl (Dumbbell)\" (isolation/accessory) is displayed before \"One Arm Row (Dumbbell)\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-10-03",
      "sessionRole": "primary",
      "sessionRoleSource": "scheduled_slot",
      "sessionRoleWarnings": [],
      "prevDate": "2026-09-20",
      "nextAvailable": {
        "earliest": "2026-10-06",
        "latest": "2026-10-07",
        "fatigue_state": "moderate",
        "driver": "delts recovery (stretch stimulus, moderate fatigue, ~52h)"
      },
      "fatigueAdvisory": {
        "fatigue_taxonomy": {
          "systemic": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "local": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "short_term",
            "adaptive_impact": "regional"
          },
          "neural": {
            "recovery_complexity": "high",
            "suppression_risk": "high",
            "persistence_profile": "multi_day",
            "adaptive_impact": "global"
          },
          "metabolic": {
            "recovery_complexity": "moderate",
            "suppression_risk": "moderate",
            "persistence_profile": "acute",
            "adaptive_impact": "regional"
          },
          "structural": {
            "recovery_complexity": "very_high",
            "suppression_risk": "high",
            "persistence_profile": "long_term",
            "adaptive_impact": "local"
          }
        },
        "session_id": null,
        "generated_at": "2026-10-07T06:30:20.156488",
        "fatigue_signal": {
          "bent over row barbell": 0.918157366553844,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4812730151933794,
          "cross body hammer curl dumbbell": 0.2864396230210652,
          "hammer curl dumbbell": 0.225,
          "incline bench press barbell": 0.9805643406746363,
          "incline bicep curl dumbbell": 0.504961606219069,
          "lateral raise band": 0.6798558442013953,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.6421719555965384,
          "pull up assisted": 3.4175646156611776,
          "rear_dumbbell_raise": 0.23745438071276187,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.3573795984412531,
          "triceps extension dumbbell": 0.6120562767160889,
          "triceps_pushdown": 3.16280478936201
        },
        "fatigue_accumulation": {
          "session_id": "1c75c7a0-c7a7-413f-bf70-f548a3c47052",
          "session_date": "2026-10-05T00:00:00",
          "global_fatigue_score": 5.966660022735596,
          "fatigue_trend_3": 4.278349876403809,
          "fatigue_trend_5": 5.04116678237915,
          "recovery_debt": 5.1459641456604
        },
        "deload_state": {
          "snapshot_date": "2026-10-06T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 5.966660022735596,
          "regression_trigger": 0.625,
          "cooldown_sessions": 3
        },
        "deload_signal_secondary": null,
        "stimulus_fatigue": null,
        "advisory_decision": null,
        "anomalies": null,
        "component_status": {
          "fatigue_taxonomy": "ok",
          "fatigue_accumulation": "ok",
          "fatigue_signal": "ok",
          "exercise_response_state": "ok",
          "deload_state": "ok"
        },
        "thresholds": {
          "global_fatigue_score": {
            "scale": "unbounded_sum",
            "med": 4.5,
            "high": 5.5
          },
          "recovery_debt": {
            "scale": "unbounded_decaying_accumulator",
            "med": 1.5,
            "high": 2.5,
            "baseline": 4.0,
            "decay": 0.7
          },
          "regress_ratio": {
            "scale": "ratio_0_1",
            "med": 0.3,
            "high": 0.5
          }
        },
        "is_advisory": true
      },
      "stats": [
        "36m",
        "10 sets",
        "3.4k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 1 load\u2191 \u00b7 1 rep\u2191 \u00b7 1 hold \u00b7 1 non-primary excluded.",
        "assess": "4 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>2/4</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 1
      },
      "exercises": [
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Lead with elbows",
            "Stop if traps take over",
            "2\u20133 sec eccentric",
            "No tempo breaks",
            "Constant tension"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "skip_overlap",
          "assess": "Most recent primary session: 20 lb \u00d7 17 @ RPE 8 and 15 lb \u00d7 17 @ RPE 8 on 2026-09-26.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 OMIT \u2014 Seated Lateral Raise classified skip_overlap: fatigue/recovery debt exceeds the acceptable level (high over the configured threshold) for added volume today. No working sets prescribed today.",
          "when_to_add_load": "Reach 12 clean reps at 20 lb at RPE 9.5 or lower; then increase to 25 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 15,
                "rpe": 10
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 25,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 22.5,
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 1210.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=skip_overlap).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "skip_overlap",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": {
            "sessionId": "412a17c0-ef15-4020-b764-339280c8af2f",
            "date": "2026-09-26",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 20.0,
                "reps": 17,
                "rpe": 8.0
              },
              {
                "lbs": 15.0,
                "reps": 17,
                "rpe": 8.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": false,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-26 (168h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-26 (168h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-26 (168h ago).",
            "Fatigue state for this occurrence: 'high'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
            "Escalation: fatigue_state=high overrides the history_inference-decided primary_progression result -> skip_overlap (bounded post-resolution escalation; single destination, cannot override a manual override)."
          ]
        },
        {
          "name": "Lateral Raise (Band)",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
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
          "action": "increase_load",
          "assess": "Last top set: 55 lb \u00d7 20 @ RPE 9 \u00b7 band_resisted_isolation \u00b7 anchor 15 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Top set hit 20 reps \u2014 step band 55\u219265 lb and rebuild reps. Back-off earned its own jump too \u2014 55 for 18-20, rebuilding to the reps it just produced.",
          "when_to_add_load": "Reach 15 clean reps at 55 lb at RPE 9 or lower; then step up to 65 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 55,
                "reps": 20,
                "rpe": 6
              },
              "prop": {
                "lbs": 55.0,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 65.0,
                "reps": "14\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 55,
                "reps": 20,
                "rpe": 9
              },
              "prop": {
                "lbs": 55.0,
                "reps": "18\u201320",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1100.0,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 91.37333333333333,
              "decisionScoreRaw": 91.37333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 22.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 83.99833333333335,
              "decisionScoreRaw": 83.99833333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 21.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 82.54,
              "decisionScoreRaw": 82.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 76.83166666666666,
              "decisionScoreRaw": 76.83166666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 15.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 80.04,
              "decisionScoreRaw": 80.04,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "unknown",
                "prescribedLoad": null,
                "prescribedReps": null,
                "prescribedRpe": null,
                "actualLoad": 65.0,
                "actualReps": 20.0,
                "loadDelta": null,
                "repDelta": null,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "unknown",
                "effectivenessScore": 0.0,
                "valid": false
              }
            ],
            "validCount": 0,
            "progressCount": 0,
            "regressCount": 0,
            "neutralCount": 0,
            "scores": []
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
            "date": "2026-09-20",
            "sets": [
              {
                "lbs": 55.0,
                "reps": 8,
                "rpe": 6.0
              },
              {
                "lbs": 65.0,
                "reps": 22,
                "rpe": 9.0
              },
              {
                "lbs": 55.0,
                "reps": 20,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying shoulders muscle exposure: 2026-09-26 (168h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-26 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Rear Dumbbell Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "2:00",
          "cues": [
            "Chest supported or hinged",
            "No trap dominance",
            "1-sec squeeze at top",
            "Control lowering",
            "Raise through rear delt, not hands"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 13 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=5)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (27.5) for 13-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 15,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "warmup"
            },
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "13\u201315",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 27.5,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 27.5,
                "reps": "13\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 25,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1072.5,
          "gate_status": "stale_ignored",
          "gate_reason": "next_program: hold (stale, 2026-09-20) \u2014 ignored",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 36.01916666666666,
              "decisionScoreRaw": 36.01916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 7,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 13.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 36.74833333333333,
              "decisionScoreRaw": 36.74833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 35,
                "prescribedReps": 9,
                "prescribedRpe": 9,
                "actualLoad": 30.0,
                "actualReps": 15.0,
                "loadDelta": -5,
                "repDelta": 6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 35.24833333333333,
              "decisionScoreRaw": 35.24833333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 30.0,
                "actualReps": 10.0,
                "loadDelta": 0,
                "repDelta": -5,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-02",
              "decision": "hold",
              "decisionScore": 31.873333333333335,
              "decisionScoreRaw": 31.873333333333335,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
              "outcome": {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "behaviorClass": "volume_overshoot",
                "prescribedLoad": 30,
                "prescribedReps": 10,
                "prescribedRpe": 9,
                "actualLoad": 27.5,
                "actualReps": 13.0,
                "loadDelta": -2,
                "repDelta": 3,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-08-29",
              "decision": "hold",
              "decisionScore": 30.456666666666663,
              "decisionScoreRaw": 30.456666666666663,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
              "outcome": {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 30,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 27.5,
                "actualReps": 10.0,
                "loadDelta": -2,
                "repDelta": -5,
                "confidence": 0.75
              }
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-20",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
                "date": "2026-09-20",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
                "date": "2026-09-13",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "f81dea43-af5c-4658-9661-206305351212",
                "date": "2026-09-07",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6a22c12f-d9a6-429c-94cc-fb892170daf1",
                "date": "2026-09-02",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "24adc3e6-ac49-4572-acea-5f99056db129",
                "date": "2026-08-29",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              1.0,
              1.0,
              -1.0,
              1.0,
              -1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
            "date": "2026-09-20",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-20 (312h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-26 (168h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-09-20 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        },
        {
          "name": "Hanging Leg Raise",
          "icon": "\ud83c\udf00",
          "muscleGroup": "abdominals",
          "rest": "1:30",
          "cues": [
            "Posterior pelvic tilt at top",
            "No swinging",
            "Raise pelvis, not just knees",
            "Lower under control",
            "Keep abs loaded"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "fail",
          "action": "add_reps",
          "assess": "Last top set: 0 lb \u00d7 18 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2)</b> \u00b7 Hold 0: no external load is logged on the top set, so there is no load step to take; chase reps to ~12 at RPE 9.5. Back-off already reached its own 12-rep anchor at its own load (0) for 18 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 0 lb at RPE 9.5 or lower; then increase to 5 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 0,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "prop": {
                "lbs": 0,
                "reps": "18",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": 0,
                "reps": "18",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 2,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 8
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": 3,
              "last": {
                "lbs": 0,
                "reps": 18,
                "rpe": 9
              },
              "prop": {
                "lbs": null,
                "reps": null,
                "rpe": null,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 0.0,
          "gate_status": "no_signal",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": null,
          "reduceCutoff": null,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
            "date": "2026-09-20",
            "sets": [
              {
                "lbs": null,
                "reps": 8,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 17,
                "rpe": 8.0
              },
              {
                "lbs": null,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 12,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role recomputed in memory (no persisted occurrence_role row for this key)",
            "Day C inferred as primary owner: won 4/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-20 (312h ago).",
            "Most recent qualifying abdominals muscle exposure: 2026-09-20 (312h ago).",
            "Most recent qualifying core_hip_flexion cluster exposure: 2026-09-20 (312h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group abdominals, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 48h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression."
          ]
        }
      ],
      "sequencingAdvisory": null
    }
  ]
};
