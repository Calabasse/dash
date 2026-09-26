window.PROGRAM = {
  "author": "C Crawford",
  "avatar": "",
  "sessions": [
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-09-20",
      "prevDate": "2026-09-13",
      "nextAvailable": {
        "earliest": "2026-09-23",
        "latest": "2026-09-24",
        "fatigue_state": "high",
        "driver": "delts recovery (stretch stimulus, high fatigue, ~64h)"
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
        "generated_at": "2026-09-26T06:30:16.700305",
        "fatigue_signal": {
          "bent over row barbell": 1.3782222182573198,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4220560586548864,
          "cross body hammer curl dumbbell": 0.33897004207731585,
          "incline bench press barbell": 1.240508303500291,
          "incline bicep curl dumbbell": 0.55013058227165,
          "lateral raise band": 1.074027658890305,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9127509659094513,
          "pull up assisted": 5.436668703414243,
          "rear_dumbbell_raise": 0.3511369042108573,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.5200879759797417,
          "triceps extension dumbbell": 0.5660316033062336,
          "triceps_pushdown": 5.302496293976025
        },
        "fatigue_accumulation": {
          "session_id": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
          "session_date": "2026-09-20T00:00:00",
          "global_fatigue_score": 7.247748851776123,
          "fatigue_trend_3": 7.878116130828857,
          "fatigue_trend_5": 8.031972885131836,
          "recovery_debt": 13.148003578186035
        },
        "deload_state": {
          "snapshot_date": "2026-09-25T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 7.247748851776123,
          "regression_trigger": 0.7333333492279053,
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
        "43m",
        "15 sets",
        "12.3k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 0 load\u2191 \u00b7 0 rep\u2191 \u00b7 3 hold \u00b7 2 non-primary excluded.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>3/5</b> prescriptions passed the validation gate; <b>2 flagged</b> \u2014 see the \u2717 tags below.",
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
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 13 @ RPE 10 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Held, not progressed: 30 lb \u00d7 13, a single top set only. Same-session volume on this muscle group was reduced first, so this exercise keeps one held set instead of being skipped or advanced.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 13,
                "rpe": 10
              },
              "prop": {
                "lbs": 30,
                "reps": "13",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
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
              "engine_role": "warmup"
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
              "engine_role": "working"
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
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1127.5,
          "gate_status": "confirmed",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 34.3525,
              "decisionScoreRaw": 34.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": null
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 25.87333333333333,
              "decisionScoreRaw": 25.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": null
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 34.29,
              "decisionScoreRaw": 34.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": null
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 25.9775,
              "decisionScoreRaw": 25.9775,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": null
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 33.51916666666666,
              "decisionScoreRaw": 33.51916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": null
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
                "date": "2026-08-25",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
                "date": "2026-08-21",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
                "date": "2026-08-15",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              -1.0,
              1.0,
              1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": {
            "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
            "date": "2026-08-25",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-08-25 (624h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-13 (168h ago).",
            "Fatigue state for this occurrence: 'high'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
            "Escalation: fatigue_state=high overrides the history_inference-decided primary_progression result -> skip_overlap (bounded post-resolution escalation; single destination, cannot override a manual override).",
            "Session workload hierarchy: restored to primary_progression and held at reduced volume (a single top set at its last performed load) instead of skip_overlap -- same-session volume on the same muscle group (shoulders) from lateral_raise_(band) was traded away first (weighted volume 1.2, observability only; the ratified weights never decide whether or how much is reduced)."
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
          "action": "skip_overlap",
          "assess": "Most recent primary session: 30 lb \u00d7 12 @ RPE 10, 25 lb \u00d7 16 @ RPE 9, and 22.5 lb \u00d7 16 @ RPE 9 on 2026-09-13.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 OMIT \u2014 Lateral Raise (Band) classified skip_overlap: fatigue/recovery debt exceeds the acceptable level (high over the configured threshold) for added volume today. No working sets prescribed today.",
          "when_to_add_load": "Reach 15 clean reps at 35 lb at RPE 9 or lower; then step up to 45 lb.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": 55,
                "reps": 8,
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
              "type": 2,
              "last": {
                "lbs": 65,
                "reps": 22,
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
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 20,
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
          "volumeLbs": 2970.0,
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
            "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
            "date": "2026-09-13",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 12,
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
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying shoulders muscle exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-13 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: shoulders muscle exposure 168h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume.",
            "Session workload hierarchy: same-session supplemental occurrence re-routed from supplemental_volume to skip_overlap -- seated_lateral_raise on the same muscle group (shoulders) was escalated to skip_overlap by fatigue_state=high in this session; same-session supplemental volume is reduced before a primary is compromised (weighted volume traded away: 1.2 of 2 raw working sets at weight 0.6, observability only)."
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
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=5)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (30) for 15 \u2014 it holds there because the top set has not yet earned its own load jump.",
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
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
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
          "volumeLbs": 1177.5,
          "gate_status": "confirmed",
          "gate_reason": null,
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
          "ignoredDecision": null,
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
          },
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
            "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
            "date": "2026-09-13",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 16,
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
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-09-13 (168h ago).",
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
          "action": "hold",
          "assess": "Last top set: 0 lb \u00d7 15 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), anomalous_set_excluded(reps=8,rpe=9,vs_reps=15,vs_rpe=9,cluster_size=3), isolation_load_jump_capped(from=0,to=5,pct=none,predicted_reps=8)</b> \u00b7 Hold 0 \u2014 no further load increment is available for this equipment; chase additional reps at this load, aim for cleaner execution/lower RPE at 0, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (0) for 17 \u2014 it holds there because the top set has not yet earned its own load jump.",
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
                "reps": "15\u201317",
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
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 0,
                "reps": "17",
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
                "reps": 17,
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
                "lbs": 0,
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
            "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
            "date": "2026-09-13",
            "sets": [
              {
                "lbs": null,
                "reps": 8,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 14,
                "rpe": 8.0
              },
              {
                "lbs": null,
                "reps": 12,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 4/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying abdominals muscle exposure: 2026-09-13 (168h ago).",
            "Most recent qualifying core_hip_flexion cluster exposure: 2026-09-13 (168h ago).",
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
          "assess": "Most recent primary session: 275 lb \u00d7 4 @ RPE 6, 300 lb \u00d7 9 @ RPE 9, 275 lb \u00d7 13 @ RPE 9, and 250 lb \u00d7 10 @ RPE 9 on 2026-09-19. Today's Day C occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_volume_exceeded_profile_slots(performed=2,slots=1,delta=1), bloodflow_plausibility_recompute(from=200,to=175,ref_load=175,ref_reps=20,ref_rpe=9,cap=7)</b> \u00b7 Blood-flow/recovery exposure \u2014 Triceps Pushdown received its primary progression work on 2026-09-19. Prescribe 150 lb \u00d7 8 @ RPE 5 and 175 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 300 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 305 lb.",
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
                "lbs": 150,
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
              "type": 2,
              "last": {
                "lbs": 175,
                "reps": 20,
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
          "volumeLbs": 7000.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=bloodflow_recovery).",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (assumed next-day spacing, not a logged session). This exercise's own recovery estimate (44h, stretch stimulus, low fatigue) extends to 2026-09-22, past that. Advisory only -- no volume was changed.",
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
            "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
            "date": "2026-09-19",
            "sets": [
              {
                "lbs": 275.0,
                "reps": 4,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 275.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 250.0,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-19 (24h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-09-19 (24h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-19 (24h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day B (2026-09-22, 48h away).",
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
      "date": "2026-09-19",
      "prevDate": "2026-09-12",
      "nextAvailable": {
        "earliest": "2026-09-23",
        "latest": "2026-09-24",
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
        "generated_at": "2026-09-26T06:30:16.700305",
        "fatigue_signal": {
          "bent over row barbell": 1.3782222182573198,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4220560586548864,
          "cross body hammer curl dumbbell": 0.33897004207731585,
          "incline bench press barbell": 1.240508303500291,
          "incline bicep curl dumbbell": 0.55013058227165,
          "lateral raise band": 1.074027658890305,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9127509659094513,
          "pull up assisted": 5.436668703414243,
          "rear_dumbbell_raise": 0.3511369042108573,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.5200879759797417,
          "triceps extension dumbbell": 0.5660316033062336,
          "triceps_pushdown": 5.302496293976025
        },
        "fatigue_accumulation": {
          "session_id": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
          "session_date": "2026-09-20T00:00:00",
          "global_fatigue_score": 7.247748851776123,
          "fatigue_trend_3": 7.878116130828857,
          "fatigue_trend_5": 8.031972885131836,
          "recovery_debt": 13.148003578186035
        },
        "deload_state": {
          "snapshot_date": "2026-09-25T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 7.247748851776123,
          "regression_trigger": 0.7333333492279053,
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
        "46m",
        "11 sets",
        "11.8k lbs"
      ],
      "summary": {
        "status": "progress",
        "headline": "DAY B - CHEST / TRICEPS \u2014 0 load\u2191 \u00b7 1 rep\u2191 \u00b7 0 hold \u00b7 4 non-primary excluded.",
        "assess": "5 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/5</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 4
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
          "action": "supplemental",
          "assess": "Most recent primary session: 165 lb \u00d7 9 @ RPE 9, 137.5 lb \u00d7 9 @ RPE 9, and 137.5 lb \u00d7 6 @ RPE 9 on 2026-09-12. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Incline Bench Press (Barbell) received its primary progression work on 2026-09-12. Prescribe 130 lb \u00d7 6 @ RPE 6, then 110 lb \u00d7 17 @ RPE 8 and 105 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 165 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 170 lb.",
          "when_to_add_load": "Reach 12 clean reps at 165 lb at RPE 9.5 or lower; then increase to 170 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 93.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 130,
                "reps": "6",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 132,
                "reps": 4,
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
                "lbs": 165,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 110,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 137.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 105,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 2695.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
            "date": "2026-09-12",
            "sets": [
              {
                "lbs": 93.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 132.0,
                "reps": 6,
                "rpe": 6.0
              },
              {
                "lbs": 165.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 137.5,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 137.5,
                "reps": 6,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior chest muscle exposure found.",
            "Most recent qualifying push_horizontal cluster exposure: 2026-09-12 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 78h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: push_horizontal cluster exposure 168h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 47.5 lb \u00d7 15 @ RPE 9 and 45 lb \u00d7 11 @ RPE 9 on 2026-09-12. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Chest Fly (Dumbbell) received its primary progression work on 2026-09-12. Prescribe 25 lb \u00d7 8 @ RPE 5, then 30 lb \u00d7 17 @ RPE 8 and 25 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 47.5 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 50 lb.",
          "when_to_add_load": "Reach 12 clean reps at 47.5 lb at RPE 9.5 or lower; then increase to 50 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 27.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 25,
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
                "lbs": 50,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 45,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 25,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 950.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
            "date": "2026-09-12",
            "sets": [
              {
                "lbs": 25.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 47.5,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 45.0,
                "reps": 11,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior chest muscle exposure found.",
            "Most recent qualifying chest_isolation cluster exposure: 2026-09-12 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group chest, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 54h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: chest_isolation cluster exposure 168h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 275 lb \u00d7 4 @ RPE 6, 300 lb \u00d7 13 @ RPE 9, 275 lb \u00d7 9 @ RPE 9, and 250 lb \u00d7 9 @ RPE 9 on 2026-09-12. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Triceps Extension (Dumbbell) received its primary progression work on 2026-09-12. Prescribe 200 lb \u00d7 17 @ RPE 8 and 195 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 300 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 305 lb.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "T",
              "last": {
                "lbs": 72.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 200,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 65,
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 195,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 45,
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
            }
          ],
          "volumeLbs": 1245.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
            "date": "2026-09-12",
            "sets": [
              {
                "lbs": 275.0,
                "reps": 4,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 275.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 250.0,
                "reps": 9,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying triceps muscle exposure: 2026-09-12 (168h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-12 (168h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: triceps muscle exposure 168h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "add_reps",
          "assess": "Last top set: 300 lb \u00d7 9 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass \u2014 set_role_conflict(warmup_labeled_set_at_working_effort(set 2 @ RPE 9))</b> \u00b7 Hold 300 \u2014 reps below anchor; chase reps to ~12 at RPE 9.5 before adding load. Back-off already reached its own 12-rep anchor at its own load (275) for 13-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
          "when_to_add_load": "Reach 12 clean reps at 300 lb at RPE 9.5 or lower; then increase to 305 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 275,
                "reps": 4,
                "rpe": 6
              },
              "prop": {
                "lbs": 165,
                "reps": "8",
                "rpe": 5.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
            {
              "type": "W",
              "last": {
                "lbs": 300,
                "reps": 9,
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
              "type": "T",
              "last": {
                "lbs": 275,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 300,
                "reps": "9\u201315",
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
                "lbs": 250,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 275,
                "reps": "13\u201315",
                "rpe": 9.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            }
          ],
          "volumeLbs": 6075.0,
          "gate_status": "confirmed",
          "gate_reason": "next_program: increase (fresh, cohort signal only \u2014 per-exercise gate governs the actual load)",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "increase",
              "decisionScore": 291.70666666666665,
              "decisionScoreRaw": 291.70666666666665,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": null
            },
            {
              "date": "2026-09-19",
              "decision": "increase",
              "decisionScore": 357.3316666666667,
              "decisionScoreRaw": 357.3316666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
              "outcome": {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 300.0,
                "actualReps": 9.0,
                "loadDelta": 0,
                "repDelta": -6,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-13",
              "decision": "increase",
              "decisionScore": 282.3733333333334,
              "decisionScoreRaw": 282.3733333333334,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": null
            },
            {
              "date": "2026-09-12",
              "decision": "increase",
              "decisionScore": 356.0816666666667,
              "decisionScoreRaw": 356.0816666666667,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
              "outcome": {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "behaviorClass": "volume_undershoot",
                "prescribedLoad": 300,
                "prescribedReps": 15,
                "prescribedRpe": 10,
                "actualLoad": 300.0,
                "actualReps": 13.0,
                "loadDelta": 0,
                "repDelta": -2,
                "confidence": 0.75
              }
            },
            {
              "date": "2026-09-07",
              "decision": "increase",
              "decisionScore": 282.54,
              "decisionScoreRaw": 282.54,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": null
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": {
            "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
            "behaviorClass": "volume_undershoot",
            "prescribedLoad": 300,
            "prescribedReps": 15,
            "prescribedRpe": 10,
            "actualLoad": 300.0,
            "actualReps": 9.0,
            "loadDelta": 0,
            "repDelta": -6,
            "confidence": 0.75
          },
          "effectiveness": {
            "window": [
              {
                "sessionId": "8f44dc51-c471-48ea-a970-2bb9e80e9bf0",
                "date": "2026-09-19",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
                "date": "2026-09-12",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "e055aa28-0acb-4d48-9133-8315426602b1",
                "date": "2026-09-06",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "42e54afe-afc7-4fee-994f-95083074b7d6",
                "date": "2026-09-01",
                "behaviorClass": "load_undershoot",
                "effectivenessScore": 0.0,
                "valid": true
              },
              {
                "sessionId": "210c8b25-4169-4ae2-8436-8c58e5fb1b0a",
                "date": "2026-08-27",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 0,
            "regressCount": 3,
            "neutralCount": 2,
            "scores": [
              -1.0,
              -1.0,
              0.0,
              0.0,
              -1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
            "date": "2026-09-12",
            "sets": [
              {
                "lbs": 275.0,
                "reps": 4,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 275.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 250.0,
                "reps": 9,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-12 (168h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-09-12 (168h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-12 (168h ago).",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3 decided: today's day (B) is the resolved primary-owner day (source=inferred) -> primary_progression."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 37.5 lb \u00d7 10 @ RPE 9 and 32.5 lb \u00d7 10 @ RPE 9 on 2026-09-15. Today's Day B occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Incline Bicep Curl (Dumbbell) received its primary progression work on 2026-09-15. Prescribe 20 lb \u00d7 8 @ RPE 5, then 25 lb \u00d7 17 @ RPE 8 and 20 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 37.5 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 40 lb.",
          "when_to_add_load": "Reach 12 clean reps at 37.5 lb at RPE 9.5 or lower; then increase to 40 lb.",
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
                "lbs": 20,
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
                "lbs": 25,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 12,
                "reps": 15,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
              "last": {
                "lbs": 22.5,
                "reps": 15,
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
              "type": 3,
              "last": {
                "lbs": 20,
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
          "volumeLbs": 817.5,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
            "date": "2026-09-15",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 37.5,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior biceps muscle exposure found.",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-15 (96h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: elbow_flexion_primary cluster exposure 96h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
          ]
        }
      ],
      "sequencingAdvisory": null
    },
    {
      "day": "A",
      "title": "DAY A \u2014 BACK / BICEPS",
      "date": "2026-09-15",
      "prevDate": "2026-09-10",
      "nextAvailable": {
        "earliest": "2026-09-19",
        "latest": "2026-09-20",
        "fatigue_state": "moderate",
        "driver": "back recovery (heavy stimulus, moderate fatigue, ~80h)"
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
        "generated_at": "2026-09-26T06:30:16.700305",
        "fatigue_signal": {
          "bent over row barbell": 1.3782222182573198,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4220560586548864,
          "cross body hammer curl dumbbell": 0.33897004207731585,
          "incline bench press barbell": 1.240508303500291,
          "incline bicep curl dumbbell": 0.55013058227165,
          "lateral raise band": 1.074027658890305,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9127509659094513,
          "pull up assisted": 5.436668703414243,
          "rear_dumbbell_raise": 0.3511369042108573,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.5200879759797417,
          "triceps extension dumbbell": 0.5660316033062336,
          "triceps_pushdown": 5.302496293976025
        },
        "fatigue_accumulation": {
          "session_id": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
          "session_date": "2026-09-20T00:00:00",
          "global_fatigue_score": 7.247748851776123,
          "fatigue_trend_3": 7.878116130828857,
          "fatigue_trend_5": 8.031972885131836,
          "recovery_debt": 13.148003578186035
        },
        "deload_state": {
          "snapshot_date": "2026-09-25T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 7.247748851776123,
          "regression_trigger": 0.7333333492279053,
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
        "63m",
        "13 sets",
        "10.6k lbs"
      ],
      "summary": {
        "status": "hold",
        "headline": "DAY A \u2014 BACK / BICEPS \u2014 0 load\u2191 \u00b7 0 rep\u2191 \u00b7 0 hold \u00b7 6 non-primary excluded.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>6/6</b> prescriptions passed the validation gate.",
        "nonPrimaryExcluded": 6
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
          "action": "supplemental",
          "assess": "Most recent primary session: 150 lb \u00d7 7 @ RPE 7.5, 150 lb \u00d7 7 @ RPE 8.5, and 175 lb \u00d7 6 @ RPE 10 on 2026-05-13. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 anomalous_set_excluded(reps=9,rpe=10,vs_reps=7,vs_rpe=8,cluster_size=2), reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Pull Up (Assisted) received its primary progression work on 2026-05-13. Prescribe 175 assist \u00d7 17 @ RPE 8 and 200 assist \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 150 assist \u00d7 15 clean reps at RPE 10 or lower before increasing to 150 assist.",
          "when_to_add_load": "Reach 15 clean reps with 150 lb assistance at RPE 10 or lower; then reduce assistance to 125 lb.",
          "sets": [
            {
              "type": "T",
              "last": {
                "lbs": 175,
                "reps": 13,
                "rpe": 9
              },
              "prop": {
                "lbs": 175.0,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 175,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 200.0,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 225,
                "reps": 6,
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
                "lbs": 200,
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
            }
          ],
          "volumeLbs": 3850.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "increase",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "d764d3ea-3ea5-405c-a904-17ff28021091",
            "date": "2026-05-13",
            "sets": [
              {
                "lbs": 150.0,
                "reps": 7,
                "rpe": 7.5
              },
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
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior lats muscle exposure found.",
            "Most recent qualifying pull_vertical cluster exposure: 2026-05-13 (3000h ago).",
            "Fatigue state for this occurrence: 'elevated'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group lats, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: pull_vertical cluster exposure 3000h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 154 lb \u00d7 11 @ RPE 9 and 143 lb \u00d7 10 @ RPE 9 on 2026-09-10. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Bent Over Row (Barbell) received its primary progression work on 2026-09-10. Prescribe 120 lb \u00d7 5 @ RPE 6, then 105 lb \u00d7 17 @ RPE 8 and 100 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 154 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 160 lb.",
          "when_to_add_load": "Reach 12 clean reps at 154 lb at RPE 9.5 or lower; then increase to 160 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 88,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 120,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": "W",
              "last": {
                "lbs": 126.5,
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
                "lbs": 159.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 105,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 148.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 100,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 2772.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
            "date": "2026-09-10",
            "sets": [
              {
                "lbs": 88.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 121.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 154.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 143.0,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior upperback muscle exposure found.",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-09-10 (120h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: pull_horizontal cluster exposure 120h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 22.5 lb \u00d7 15 @ RPE 9 and 22.8 lb \u00d7 15 @ RPE 9 on 2026-09-13. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Incline Bicep Curl (Dumbbell) received its primary progression work on 2026-09-13. Prescribe 15 lb \u00d7 10 @ RPE 5, then 15 lb \u00d7 17 @ RPE 8 and 10 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 22.8 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 30 lb.",
          "when_to_add_load": "Reach 12 clean reps at 22.8 lb at RPE 9.5 or lower; then increase to 30 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "10",
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
                "lbs": 37.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 15,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 10,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 700.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
            "date": "2026-09-13",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 10,
                "rpe": 5.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 22.8,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior biceps muscle exposure found.",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-13 (48h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5 decided: elbow_flexion_primary cluster exposure 48h ago against a 50h recovery window -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 154 lb \u00d7 11 @ RPE 9 and 143 lb \u00d7 10 @ RPE 9 on 2026-09-10. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 One Arm Row (Dumbbell) received its primary progression work on 2026-09-10. Prescribe 120 lb \u00d7 5 @ RPE 6, then 105 lb \u00d7 17 @ RPE 8 and 100 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 154 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 160 lb.",
          "when_to_add_load": "Reach 12 clean reps at 154 lb at RPE 9.5 or lower; then increase to 160 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 47.5,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 120,
                "reps": "5",
                "rpe": 6.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
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
              "engine_role": null
            },
            {
              "type": "T",
              "last": {
                "lbs": 85,
                "reps": 11,
                "rpe": 9
              },
              "prop": {
                "lbs": 105,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 4,
              "last": {
                "lbs": 75,
                "reps": 12,
                "rpe": 9
              },
              "prop": {
                "lbs": 100,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 1835.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
            "date": "2026-09-10",
            "sets": [
              {
                "lbs": 88.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 121.0,
                "reps": 5,
                "rpe": 6.0
              },
              {
                "lbs": 154.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 143.0,
                "reps": 10,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior upperback muscle exposure found.",
            "Most recent qualifying pull_horizontal cluster exposure: 2026-09-10 (120h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (heavy stimulus, muscle group upperback, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 80h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: pull_horizontal cluster exposure 120h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
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
          "action": "supplemental",
          "assess": "Most recent primary session: 22.5 lb \u00d7 15 @ RPE 9 and 22.8 lb \u00d7 15 @ RPE 9 on 2026-09-13. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Cross Body Hammer Curl (Dumbbell) received its primary progression work on 2026-09-13. Prescribe 15 lb \u00d7 10 @ RPE 5, then 15 lb \u00d7 17 @ RPE 8 and 10 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 22.8 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 30 lb.",
          "when_to_add_load": "Reach 12 clean reps at 22.8 lb at RPE 9.5 or lower; then increase to 30 lb.",
          "sets": [
            {
              "type": "W",
              "last": {
                "lbs": 20,
                "reps": 8,
                "rpe": 5
              },
              "prop": {
                "lbs": 15,
                "reps": "10",
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
                "lbs": 37.5,
                "reps": 9,
                "rpe": 9
              },
              "prop": {
                "lbs": 15,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 3,
              "last": {
                "lbs": 32.5,
                "reps": 10,
                "rpe": 9
              },
              "prop": {
                "lbs": 10,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            }
          ],
          "volumeLbs": 662.5,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": {
            "date": "2026-09-15",
            "decision": "hold",
            "source": "program_builder_v2"
          },
          "outcome": null,
          "effectiveness": null,
          "occurrenceRole": "supplemental_volume",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
            "date": "2026-09-13",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 10,
                "rpe": 5.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              },
              {
                "lbs": 22.8,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior biceps muscle exposure found.",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-13 (48h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5 decided: elbow_flexion_primary cluster exposure 48h ago against a 50h recovery window -> supplemental_volume."
          ]
        },
        {
          "name": "Seated Lateral Raise",
          "icon": "\ud83d\uded7",
          "muscleGroup": "shoulders",
          "rest": "1:30",
          "cues": [],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 30 lb \u00d7 11 @ RPE 9, 25 lb \u00d7 13 @ RPE 9, and 22.5 lb \u00d7 15 @ RPE 9 on 2026-08-25. Today's Day A occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_volume_exceeded_profile_slots(performed=3,slots=2,delta=1)</b> \u00b7 Supplemental volume \u2014 Seated Lateral Raise received its primary progression work on 2026-08-25. Prescribe 15 lb \u00d7 8 @ RPE 5, then 20 lb \u00d7 17 @ RPE 8 and 15 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 30 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 35 lb.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
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
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 15,
                "reps": 20,
                "rpe": 7
              },
              "prop": {
                "lbs": 15,
                "reps": "17",
                "rpe": 8.0,
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
                "reps": 12,
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
              "type": 3,
              "last": {
                "lbs": 17.5,
                "reps": 12,
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
          "volumeLbs": 750.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
            "date": "2026-08-25",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-08-25 (504h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-13 (48h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-13 (48h ago).",
            "Fatigue state for this occurrence: 'low'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Upcoming primary exposure expected on day C (2026-09-20, 120h away).",
            "Level 3: resolved primary-owner day is C, not today's A; continuing to history/recovery evidence.",
            "Level 4: exact-exercise exposure 504h ago is at or past full recovery (52h); not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
          ]
        }
      ],
      "sequencingAdvisory": "\"Incline Bicep Curl (Dumbbell)\" (isolation/accessory) is displayed before \"One Arm Row (Dumbbell)\" (a major/compound movement) -- major movements are usually sequenced first so accessory fatigue doesn't compromise them. ASSUMPTION, not a confirmed defect: this reflects the displayed/template order the session was logged in, not verified execution order -- VOLM logs no per-set/per-group timestamps, only session-level start/end times."
    },
    {
      "day": "C",
      "title": "DAY C \u2014 DELTS / ABS",
      "date": "2026-09-13",
      "prevDate": "2026-09-07",
      "nextAvailable": {
        "earliest": "2026-09-16",
        "latest": "2026-09-17",
        "fatigue_state": "high",
        "driver": "delts recovery (stretch stimulus, high fatigue, ~64h)"
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
        "generated_at": "2026-09-26T06:30:16.700305",
        "fatigue_signal": {
          "bent over row barbell": 1.3782222182573198,
          "chest dip assisted": 0.9375,
          "chest fly dumbbell": 0.4220560586548864,
          "cross body hammer curl dumbbell": 0.33897004207731585,
          "incline bench press barbell": 1.240508303500291,
          "incline bicep curl dumbbell": 0.55013058227165,
          "lateral raise band": 1.074027658890305,
          "lateral raise dumbbell": 0.09,
          "one arm row dumbbell": 0.9127509659094513,
          "pull up assisted": 5.436668703414243,
          "rear_dumbbell_raise": 0.3511369042108573,
          "reverse fly dumbbell": 0.09,
          "seated_lateral_raise": 0.5200879759797417,
          "triceps extension dumbbell": 0.5660316033062336,
          "triceps_pushdown": 5.302496293976025
        },
        "fatigue_accumulation": {
          "session_id": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
          "session_date": "2026-09-20T00:00:00",
          "global_fatigue_score": 7.247748851776123,
          "fatigue_trend_3": 7.878116130828857,
          "fatigue_trend_5": 8.031972885131836,
          "recovery_debt": 13.148003578186035
        },
        "deload_state": {
          "snapshot_date": "2026-09-25T00:00:00",
          "deload_flag": true,
          "pre_deload_flag": false,
          "trigger_type": "fatigue",
          "fatigue_trigger": 7.247748851776123,
          "regression_trigger": 0.7333333492279053,
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
        "59m",
        "23 sets",
        "20.5k lbs"
      ],
      "summary": {
        "status": "review",
        "headline": "DAY C \u2014 DELTS / ABS \u2014 0 load\u2191 \u00b7 0 rep\u2191 \u00b7 3 hold \u00b7 3 non-primary excluded.",
        "assess": "6 exercises. Last = what you performed; Proposed = Yates/Mentzer model: warm-up ramp \u2192 one top set to failure (RPE 9.5\u201310) \u2192 RPE-9 back-off. Load, reps and RPE are computed together (load\u2191 \u21d2 reps reset).",
        "prescription": "QC: <b>5/6</b> prescriptions passed the validation gate; <b>1 flagged</b> \u2014 see the \u2717 tags below.",
        "nonPrimaryExcluded": 3
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
          "action": "hold",
          "assess": "Last top set: 30 lb \u00d7 12 @ RPE 10 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Held, not progressed: 30 lb \u00d7 12, a single top set only. Same-session volume on this muscle group was reduced first, so this exercise keeps one held set instead of being skipped or advanced.",
          "when_to_add_load": "Reach 12 clean reps at 30 lb at RPE 9.5 or lower; then increase to 35 lb.",
          "sets": [
            {
              "type": "T",
              "last": {
                "lbs": 30,
                "reps": 12,
                "rpe": 10
              },
              "prop": {
                "lbs": 30,
                "reps": "12",
                "rpe": 9.5,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": "working"
            },
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
              "engine_role": "warmup"
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
              "engine_role": "working"
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
              "engine_role": "working"
            }
          ],
          "volumeLbs": 1120.0,
          "gate_status": "confirmed",
          "gate_reason": null,
          "recoveryOverlapWarning": null,
          "rpeAdjustmentAdvisory": null,
          "decisionHistory": [
            {
              "date": "2026-09-20",
              "decision": "hold",
              "decisionScore": 34.3525,
              "decisionScoreRaw": 34.3525,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "27fcd966-09c8-4a0d-a76c-2c6e8a6c0341",
              "outcome": null
            },
            {
              "date": "2026-09-15",
              "decision": "hold",
              "decisionScore": 25.87333333333333,
              "decisionScoreRaw": 25.87333333333333,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "58b272ee-caf2-4acc-957e-2b6e08e7618f",
              "outcome": null
            },
            {
              "date": "2026-09-13",
              "decision": "hold",
              "decisionScore": 34.29,
              "decisionScoreRaw": 34.29,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "16da60fc-24ec-4836-8f87-89f802947f99",
              "outcome": null
            },
            {
              "date": "2026-09-10",
              "decision": "hold",
              "decisionScore": 25.9775,
              "decisionScoreRaw": 25.9775,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
              "outcome": null
            },
            {
              "date": "2026-09-07",
              "decision": "hold",
              "decisionScore": 33.51916666666666,
              "decisionScoreRaw": 33.51916666666666,
              "controlProgressionBias": 0.2,
              "controlRegressionSensitivity": -0.2,
              "controlState": "in_band",
              "decisionSource": "program_builder_v2",
              "sessionId": "f81dea43-af5c-4658-9661-206305351212",
              "outcome": null
            }
          ],
          "increaseCutoff": 0.75,
          "reduceCutoff": -1.25,
          "ignoredDecision": null,
          "outcome": null,
          "effectiveness": {
            "window": [
              {
                "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
                "date": "2026-08-25",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "6e91840d-be60-4550-9c3f-049e3836415f",
                "date": "2026-08-21",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "641a1853-7827-45ff-b9b9-6347daf5e5fe",
                "date": "2026-08-15",
                "behaviorClass": "volume_undershoot",
                "effectivenessScore": -1.0,
                "valid": true
              },
              {
                "sessionId": "7fe9abef-24e5-4622-9f61-473bb8ae9e64",
                "date": "2026-08-08",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              },
              {
                "sessionId": "716c7d04-94d1-4009-a62b-514f2a228dbc",
                "date": "2026-08-04",
                "behaviorClass": "volume_overshoot",
                "effectivenessScore": 1.0,
                "valid": true
              }
            ],
            "validCount": 5,
            "progressCount": 3,
            "regressCount": 2,
            "neutralCount": 0,
            "scores": [
              -1.0,
              1.0,
              -1.0,
              1.0,
              1.0
            ]
          },
          "occurrenceRole": "primary_progression",
          "roleSource": "recovery_override",
          "roleConfidence": "medium",
          "primaryReference": {
            "sessionId": "f308cefb-9b0e-4481-acbd-1617a58bac3e",
            "date": "2026-08-25",
            "sets": [
              {
                "lbs": 15.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 11,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 22.5,
                "reps": 15,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 5/6 ownership signals over the runner-up (0).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-08-25 (456h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-07 (144h ago).",
            "Fatigue state for this occurrence: 'high'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 52h.",
            "Level 3 decided: today's day (C) is the resolved primary-owner day (source=inferred) -> primary_progression.",
            "Escalation: fatigue_state=high overrides the history_inference-decided primary_progression result -> skip_overlap (bounded post-resolution escalation; single destination, cannot override a manual override).",
            "Session workload hierarchy: restored to primary_progression and held at reduced volume (a single top set at its last performed load) instead of skip_overlap -- same-session volume on the same muscle group (shoulders) from lateral_raise_(band) was traded away first (weighted volume 1.8, observability only; the ratified weights never decide whether or how much is reduced)."
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
          "action": "skip_overlap",
          "assess": "Most recent primary session: 30 lb \u00d7 12 @ RPE 10, 25 lb \u00d7 15 @ RPE 8, and 22.5 lb \u00d7 13 @ RPE 9 on 2026-09-07.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 OMIT \u2014 Lateral Raise (Band) classified skip_overlap: fatigue/recovery debt exceeds the acceptable level (high over the configured threshold) for added volume today. No working sets prescribed today.",
          "when_to_add_load": "Reach 15 clean reps at 35 lb at RPE 9 or lower; then step up to 45 lb.",
          "sets": [
            {
              "type": 1,
              "last": {
                "lbs": 55,
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
              "type": 2,
              "last": {
                "lbs": 65,
                "reps": 21,
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
              "type": 3,
              "last": {
                "lbs": 55,
                "reps": 17,
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
                "lbs": 45,
                "reps": 20,
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
          "volumeLbs": 3475.0,
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
            "sessionId": "f81dea43-af5c-4658-9661-206305351212",
            "date": "2026-09-07",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 12,
                "rpe": 10.0
              },
              {
                "lbs": 25.0,
                "reps": 15,
                "rpe": 8.0
              },
              {
                "lbs": 22.5,
                "reps": 13,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": false,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "Most recent qualifying shoulders muscle exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying shoulder_lateral cluster exposure: 2026-09-07 (144h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (volume stimulus, muscle group shoulders, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 40h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: shoulders muscle exposure 144h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume.",
            "Session workload hierarchy: same-session supplemental occurrence re-routed from supplemental_volume to skip_overlap -- seated_lateral_raise on the same muscle group (shoulders) was escalated to skip_overlap by fatigue_state=high in this session; same-session supplemental volume is reduced before a primary is compromised (weighted volume traded away: 1.8 of 3 raw working sets at weight 0.6, observability only)."
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
          "assess": "Last top set: 30 lb \u00d7 15 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2717 QC fail: dropped_working_set(performed=3,slots=2), isolation_load_jump_capped(from=30,to=35,pct=16.6667,predicted_reps=7)</b> \u00b7 Hold 30 \u2014 the smallest available step (30\u219235) would exceed the 10% isolation load-jump cap; chase additional reps at this load, aim for cleaner execution/lower RPE at 30, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (30) for 16 \u2014 it holds there because the top set has not yet earned its own load jump.",
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
                "reps": 15,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "15\u201316",
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
                "reps": 16,
                "rpe": 9
              },
              "prop": {
                "lbs": 30,
                "reps": "16",
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
          "volumeLbs": 1265.0,
          "gate_status": "confirmed",
          "gate_reason": null,
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
          "ignoredDecision": null,
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
          },
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
            "sessionId": "f81dea43-af5c-4658-9661-206305351212",
            "date": "2026-09-07",
            "sets": [
              {
                "lbs": 17.5,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 30.0,
                "reps": 10,
                "rpe": 9.0
              },
              {
                "lbs": 27.5,
                "reps": 14,
                "rpe": 9.0
              },
              {
                "lbs": 25.0,
                "reps": 16,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": true,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 6/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'highest relative load'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Day C wins 'existing progression history'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying shoulders muscle exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying shoulder_rear cluster exposure: 2026-09-07 (144h ago).",
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
          "qc": "pass",
          "action": "hold",
          "assess": "Last top set: 0 lb \u00d7 12 @ RPE 9 \u00b7 cable_or_machine \u00b7 anchor 12 reps.",
          "rationale": "<b>\u2713 QC pass \u2014 anomalous_set_excluded(reps=8,rpe=9,vs_reps=11,vs_rpe=9,cluster_size=4), isolation_load_jump_capped(from=0,to=5,pct=none,predicted_reps=8)</b> \u00b7 Hold 0 \u2014 no further load increment is available for this equipment; chase additional reps at this load, aim for cleaner execution/lower RPE at 0, or plan a slower progression before forcing the jump. Back-off already reached its own 12-rep anchor at its own load (0) for 14-15 \u2014 it holds there because the top set has not yet earned its own load jump.",
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
                "reps": "12\u201315",
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
                "reps": 8,
                "rpe": 9
              },
              "prop": {
                "lbs": 0,
                "reps": "14\u201315",
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
                "reps": 14,
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
              "engine_role": "working"
            },
            {
              "type": 4,
              "last": {
                "lbs": 0,
                "reps": 10,
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
              "type": 5,
              "last": {
                "lbs": 0,
                "reps": 10,
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
            "sessionId": "f81dea43-af5c-4658-9661-206305351212",
            "date": "2026-09-07",
            "sets": [
              {
                "lbs": null,
                "reps": 8,
                "rpe": 9.0
              },
              {
                "lbs": null,
                "reps": 15,
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
            "role read from persisted occurrence_role table",
            "Day C inferred as primary owner: won 4/6 ownership signals over the runner-up (-1).",
            "Day C wins 'highest top-set effort (RPE)'.",
            "Day C wins 'greatest qualifying working-set count'.",
            "Day C wins 'consistent top-set-plus-backoff structure'.",
            "Day C wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying abdominals muscle exposure: 2026-09-07 (144h ago).",
            "Most recent qualifying core_hip_flexion cluster exposure: 2026-09-07 (144h ago).",
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
          "assess": "Most recent primary session: 275 lb \u00d7 4 @ RPE 6, 300 lb \u00d7 13 @ RPE 9, 275 lb \u00d7 9 @ RPE 9, and 250 lb \u00d7 9 @ RPE 9 on 2026-09-12. Today's Day C occurrence is classified as a blood-flow/recovery exposure.",
          "rationale": "<b>\u2713 QC pass</b> \u00b7 Blood-flow/recovery exposure \u2014 Triceps Pushdown received its primary progression work on 2026-09-12. Prescribe 150 lb \u00d7 8 @ RPE 5 and 200 lb \u00d7 20 @ RPE 7 maximum. Stop each working set at 20 reps or RPE 7, whichever occurs first. Today's performance is excluded from primary progression decisions. The primary progression remains 300 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 305 lb.",
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
                "lbs": 150,
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
                "lbs": 200,
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
                "lbs": 150,
                "reps": 15,
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
              "type": 2,
              "last": {
                "lbs": 200,
                "reps": 20,
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
              "type": 3,
              "last": {
                "lbs": 200,
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
            },
            {
              "type": 4,
              "last": {
                "lbs": 200,
                "reps": 12,
                "rpe": null
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
              "type": 5,
              "last": {
                "lbs": 200,
                "reps": 14,
                "rpe": null
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
          "volumeLbs": 13850.0,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=bloodflow_recovery).",
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
          "occurrenceRole": "bloodflow_recovery",
          "roleSource": "history_inference",
          "roleConfidence": "high",
          "primaryReference": {
            "sessionId": "d723d8cd-57e3-4683-8310-ae3f913a9f1c",
            "date": "2026-09-12",
            "sets": [
              {
                "lbs": 275.0,
                "reps": 4,
                "rpe": 6.0
              },
              {
                "lbs": 300.0,
                "reps": 13,
                "rpe": 9.0
              },
              {
                "lbs": 275.0,
                "reps": 9,
                "rpe": 9.0
              },
              {
                "lbs": 250.0,
                "reps": 9,
                "rpe": 9.0
              }
            ]
          },
          "progressionEligible": false,
          "fatigueVolumeEligible": true,
          "classificationReasons": [
            "role read from persisted occurrence_role table",
            "Day B inferred as primary owner: won 4/6 ownership signals over the runner-up (0).",
            "Day B wins 'highest top-set effort (RPE)'.",
            "Day B wins 'greatest qualifying working-set count'.",
            "Day B wins 'consistent top-set-plus-backoff structure'.",
            "Day B wins 'rotation frequency (most appearances)'.",
            "Most recent qualifying exact-exercise exposure: 2026-09-12 (24h ago).",
            "Most recent qualifying triceps muscle exposure: 2026-09-12 (24h ago).",
            "Most recent qualifying elbow_extension_primary cluster exposure: 2026-09-12 (24h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group triceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Upcoming primary exposure expected on day B (2026-09-19, 144h away).",
            "Level 3: resolved primary-owner day is B, not today's C; continuing to history/recovery evidence.",
            "Level 4 decided: exact-exercise exposure 24h ago against a 50h recovery window -> bloodflow_recovery."
          ]
        },
        {
          "name": "Incline Bicep Curl (Dumbbell)",
          "icon": "\ud83d\udcaa",
          "muscleGroup": "biceps",
          "rest": "2:00",
          "cues": [
            "Strict form only",
            "No failure",
            "Continuous tension",
            "Pump and stretch focus",
            "Do not create spillover fatigue"
          ],
          "noWeight": false,
          "loading_type": "cable_or_machine",
          "qc": "pass",
          "action": "supplemental",
          "assess": "Most recent primary session: 37.5 lb \u00d7 10 @ RPE 9 and 32.5 lb \u00d7 11 @ RPE 9 on 2026-09-10. Today's Day C occurrence is classified as a supplemental-volume exposure.",
          "rationale": "<b>\u2713 QC pass \u2014 reference_resolution_fallback(tier=cluster)</b> \u00b7 Supplemental volume \u2014 Incline Bicep Curl (Dumbbell) received its primary progression work on 2026-09-10. Prescribe 20 lb \u00d7 8 @ RPE 5, then 25 lb \u00d7 17 @ RPE 8 and 20 lb \u00d7 17 @ RPE 8, stopping at 17 reps or RPE 8, whichever occurs first. Today's performance does not affect primary progression. The primary progression remains 37.5 lb \u00d7 12 clean reps at RPE 9.5 or lower before increasing to 40 lb.",
          "when_to_add_load": "Reach 12 clean reps at 37.5 lb at RPE 9.5 or lower; then increase to 40 lb.",
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
                "lbs": 20,
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
                "lbs": 25,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 1,
              "last": {
                "lbs": 15,
                "reps": 10,
                "rpe": 5
              },
              "prop": {
                "lbs": 20,
                "reps": "17",
                "rpe": 8.0,
                "tempo_seconds": null,
                "pause_seconds": null,
                "rom_note": null
              },
              "engine_role": null
            },
            {
              "type": 2,
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
            },
            {
              "type": 3,
              "last": {
                "lbs": 22.8,
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
          "volumeLbs": 829.5,
          "gate_status": "no_signal",
          "gate_reason": "Decision gate not applicable to a non-primary occurrence (occurrenceRole=supplemental_volume).",
          "recoveryOverlapWarning": "Day A (back/arms) also trains arms (the logged Day A session on 2026-09-15). This exercise's own recovery estimate (50h, stretch stimulus, moderate fatigue) extends to 2026-09-16, past that. Advisory only -- no volume was changed.",
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
          "occurrenceRole": "supplemental_volume",
          "roleSource": "fallback",
          "roleConfidence": "low",
          "primaryReference": {
            "sessionId": "957008a5-c3e2-479d-a3ea-bb75a015c252",
            "date": "2026-09-10",
            "sets": [
              {
                "lbs": 20.0,
                "reps": 8,
                "rpe": 5.0
              },
              {
                "lbs": 37.5,
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
            "role read from persisted occurrence_role table",
            "No exposures of this exercise could be matched to a known day letter; cannot infer a primary-owner day.",
            "No qualifying prior exact-exercise exposure found.",
            "No qualifying prior biceps muscle exposure found.",
            "Most recent qualifying elbow_flexion_primary cluster exposure: 2026-09-10 (72h ago).",
            "Fatigue state for this occurrence: 'moderate'.",
            "Recovery-hours band width for this occurrence (stretch stimulus, muscle group biceps, evaluated at a fixed moderate-fatigue baseline -- levels 4/5 own history recency alone): 50h.",
            "Level 3: primary-owner day could not be resolved (ambiguous or no history); not granting primary_progression on an unresolved owner.",
            "Level 5: elbow_flexion_primary cluster exposure 72h ago is at or past full recovery; not deciding.",
            "Level 8 (fallback): competing evidence existed but no level's threshold was met -> supplemental_volume."
          ]
        }
      ],
      "sequencingAdvisory": null
    }
  ]
};
