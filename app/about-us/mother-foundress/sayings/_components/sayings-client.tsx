'use client';

import { Input } from '@/components/ui/input';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion } from 'framer-motion';
import { Filter, Quote, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

const sayings = [
  {
    id: 1,
    text: 'Every step of my life God has led and I have followed.',
    category: 'Faith',
  },
  { id: 2, text: 'Make every action a prayer.', category: 'Prayer' },
  {
    id: 3,
    text: "Your life and action all through the day should reflect God's presence in you.",
    category: 'Living Faith',
  },
  {
    id: 4,
    text: 'Only prayers can win the favours I want.',
    category: 'Prayer',
  },
  {
    id: 5,
    text: 'If we wish to learn to live with Jesus and at the same time to work for Jesus, His Mother must be our model and our guide',
    category: 'Mary',
  },
  {
    id: 6,
    text: 'Close union and constant recourse to our Lord will help you',
    category: 'Prayer',
  },
  {
    id: 7,
    text: 'I am more than ever convinced that we must lead altogether supernatural lives if we really want to make true Christians of the women and girls',
    category: 'Spirituality',
  },
  {
    id: 8,
    text: 'To desire only to please God, to fear only to disappoint Him, means perfect peace',
    category: 'Peace',
  },
  {
    id: 9,
    text: 'Only the best is good enough for God no matter the inconveniences',
    category: 'Commitment',
  },
  {
    id: 10,
    text: 'God knows all the needs of His Children in Africa and he loves them infinitely more than I do',
    category: 'Faith',
  },
  {
    id: 11,
    text: 'Be docile to thine Unseen Guide, Love Him as he loves thee: time and obedience are enough and thou a Saint shall be',
    category: 'Obedience',
  },
  {
    id: 12,
    text: 'No man ever guarded and cherished and cared for the woman he loved, as he will cherish and watch over you if you live only for Him and abandon yourself with perfect trust to His care',
    category: 'Trust',
  },
  {
    id: 13,
    text: 'God works in a special way through those consecrated and united to Him',
    category: 'Consecration',
  },
  {
    id: 14,
    text: 'It matters much more what we are than what we teach. We do not want good secular teachers or clever nurses, but spiritually-minded Religious who are nervously prepared to refuse God nothing if only they are allowed to win souls for him',
    category: 'Ministry',
  },
  {
    id: 15,
    text: 'Others will look up to you for guidance and if anyone else feels the way you do, you will be able to guide and direct them',
    category: 'Leadership',
  },
  {
    id: 16,
    text: 'They are children to be taught and trained in the love of God, for the purpose for which life was given – to love God and neighbour – to live as children of God',
    category: 'Education',
  },
  {
    id: 17,
    text: 'There are souls to be saved, pagans bring to the knowledge of God, the few who had a little knowledge of God, need to be helped to deepen it',
    category: 'Mission',
  },
  {
    id: 18,
    text: 'If the caritas Christi has really gripped the soul, its urging to Apostolic Labours will at once be felt',
    category: 'Service',
  },
  {
    id: 19,
    text: 'We have an enormous opportunity of guiding and forming the character of the young generation and so of determining the form of civilization that is coming so quickly to them',
    category: 'Education',
  },
  {
    id: 20,
    text: 'There is much good in the girls but we shall need to go very slowly and to lay deep foundation',
    category: 'Formation',
  },
  {
    id: 21,
    text: "We want each child to keep true to God all through life's allurments, dangers and sorrows",
    category: 'Formation',
  },
  {
    id: 22,
    text: "For this we must know the weak point in each one's character; teach her to know it herself, and win her to the desire of self-conquest",
    category: 'Formation',
  },
  {
    id: 23,
    text: 'I cannot take back the consecration I have made of my life to the Missions',
    category: 'Commitment',
  },
  {
    id: 24,
    text: 'I love the people old and young. Human nature is the same everywhere and kindness opens the heart of all.',
    category: 'Love',
  },
  {
    id: 25,
    text: 'I have often wondered what was the special gift that God had given me that had brought success to my work apart from the fact that it is His will to bless it, I think it is, that He has given me the power to see the easiest and simplest way of doing things',
    category: 'Wisdom',
  },
  {
    id: 26,
    text: 'Pray for one another, help one another and intensify your spirit of service and sacrifice wherever you are and in whatever you do',
    category: 'Community',
  },
  {
    id: 27,
    text: 'I must leave all to God and wait and pray',
    category: 'Trust',
  },
  {
    id: 28,
    text: 'We certainly do not understand what God is doing, but he knows. "Be still and know that I am God" this is my greatest source of help',
    category: 'Trust',
  },
  {
    id: 29,
    text: 'Our share in His shame and humiliation will generally be looking foolish and feeling foolish in the little things of daily life',
    category: 'Sacrifice',
  },
  {
    id: 30,
    text: 'The cure for all pain arising either from self-consciousness or nervousness is the remembrance of the presence of God',
    category: 'Peace',
  },
  { id: 31, text: 'No one can do enough for God', category: 'Service' },
  {
    id: 32,
    text: 'All our works of Charity and zeal have for their ultimate object, the drawing of souls to God',
    category: 'Service',
  },
  {
    id: 33,
    text: 'I am confident that God will give me the necessary help and grace to carry on',
    category: 'Faith',
  },
  {
    id: 34,
    text: 'One of the most striking things about my girls is that they are so business-like and capable all-round',
    category: 'Education',
  },
  {
    id: 35,
    text: 'They(my girls) have intelligence and use it. A girl of 15 years can control a catechism class of 100 women and really teach them',
    category: 'Education',
  },
  {
    id: 36,
    text: 'Work for the poor brings with it much consolation though at times, disillusionment and weariness',
    category: 'Service',
  },
  {
    id: 37,
    text: 'I had to pray earnestly to God, that if this work is for Him and is to continue after my death, He has to inspire Nigerians Girls to the religious life',
    category: 'Prayer',
  },
  { id: 38, text: 'One can only say "God knows all"', category: 'Faith' },
  { id: 39, text: 'I worked as I was directed', category: 'Obedience' },
  {
    id: 40,
    text: "At every stage of His public ministry, Jesus started with a serious prayer to His father, so that all he did would be His father's Holy Will",
    category: 'Prayer',
  },
  {
    id: 41,
    text: 'True politeness and true charity both consist in trying to put people at their ease, and in sparing inconveniences, discomfort or pain',
    category: 'Charity',
  },
  {
    id: 42,
    text: 'Fierce the wild tempest, Dark was the night, Oars laboured heavily, Foam glimmered white, trembled the mariners, Peril was nigh, when said the God of gods "Peace it is I"',
    category: 'Peace',
  },
  {
    id: 43,
    text: 'Ridge the mountain wave lower thy crest, wail of Euroclidon be thou at rest. Danger can never be, succor is nigh when says the Lord of lords \'Peace it is I"',
    category: 'Peace',
  },
  {
    id: 44,
    text: 'Jesus, Deliverer, come thou to me. Sooth thou my voyaging over life\'s sea thou when the storm of death roars sweeping by, Whisper, O Truth, of Truth "Peace it is I"',
    category: 'Peace',
  },
  {
    id: 45,
    text: 'And Thou wilt to my darkness surely bring all that I need – for my extremity Gives to thy love its opportunity',
    category: 'Trust',
  },
  { id: 46, text: 'And so I await thy Coming O my King', category: 'Hope' },
  {
    id: 47,
    text: "My soul's dark night in quietness shall wait The breaking of thy dawn Compassionate",
    category: 'Hope',
  },
  {
    id: 48,
    text: "There is such a huge work for god and for souls opening before us; on the other hand satan is of course using every effort to hinder progress and we need to out-wit him with God's grace",
    category: 'Spiritual Warfare',
  },
  {
    id: 49,
    text: 'All who share in Apostolic work must in their degree fill up in themselves those things which are wanting to the suffering of Christ',
    category: 'Sacrifice',
  },
  {
    id: 50,
    text: 'A certain amount of suffering there must be, it is the price of the true success of the work, "the filling up of those things that are wanting to the passion of Christ"',
    category: 'Sacrifice',
  },
  {
    id: 51,
    text: 'But all these misunderstandings and sorrows are part of the price for souls. Nothing matters but souls.',
    category: 'Mission',
  },
  {
    id: 52,
    text: 'I faced the fact that by doing what I believe God asks of me, I shall lose most of my friends',
    category: 'Commitment',
  },
  {
    id: 53,
    text: 'How can the ideals of Christian womanhood grow up in the heart of a girl who has seen nothing to create those ideals',
    category: 'Formation',
  },
  {
    id: 54,
    text: 'To build up a truly Christian Church we depend on the children and in particular on the girls – the mothers of the coming generation',
    category: 'Formation',
  },
  {
    id: 55,
    text: 'May our Lord help you and not allow what awaits you to be too difficult',
    category: 'Encouragement',
  },
  {
    id: 56,
    text: 'It is better to have no workers than the wrong-kind',
    category: 'Wisdom',
  },
  { id: 57, text: 'The darkest hour is before dawn', category: 'Hope' },
  {
    id: 58,
    text: 'Penance and mortification is not only for religious but also for all Christians',
    category: 'Penance',
  },
  {
    id: 59,
    text: 'I never pray for anything for myself, but I have asked our Lord to enable me to carry on the work until I am not needed, I am quite sure that He will do this – then he can take me or leave me or do whatever he likes.',
    category: 'Surrender',
  },
  {
    id: 60,
    text: 'It is one of my great temptations to do the work myself as I could do it better and quicker, but I have realized from the beginning the necessity of never doing what I can get a native to do and I have trained them to bear responsibility',
    category: 'Leadership',
  },
  {
    id: 61,
    text: "Children keep happy; work hard, be your Sister's keeper in the loving fatherly care of God and His Blessed Mother.",
    category: 'Community',
  },
  {
    id: 62,
    text: 'Our Lord sees everything. You will be rewarded by Him. I want you to get your reward from our Lord',
    category: 'Justice',
  },
  {
    id: 63,
    text: 'I am perfectly satisfied that things are arranged as God wills',
    category: 'Acceptance',
  },
  {
    id: 64,
    text: 'Your success will depend on your ready acceptance of the will of God in every event.',
    category: 'Acceptance',
  },
  {
    id: 65,
    text: 'To be able to hear the voice of our Lord, listening to Him attentively in prayer, you need silence and recollection',
    category: 'Prayer',
  },
  {
    id: 66,
    text: 'You also should accept every order and appointment with the same expression of our Lady. Behold the Handmaid of the Lord',
    category: 'Mary',
  },
  {
    id: 67,
    text: 'Surely your work here, will be one of the chief objects of my prayer, I shall try to help to water, what I have been allowed to sow',
    category: 'Prayer',
  },
  { id: 68, text: 'Lord, thy will be done, not mine', category: 'Surrender' },
  {
    id: 69,
    text: 'He began everything with prayer and ended with a prayer of thanksgiving for having fulfilled that particular will of his father',
    category: 'Prayer',
  },
  {
    id: 70,
    text: "Inspite of the devil's opposition, the work is keenly absorbing; in fact that opposition only arouses new zeal",
    category: 'Zeal',
  },
  {
    id: 71,
    text: "It was always His father's will, not His own",
    category: 'Jesus',
  },
  {
    id: 72,
    text: "And because he had this father's will always in mind, that made it easier for him to meet every situation",
    category: 'Jesus',
  },
  {
    id: 73,
    text: 'May the dear King from this throne (crucifix) bless all the country',
    category: 'Blessing',
  },
  {
    id: 74,
    text: 'Mary shared every suffering of our Lord with him with her in your life, you will find nothing difficult in following her Son',
    category: 'Mary',
  },
  {
    id: 75,
    text: "Our Lord's own Penance and mortification was detachment",
    category: 'Penance',
  },
  {
    id: 76,
    text: 'Have special devotion to the passion of our Lord which will be your strength and courage in your service of God',
    category: 'Devotion',
  },
  {
    id: 77,
    text: 'But God keeps things in his own hands and hidden',
    category: 'Trust',
  },
  {
    id: 78,
    text: 'God is certainly helping our efforts eventhough we often seem to be stumbling blindly in the dark',
    category: 'Faith',
  },
  {
    id: 79,
    text: "In heaven we shall all understand each other's motives and actions",
    category: 'Heaven',
  },
  { id: 80, text: 'And love is the answer', category: 'Love' },
  {
    id: 81,
    text: 'Love one another, pray together, help one another, work together. We do not go to heaven alone',
    category: 'Community',
  },
  { id: 82, text: 'God can do all things', category: 'Faith' },
  {
    id: 83,
    text: 'God can smooth things out and repair injuries done in ways we cannot think of',
    category: 'Providence',
  },
  { id: 84, text: "Be your Sister's keeper", category: 'Community' },
  {
    id: 85,
    text: 'I go-a-fishing. Let us lunch into the deep',
    category: 'Mission',
  },
  {
    id: 86,
    text: 'They (the girls) are leaving us to Anua to form another branch of the family, for the honour and glory of God and for the spread of the gospel',
    category: 'Mission',
  },
  {
    id: 87,
    text: 'It is a critical time of extra-ordinary opportunities and with corresponding difficulties; if we lose our chances they may not be offered again',
    category: 'Opportunity',
  },
  {
    id: 88,
    text: "You cannot give to people what you haven't got",
    category: 'Authenticity',
  },
  {
    id: 89,
    text: 'The soul is like a lake fed by hidden springs, the surface remaining still and unruffled',
    category: 'Spirituality',
  },
  {
    id: 90,
    text: 'The springs are: the thought of God, His love, Providence and Power and the realization of our own creature-hood',
    category: 'Spirituality',
  },
  {
    id: 91,
    text: 'It is only in prayer that the type of union with our Lord you aspire to can be reached',
    category: 'Prayer',
  },
  {
    id: 92,
    text: 'Only prayers can win the favours i want… PRAY, PRAY, PRAY',
    category: 'Prayer',
  },
  {
    id: 93,
    text: 'Prayer can do all things, and there is a very possible way for all difficulties to be done away with',
    category: 'Prayer',
  },
  {
    id: 94,
    text: 'I find that light and help come just at each step when they are actually needed and not a bit sooner',
    category: 'Providence',
  },
  {
    id: 95,
    text: 'It is only the Spirit that can speak to the Spirit',
    category: 'Holy Spirit',
  },
  {
    id: 96,
    text: 'Amid the songs of Angels Mary is listening for the whispered prayer of the least of her children',
    category: 'Mary',
  },
  {
    id: 97,
    text: 'Pray, pray, pray, the work of God must be done at all cost, no matter the inconveniences',
    category: 'Prayer',
  },
  {
    id: 98,
    text: 'Our Lady is to be your inseparable companion',
    category: 'Mary',
  },
  {
    id: 99,
    text: "The children of Mary's solidarity differs from our other solidarities. A high standard of goodness is required… a fountain of zeal",
    category: 'Mary',
  },
  {
    id: 100,
    text: 'If you are a child of Mary, you must imitate your mother in every way. She was humble, obedient, faithful to her work, trustworthy',
    category: 'Mary',
  },
  {
    id: 101,
    text: 'Show special love to children who are the future of the Church in Africa',
    category: 'Children',
  },
  { id: 102, text: 'You have all my prayers', category: 'Support' },
  {
    id: 103,
    text: 'Mary went into the home of Elizabeth, she offered the usual loving greetings, and her days passed in ordinary and simple actions, yet at her presence a mighty tide of grace broke upon the inmates of that home.',
    category: 'Mary',
  },
  {
    id: 104,
    text: 'If you stood before our Holy father you would not give much thought to the presence of his Noble Guard',
    category: 'Presence',
  },
  {
    id: 105,
    text: 'You will need to visit Him often in the blessed sacrament',
    category: 'Eucharist',
  },
  {
    id: 106,
    text: 'It is lonely without the blessed sacrament',
    category: 'Eucharist',
  },
  {
    id: 107,
    text: 'The Holy Eucharist is the food of our souls. It helps the soul to live just a material food helps the body to live',
    category: 'Eucharist',
  },
  {
    id: 108,
    text: 'At Holy Communion ask for courage and faith to meet any event, especially that her accepts the offering of your poor self and to help you overcome all those things that could be a hindrance and to acquire those virtues that you need for perseverance',
    category: 'Eucharist',
  },
  {
    id: 109,
    text: 'I have great devotion to Divine Providence and i say the litany several times in the day when difficulties come',
    category: 'Providence',
  },
  {
    id: 110,
    text: 'All my trust is in the sacred Heart… Divine Providence ever conformable to the Sacred Heart of Jesus. Have mercy on us',
    category: 'Sacred Heart',
  },
  {
    id: 111,
    text: 'Praise be to Divine Providence ever conformable to the Sacred heart of Jesus',
    category: 'Sacred Heart',
  },
  {
    id: 112,
    text: 'The letters – IHS on the small hosts stand for "Jesus Christ conquers ," in Greek',
    category: 'Jesus',
  },
  {
    id: 113,
    text: 'Well, it all depends on the Sacred Heart!',
    category: 'Sacred Heart',
  },
  {
    id: 114,
    text: 'I trust in the Sacred Heart, and I will trust',
    category: 'Trust',
  },
  {
    id: 115,
    text: 'The children are beginning a Novena of Novenas, eighty-one days prayer, to the Sacred Heart for the gift.. to build the Church- the Church of the Sacred Heart',
    category: 'Prayer',
  },
  {
    id: 116,
    text: 'Do not expect letters from me nor do I expect any from you, but we shall remain united in the Sacred heart of Jesus',
    category: 'Unity',
  },
  { id: 117, text: 'The blood of Christ surges within you', category: 'Jesus' },
  {
    id: 118,
    text: 'Well, God can do all things and it is all for Him and the souls he loves',
    category: 'Faith',
  },
  {
    id: 119,
    text: 'MAKE EVERY ACTION A PRAYER! So that all you do and say will be blessed by Him',
    category: 'Prayer',
  },
  {
    id: 120,
    text: 'Every missionary must be prepared to turn her hands to many works besides the actual one which is her special strong point',
    category: 'Mission',
  },
  {
    id: 121,
    text: 'The kingdom of God lies in your hands this day. It is through your behaviour that He will extend His kingdom',
    category: 'Kingdom',
  },
  {
    id: 122,
    text: 'I feel confident that Divine Providence will always let me have enough to go on',
    category: 'Providence',
  },
  {
    id: 123,
    text: 'I will go ahead as long as I can trusting in Divine Providence',
    category: 'Providence',
  },
  {
    id: 124,
    text: 'Today God sends this gift in His Sweet Providence. I want my native Sisters to be called Sisters of Divine Providence',
    category: 'Providence',
  },
  { id: 125, text: 'God will provide when time comes', category: 'Providence' },
  {
    id: 126,
    text: 'His "COME FOLLOW ME", means, do as I did, without counting the cost',
    category: 'Jesus',
  },
  {
    id: 127,
    text: "Our Divine Lord's call takes many different forms. What He looks for, from us is that will which leads us to go because he calls",
    category: 'Calling',
  },
  {
    id: 128,
    text: 'God is perfect and to see Him and live with Him after death, one must be as perfect as He is',
    category: 'Holiness',
  },
  {
    id: 129,
    text: 'It is in prayer that you will find God and His will',
    category: 'Prayer',
  },
  { id: 130, text: 'Go to the Chapel and tell Our Lord', category: 'Prayer' },
  {
    id: 131,
    text: 'It is very important that you study His Life and Work in the New Testament',
    category: 'Jesus',
  },
  {
    id: 132,
    text: 'The Holy mass, is the greatest meeting point with our Lord',
    category: 'Mass',
  },
  {
    id: 133,
    text: 'It is at the Holy mass that you have real personal contact with Him, when you receive Him in Holy Communion and renew your love, and ask him for what you need for yourself and for all those you serve, for His sake',
    category: 'Mass',
  },
  {
    id: 134,
    text: 'Neither affection nor familiarity can do away with the necessity for certain reverent reserve in conversation and in manner',
    category: 'Reverence',
  },
  {
    id: 135,
    text: 'The truth is that you yourself change and no one can say what form the change will take',
    category: 'Growth',
  },
  {
    id: 136,
    text: 'Personal private prayer cultivated, will be your guide',
    category: 'Prayer',
  },
  {
    id: 137,
    text: 'I shall pray much for you and all the workers and the work',
    category: 'Prayer',
  },
  {
    id: 138,
    text: "Penance and mortification, is not only for religious but for all Christians. Penance and Mortifications strengthen one's character",
    category: 'Penance',
  },
  {
    id: 139,
    text: 'Visit and Adoration of the Blessed Sacrament is a must for a religious and an opportunity to advance in her relationship with our Lord',
    category: 'Eucharist',
  },
  {
    id: 140,
    text: "Pray to Him, especially, the PRAYER FOR GENEROSITY, that's what you will need most in the life of love and service of your people",
    category: 'Generosity',
  },
  {
    id: 141,
    text: 'God calls some to religion early in life, others later',
    category: 'Calling',
  },
  {
    id: 142,
    text: 'With the giving of yourself, your heart, your mind and will, you will give up also any other material things',
    category: 'Sacrifice',
  },
  {
    id: 143,
    text: 'I need companions, I need co-workers, so send them, if You want the work to go on',
    category: 'Community',
  },
  {
    id: 144,
    text: 'Having given yourself (to God) you need to intensify your prayers and your offerings',
    category: 'Prayer',
  },
  {
    id: 145,
    text: 'Intensify your spirit of service and sacrifice in whatever you do',
    category: 'Service',
  },
  {
    id: 146,
    text: 'Examine carefully if you think you love Him sufficiently enough, to be able to make that sacrifice',
    category: 'Love',
  },
  {
    id: 147,
    text: 'You must live as children of the same parents being kind and generous to each other',
    category: 'Community',
  },
  {
    id: 148,
    text: 'To really know that we love God is shown in the love and care we have for one another',
    category: 'Love',
  },
  {
    id: 149,
    text: 'Take notice of your Sister and tell her if you notice anything that is not right about her',
    category: 'Accountability',
  },
  {
    id: 150,
    text: 'He loves the trust that He Himself has inspired',
    category: 'Trust',
  },
  {
    id: 151,
    text: 'Where Jesus is, there also is Mary, so, too in heaven, her place shall ever be close to her Divine Son',
    category: 'Mary',
  },
  {
    id: 152,
    text: 'By our vow of chastity, you will live, even in this place of exile, as angels live in heaven. You will enjoy the beatitude promised to pure hearts, that of seeing God and enjoying His sweetness in communion and prayer',
    category: 'Chastity',
  },
  {
    id: 153,
    text: 'Poverty will prevent you ever again being independent owner of anything, and you must use according to the direction of superiors what is entrusted to you for yourself or for your work',
    category: 'Poverty',
  },
  {
    id: 154,
    text: 'You cannot give away an orange tree and continue to pick its fruits',
    category: 'Poverty',
  },
  {
    id: 155,
    text: 'We claim nothing as our own even if the good comes to us from any service or in any form',
    category: 'Poverty',
  },
  {
    id: 156,
    text: 'Obedience is the most essential of the religious vows. Through it every action of ours is brought in conformity with the will of God',
    category: 'Obedience',
  },
  {
    id: 157,
    text: 'Anybody under whom you are working, you have to obey',
    category: 'Obedience',
  },
  {
    id: 158,
    text: "You have to obey them because they are God's representatives for you, as long as you are under them",
    category: 'Obedience',
  },
  {
    id: 159,
    text: 'Eventhough we have nothing, we do not waste. Our Lord gave us example when He fed the five thousand and asked the apostles to "gather up the fragments"',
    category: 'Stewardship',
  },
  {
    id: 160,
    text: 'Our Rule bids us ever remember that from the interior power must flow to the exterior, enabling us to attain our end',
    category: 'Spirituality',
  },
  {
    id: 161,
    text: 'The care for girls..will for some years, be the most important work for Sisters in this Country',
    category: 'Education',
  },
  {
    id: 162,
    text: 'It is only prayers that is keeping the work going and I pray daily for you and the Congregation',
    category: 'Prayer',
  },
  {
    id: 163,
    text: 'Even in our mistakes he does not allow to do injury',
    category: 'Grace',
  },
  {
    id: 164,
    text: 'The hope of the Church here lies in these children. If we can protect them for a few years, they will give the shelter of truly Christian homes to the little girls of the next generation',
    category: 'Hope',
  },
  {
    id: 165,
    text: 'It is in the school that we must get a hold on the children and bring them the influence of grace',
    category: 'Education',
  },
  {
    id: 166,
    text: 'Those who form the character of the children, form the character of the nation',
    category: 'Formation',
  },
  {
    id: 167,
    text: '…i want to take hold of great multitude of our girls and around them in the elements of Christianity and civilized womanhood',
    category: 'Formation',
  },
  {
    id: 168,
    text: "No work is of greater importance for God's glory than the education of the young",
    category: 'Education',
  },
  {
    id: 169,
    text: 'The working classes are the bulk of the nation, and it is their children who are given into our hands either in primary or in secondary schools',
    category: 'Education',
  },
  {
    id: 170,
    text: 'I have therefore adopted the Montessori System and have unbounded confidence in it',
    category: 'Education',
  },
  {
    id: 171,
    text: "The first great need in a girls' school is to train the girls in self-control, cleanliness, self-respect, earnestness and reliability",
    category: 'Formation',
  },
  {
    id: 172,
    text: 'Earnestness and reliability are the outcome of the gradual growth of self-control, of self-respect, will-power and the power of concentration',
    category: 'Formation',
  },
  {
    id: 173,
    text: 'Our characteristic of all our schools is that the children, while perfectly respectful to the Sisters, are completely at their ease with them',
    category: 'Education',
  },
  {
    id: 174,
    text: 'Be constant in training children in what is right, what will help them to be good citizens of their nation, to be good Christians, God fearing, God loving, at all times',
    category: 'Formation',
  },
  {
    id: 175,
    text: 'Nursing here as elsewhere, our first care is for souls of those brought within our influence',
    category: 'Healthcare',
  },
  {
    id: 176,
    text: 'Teach them(the children) to speak the truth, to be honest in speech and behaviour, even if they have to suffer for it',
    category: 'Formation',
  },
  {
    id: 177,
    text: 'For a sense of responsibility to develop, there must be actual responsibility, small at first but increasing to matters of importance',
    category: 'Formation',
  },
  {
    id: 178,
    text: 'If you idle away your time now- what are you going to do in eternity',
    category: 'Time',
  },
  {
    id: 179,
    text: 'I have all of you to help and that is why I am urging you to be good children, love God and one another, so that love of him and one another will help you to be ready to go out to love and serve others',
    category: 'Love',
  },
  {
    id: 180,
    text: 'Love one another, where there is love, there God abides',
    category: 'Love',
  },
  { id: 181, text: 'Work together in mutual help', category: 'Community' },
  {
    id: 182,
    text: 'Every teacher is a Catechist and an Apostle',
    category: 'Ministry',
  },
  {
    id: 183,
    text: 'I trust in the Lord who has always helped me in the past',
    category: 'Trust',
  },
  {
    id: 184,
    text: "The answer to prayers will come in God's own time, but come it will, I am sure",
    category: 'Prayer',
  },
  {
    id: 185,
    text: 'The church grows through making adult converts, and in some cases these prove satisfactory, but it is only on those who have been trained to Christian habits of virtue from childhood that a really vigorous and lasting Native Church can be built',
    category: 'Mission',
  },
  {
    id: 186,
    text: 'Work grows and grows. How it gets done i do not know, the Angels must help',
    category: 'Providence',
  },
  {
    id: 187,
    text: 'Solid Christian teaching can be given only in a truly Christian home, by a Christian mother',
    category: 'Family',
  },
  {
    id: 188,
    text: 'The thing that impresses me most is that we are in a vast continent which is developing at an extraordinary rate. What has come to us slowly in the course of centuries is coming to them in a few years',
    category: 'Vision',
  },
  {
    id: 189,
    text: '…this would make no difference to those who are working here now, but the church will be here when we are gone and it will make all the difference in the world to those who come after us',
    category: 'Legacy',
  },
  {
    id: 190,
    text: 'I love every inch of the ground and everyone in it, i love and respect them',
    category: 'Love',
  },
  {
    id: 191,
    text: 'Make the saying of the Rosary your special devotion it is the mysteries of the Rosary that the part Mary played in the life and work of our Lord, is contained',
    category: 'Rosary',
  },
  {
    id: 192,
    text: 'Our lady should be your first Patron Saint because Jesus cannot be found without His mother',
    category: 'Mary',
  },
  {
    id: 193,
    text: 'The lesson to be learnt here, is one that takes a long, long time to learn. We go to prayer to please God, not to please ourselves',
    category: 'Prayer',
  },
  { id: 194, text: 'Your prayers are my greatest support', category: 'Prayer' },
  {
    id: 195,
    text: 'Our great want is prayers. Prayer alone can do the work that has to be done',
    category: 'Prayer',
  },
  {
    id: 196,
    text: "It is in God's hands, PRAY, PRAY, PRAY, the work of God must be done at all cost",
    category: 'Prayer',
  },
  {
    id: 197,
    text: 'I must put all personal feelings aside now, and only consider the work for souls',
    category: 'Mission',
  },
  {
    id: 198,
    text: 'God has given me the grace to fit into the culture and people and so I am sent by them',
    category: 'Inculturation',
  },
  {
    id: 199,
    text: 'I think that common sense and love of souls are the most important characteristics',
    category: 'Wisdom',
  },
  {
    id: 200,
    text: 'The people themselves often fully appreciate the faith which lies behind our service of them',
    category: 'Witnessing',
  },
  {
    id: 201,
    text: 'My life and daily prayer is that God inspires some of you with a call to the religious life, so that when I am gone, His work would continue',
    category: 'Vocation',
  },
  {
    id: 202,
    text: 'We can never really understand the Native mind as they themselves do, nor can we have the same influence on the masses of people',
    category: 'Humility',
  },
  {
    id: 203,
    text: "'my hope has always been to have many convents of native Sisters scattered throughout the country",
    category: 'Vision',
  },
  {
    id: 204,
    text: 'Constantly recall in your mind the words: \'Come follow me" – to live as I lived and do as I did',
    category: 'Jesus',
  },
  {
    id: 205,
    text: "I have been with you and have lived closely with you, listened, watched, prayed and found that God's special grace has no limit to race, culture, or tradition",
    category: 'Grace',
  },
  {
    id: 206,
    text: 'So together all of us live and work for God and bring our people to know and love Him too',
    category: 'Community',
  },
  {
    id: 207,
    text: 'He went about doing good, preaching to the people, healing the sick and forgiving sinners',
    category: 'Jesus',
  },
  {
    id: 208,
    text: 'An ordinary good education and common sense, a cheerful disposition with no tendency to narrowness or scruples, are the most natural qualifications, and a big love of souls',
    category: 'Ministry',
  },
  {
    id: 209,
    text: 'It would be very easy for Sisters to be deceived into leading a busy and materialistic useful life, in the end do practically nothing for the souls of the people,-at least no lasting good',
    category: 'Discernment',
  },
  {
    id: 210,
    text: 'As i may no longer work here, I think that I can best fulfil my intension by devoting my life to prayer for the Missions',
    category: 'Prayer',
  },
  {
    id: 211,
    text: 'I consecrated my life to the Missions and If I may no longer work actively, I will try to fulfil my intention by praying for them',
    category: 'Prayer',
  },
  {
    id: 212,
    text: "You know children, Angels are good. They are always willing to carry out God's command. So you are to be like Angels",
    category: 'Children',
  },
  {
    id: 213,
    text: 'He delights in our unselfish will to please Him',
    category: 'God',
  },
  {
    id: 214,
    text: '"O Christ my Christ, come and live in me, work in me, love in me, suffer in me, to the glory of the father and for the sanctification of souls. Oh multiply they saints and lovers',
    category: 'Prayer',
  },
  {
    id: 215,
    text: 'What is this for eternity? The darker the night, the near the dawn',
    category: 'Hope',
  },
  {
    id: 216,
    text: 'When our dear ones go, it certainly lifts our hearts from earth, but what a happy welcome from our Lord',
    category: 'Eternal Life',
  },
  {
    id: 217,
    text: 'Our Lord has a very beautiful home for you',
    category: 'Eternal Life',
  },
  {
    id: 218,
    text: 'Eternity will be very long so you must not be in too great a hurry to go to Heaven',
    category: 'Eternity',
  },
  {
    id: 219,
    text: 'Before God I have practically no choice and I go willingly',
    category: 'Surrender',
  },
  {
    id: 220,
    text: 'But God is above all, and over all, as i well know if I die today with my work only begun, it will be worthwhile',
    category: 'Faith',
  },
  {
    id: 221,
    text: 'God is more than good to me.. if it is His Holy Will I trust I shall hold out at least till other workers come and i am not much needed',
    category: 'Trust',
  },
  {
    id: 222,
    text: 'Suffering and death level all ranks, and bring all within the scope of Charity',
    category: 'Charity',
  },
  {
    id: 223,
    text: 'May God comfort you and strengthen you. The world is not home, but home is coming and then no more partings',
    category: 'Comfort',
  },
  {
    id: 224,
    text: 'Of the future, at present, I see nothing clearly',
    category: 'Mystery',
  },
  {
    id: 225,
    text: 'This is a bitter cross, but just like the bitterest part of His own. May He comfort you',
    category: 'Suffering',
  },
  { id: 226, text: 'It will be as God wills', category: 'Acceptance' },
  {
    id: 227,
    text: 'We must be the mainsprings and guides of the work until such a time as the natives can do without us',
    category: 'Leadership',
  },
  {
    id: 228,
    text: 'Lay thy hand upon my troubled soul, say to its passions, its cares, its restless desires, "peace be still", that in the stillness, i may hear what and how my God wouldst speak to me',
    category: 'Peace',
  },
  {
    id: 229,
    text: 'Everytime I hear the clock strike i pray for the members of the Congregation both living and death',
    category: 'Prayer',
  },
  {
    id: 230,
    text: 'How wonderfully He brings us through every difficulty and trial',
    category: 'Providence',
  },
  {
    id: 231,
    text: 'Do you ever wonder why God specially loves you?',
    category: "God's Love",
  },
  {
    id: 232,
    text: 'If you go into a half-darkened room you will not notice must dust, but pull up the blinds, and the sun light reveals what was hidden before',
    category: 'Light',
  },
  {
    id: 233,
    text: 'The light does not increase the faults but knowledge is the first step towards their removal and something to be thankful for',
    category: 'Growth',
  },
  {
    id: 234,
    text: 'So increase of light and grace reveal faults and imperfections of which we were unconscious before',
    category: 'Grace',
  },
  {
    id: 235,
    text: 'The superior should be looked upon as the mother of the family who will give account of the members and would give them spiritual and temporal care',
    category: 'Leadership',
  },
  {
    id: 236,
    text: 'Even a true vocation can be tried beyond what is prudent',
    category: 'Vocation',
  },
  {
    id: 237,
    text: 'Do pray that I may be shown what to do',
    category: 'Prayer',
  },
  {
    id: 238,
    text: 'Take the Community as your home, as your family and love everybody as you would like to be loved',
    category: 'Community',
  },
  {
    id: 239,
    text: 'The work is so vast, so easy, there are such marvellous returns and it is so evidently blessed by God',
    category: 'Providence',
  },
  {
    id: 240,
    text: 'Prince of Peace! O word of God! Let there be quiet in my soul when i prayer',
    category: 'Peace',
  },
  {
    id: 241,
    text: 'It is wonderful to look back and trace the workings of Providence',
    category: 'Providence',
  },
  {
    id: 242,
    text: 'After all that God has done in the past, I can have no fear of the future',
    category: 'Faith',
  },
  {
    id: 243,
    text: 'I have received far, far more than a hundred-fold of consolations and can never thank God enough',
    category: 'Gratitude',
  },
  {
    id: 244,
    text: "It is God's will, I have done all I can, I am satisfied and in peace",
    category: 'Peace',
  },
  {
    id: 245,
    text: 'God is sending us, so many blessings',
    category: 'Blessing',
  },
  {
    id: 246,
    text: 'My desire to work and die on the foreign mission is as great today as when I sent my petition to the Holy Father in 1922',
    category: 'Vocation',
  },
  {
    id: 247,
    text: 'God has blessed the work beyond all hopes. Thanks be to Him.',
    category: 'Gratitude',
  },
];

const categories = Array.from(new Set(sayings.map((s) => s.category))).sort();

export default function MotherFoundressSayingsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSayings = useMemo(() => {
    return sayings.filter((saying) => {
      const matchesSearch = saying.text
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || saying.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Mother Foundress Sayings"
        description="Wisdom and spiritual guidance that continues to inspire generations"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6 mb-12">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50"
                size={20}
              />
              <Input
                placeholder="Search sayings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-white/50 border-2 border-primary/20 focus:border-primary/50 rounded-lg transition-smooth"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/70">
                <Filter size={18} />
                Filter by Category
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    !selectedCategory
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-white/50 text-foreground hover:bg-white/70 border border-primary/20'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-white/50 text-foreground hover:bg-white/70 border border-primary/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-foreground/60">
              Showing {filteredSayings.length} of {sayings.length} sayings
            </div>
          </div>

          {/* Sayings Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSayings.length > 0 ? (
              filteredSayings.map((saying) => (
                <motion.div
                  key={saying.id}
                  className="p-6 bg-linear-to-br from-primary/5 to-primary/0 border-2 border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-smooth group"
                >
                  <div className="flex gap-4">
                    <Quote
                      className="text-foreground shrink-0 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <div className="flex-1 space-y-3">
                      <p className="text-foreground leading-relaxed italic text-sm md:text-base">
                        &apos;{saying.text}&apos;
                      </p>
                      <div className="inline-block">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {saying.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Quote className="mx-auto text-primary/20 mb-4" size={48} />
                <p className="text-foreground/60 text-lg">
                  No sayings found. Try adjusting your search or filters.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
