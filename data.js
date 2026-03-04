/* --- DONNÉES DU DHIKR --- */
const DATA = [
  {
    id: "aisa",
    title: "تقديم الجمعية الدولية الصوفية العلاوية",
    desc: "Présentation de l'Association Internationale Soufie Alâwiyya (AISA)",
    content: [
      { 
        img: "logo.png",
        ar: "الجمعية الدولية الصوفية العلاوية", 
        tr: "Association Internationale Soufie Alâwiyya (AISA)", 
        fr: "L’Association Internationale Soufie Alawiyya (AISA) est une organisation issue de l’héritage spirituel de la Tariqa Alawiyya. Fondée sous l’impulsion du Cheikh Khaled Bentounes, elle œuvre pour la transmission des valeurs du soufisme vivant : paix intérieure, fraternité, dialogue interreligieux, dignité humaine et harmonie avec le monde. Reconnue comme ONG, AISA développe des actions éducatives, culturelles et spirituelles afin de promouvoir une spiritualité ancrée dans la réalité contemporaine et ouverte sur l’universel.<br><br><div style='text-align:center; margin-top:30px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);'><span style='font-size:0.9rem; color:var(--text-muted);'>Infos :</span><br><a href='https://aisa-ong.org' target='_blank' style='font-size:1.1rem; font-weight:bold;'>aisa-ong.org</a></div>",
        isLongText: true 
      }
    ]
  },
  {
    id: "cheikh",
    title: "تقديم الشيخ خالد بنتونس",
    desc: "Présentation du Cheikh Khaled Bentounes",
    content: [
      { 
        img: "cheikh-khaled.jpg", 
        ar: "الشيخ خالد بنتونس", 
        tr: "Cheikh Khaled Bentounes", 
        fr: "Cheikh Khaled Bentounes, né en 1949 à Mostaganem, est le guide spirituel de la Tariqa Alawiyya Darqawiyya Shadhiliyya depuis 1975. Héritier d’une chaîne spirituelle remontant au Prophète Muhammad, il œuvre pour une spiritualité vivante fondée sur la paix, la fraternité et la dignité humaine. Sous son impulsion est née l’Association Internationale Soufie Alawiyya (AISA), reconnue ONG, qui développe des actions éducatives, culturelles et spirituelles. Elle promeut le dialogue interreligieux, la coexistence pacifique, la transmission des valeurs soufies, la culture de la paix et l’ouverture à l’universel, afin de contribuer à une humanité plus juste, consciente et solidaire.",
        isLongText: true 
      }
    ]
  },
  {
    id: "preface",
    title: "تمهيد",
    desc: "Préface",
    content: [
      { 
        isLongText: true,
        arBody: `<h3 style="text-align:center; color:var(--accent-gold); font-family:var(--font-ar); margin:10px 0;">تمهيد</h3>
        <div style="text-align:center; font-family:var(--font-ar); margin:10px 0; font-size:1.4rem;">بسم الله الرحمن الرحيم</div>
        الذكر أسباب كل خير، نبع يروي ظمأ العطشى إلى الحق، الباحثون في ثناياه بكل أناة وبخالص صدق عن المعنى المنشود لهذا الوجود … الساعون إلى سبر کنه هذه العلاقة التي تربطهم بالوحدانية.<br><br>
        إنه “الذكر” الذي يستحضر أسماء الذات وأسماء الصفات الإلهية فيتغذى منه ضمير المرء فتتفتح فضاءات بواطنه على رحاب الكونية.<br><br>
        إنه “التذكير” … تذكير للتحقق بما هو فان فينا والتحقق بنفخة الروح الأزلية التي تشد إليها الوجود وما حوى.<br><br>
        إنه “دعاء”، يدعونا إلى العودة إلى الذات المثخنة نداوي جروحها بتلك الطاقة وذلك النور المبثوثان في أسماء الذات وأسماء الصفات، فتتيقظ مشاعرنا فنعرف ونتعرف، وقد سلكنا دروب تجربتنا المعيشة الفردانية على الحق والباطل، على الحقيقة والوهم، على الأزلي الأبدي والفاني، نعرف ونتعرف على النور والظلمات.<br><br>
        وأخيرا، إنه “تميمة روحية” تمنحك لحظات الانتشاء، تمنحك نكهة سحرية، وتمنحك بهجة الحياة. فبعد كل جلسة ذكر تعقبها حالات تغمرنا فيها سعادة جمة فنتخفف بها مما يثقل كاهلنا، وتتلحفنا رحمة عظيمة فتضمد جراحاتنا. سنشعر بتلك اللطافة العظيمة التي تسكن قرار أعماقنا، وإذ ذاك كل ما يتبقى فينا يتحول إلى سلام، سلام مع الذات، وسلام مع الآخر، وسلام مع الأرض وما تحويه. ستصبح رؤيتنا واضحة، متقدة وبصرنا حديد، حينها لا مكان ولا وجود إلا لعبارة “الحمد لله” و”الشكر لله”.<br><br>
        إلى كل من سيقع هذا الكتيب بين أيديهم، الإخوة والأخوات الذاكرين والذاكرات أو أي شخص صادق به ظمأ وعطش للحقيقة، أدعوهم لأن يخوضوا هذه التجربة شريطة أن يكونوا صادقين في نهجهم وفي خطاهم، وأن يعتقدوا في المحبة وما تمنحه من قوة، وأن يتزودوا دون كلل أو ملل بعظيم الرجاء في أن طريق الخلاص هو هذه الرحمة العظمى الهبة الربانية لجميع المخلوقات دون استثناء.<br><br>
        <div style="text-align:left; margin-top:20px; font-size:1.1rem; color:var(--accent-gold);">الشيخ خالد عدلان بن تونس<br><small style="color:var(--text-muted);">شيخ الطريقة العلاوية الدرقاوية الشاذلية</small></div><br>`,
        
        fr: `<h3 style="text-align:center; color:var(--accent-gold); margin-bottom:10px;">Préface</h3>
        <div style="text-align:center; font-weight:bold; margin-bottom:25px; font-family:var(--font-title); color:var(--text-main);">Au Nom de Dieu, le Tout Miséricordieux,<br>le Très Miséricordieux</div>
        Le Dhikr est source de tout bien, une source qui abreuve tout assoiffé de Vérité (al-Haq) qui cherche avec ardeur et une intention pure à retrouver en lui le sens et le lien qui le relient au principe de l’Unicité.<br><br>
        Il est Mention, car il prononce les Noms et Attributs divins pour nourrir la conscience et ouvrir l’espace intérieur vers l’Universel.<br><br>
        Il est Rappel, pour distinguer en nous ce qui relève de la finitude et le souffle de l’Esprit permanent et éternel qui anime et relie le Tout.<br><br>
        Il est Invocation, qui nous invite au voyage du retour à soi, par l’énergie et la lumière contenues dans les Noms et Attributs divins, afin d’éveiller nos sens à connaître et reconnaître, par une expérience vécue, le vrai du faux, le réel de l’illusion, le fini de l’infini, la lumière des ténèbres.<br><br>
        Il est enfin Incantation spirituelle, qui apporte saveur, enchantement et joie de vivre.<br><br>
        Après chaque séance de dhikr, un immense bonheur inonde la conscience, allège les fardeaux, et une immense rahma guérit les blessures. Une grande mansuétude s’installe, et ce qui demeure en nous se transforme en paix : paix avec soi, paix avec l’autre, paix avec la terre et tout ce qu’elle contient.<br><br>
        Alors la vision devient claire, vive et affutée, et la seule formule audible est :<br>
        <div style="text-align:center; margin:15px 0; color:var(--accent-gold); font-weight:bold;">Al-hamdu li-l-Llāhi wa-sh-shukru li-l-Llāhi.</div>
        Je recommande à tous celles et ceux qui auront entre les mains cet opuscule, frères et sœurs Dhâkirîn et Dhâkirât, ou toute personne sincère assoiffée de Vérité, de tenter cette expérience, à condition d’être sincère dans sa démarche, de croire en la force de l’amour et d’espérer sans faillir dans la voie du salut, cette immense miséricorde offerte à tous sans distinction.<br><br>
        <div style="text-align:right; margin-top:20px; font-weight:bold; color:var(--accent-gold);">Cheikh Khaled Bentounes<br><small style="color:var(--text-muted); font-weight:normal;">Guide spirituel de la Tariqa Alawiyya Darqawiyya Shadhiliyya.</small></div>
        <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:40px 0;">`
      }
    ]
  },
  {
    id: "fatiha",
    title: "سورة الفاتحة",
    desc: "Sourate 1 - L'Ouvrante",
    content: [
      { isTitlePage: true, ar: "سورة الفاتحة", fr: "L'Ouvrante", sub: "Sourate 1" },
      { ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm", fr: "Au Nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux" },
      { ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", tr: "Al-ḥamdu li-l-Llāhi Rabbi l-ʿālamīn", fr: "Louange à Dieu, Seigneur des mondes." },
      { ar: "الرَّحْمَٰنِ الرَّحِيمِ", tr: "Ar-Raḥmāni r-Raḥīm", fr: "Le Tout Miséricordieux, le Très Miséricordieux," },
      { ar: "مَالِكِ يَوْمِ الدِّينِ", tr: "Māliki yawmi d-dīn", fr: "Maître du Jour de la Rétribution." }
    ]
  },
  {
    id: "wird_general",
    title: "الورد العام للطريقة العلاوية الدرقاوية الشاذلية",
    desc: "Le Wird général de la Tarîqa Alawiyya",
    content: [
        /* Transition */
        { 
          isQuote: true, 
          ar: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ<br>أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ<br><span style='font-size:0.7em;'>(الرعد : 28)</span>", 
          fr: "Ceux qui ont cru et dont les cœurs<br>sont pacifiés à l’évocation d’Allah.<br>N’est-ce point par l’évocation d’Allah que se<br>pacifient les cœurs ?", 
          sub: "(Sourate Ar-Ra'd / Le Tonnerre : 28)" 
        },
        { isTitlePage: true, ar: "الورد العام", fr: "Le Wird Général", sub: "Voie Alâwiyya Darqâwiyya Shâdhiliyya" },
        {
          isLongText: true,
          ar: "الورد: وضع نظامه الإمام أبو الحسن الشاذلي رحمه الله (1175 - 1258)، كان يضم في أوله الإستغفار، الصلاة على النبي صلى الله عليه وسلم، والهيللة، ثم أضاف إليه الشيخ العلاوي رحمه الله (1869 - 1934) سورة الواقعة، تقرأ في بدايته، وأضاف بعد ذلك الشيخ المهدي بن تونس رحمه الله (1928 - 1975) الحمدلة \"الحمد لله و الشكر لله\".",
          fr: "Le wird a été établi par l'imam Abou Al-hassan Al-shādhilī (que Dieu sanctifie son âme) (1175-1258). Il comprenait initialement l'istighfār (demande de pardon), la prière sur le Prophète paix et salut sur lui et la Haylala. Le Cheikh Al-‘alawi (que Dieu sanctifie son âme) (1869-1934) y a inséré, en début, la sourate Al-Waqi’a. Puis, le Cheikh Al-Mahdi Bentounes (que Dieu sanctifie son âme) (1928-1975) a ajouté, à la fin, la ḥamdala « Al-ḥamdu li-l-Llāh wa-sh-shukru li-l-Llāh ».",
          tr: "al-wird al-‘āmm li-tarīqa ʿalāwiyya darqāwiyya shādhiliyya"
        },
        {
           isTitlePage: true, ar: "سورة الواقعة", fr: "Sourate Al-Waqi'ah", sub: "L'Événement (56)"
        },
        { ar: "أعوذ بالله من الشيطان الرجيم\nبسم الله الرحمن الرحيم", tr: "Aʿūdhu bi-l-Llāhi mina ash-shayṭāni r-rajīmi\nbismi l-Llāhi r-Raḥmāni r-Raḥīmi", fr: "Je me réfugie en Dieu contre satan le lapidé\nAu Nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux" },
        { ar: "إِذَا وَقَعَتِ الْوَاقِعَةُ ﴿١﴾ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ﴿٢﴾ خَافِضَةٌ رَافِعَةٌ ﴿٣﴾", tr: "1. idhā waqaʿati l-wāqiʿatu\n2. laysa li-waqʿati-hā kādhibatun\n3. khāfiḍatun rāfiʿatun", fr: "1. Quand l'événement surviendra,\n2. à cette venue, qui donc mentira ?\n3. il ravalera, il élèvera," },
        { ar: "إِذَا رُجَّتِ الْأَرْضُ رَجًّا ﴿٤﴾ وَبُسَّتِ الْجِبَالُ بَسًّا ﴿٥﴾ فَكَانَتْ هَبَاءً مُنْبَثًّا ﴿٦﴾", tr: "4. idhā rujjati l-arḍu rajjan\n5. wa-bussati l-jibālu bassan\n6. fa-kānat habā’an munbaththan", fr: "4. Quand un ébranlement la terre ébranlera,\n5. quand les monts éclatés voleront en éclats,\n6. pour devenir poussière qui tourbillonnera," },
        { ar: "وَكُنْتُمْ أَزْوَاجًا ثَلَاثَةً ﴿٧﴾ فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ ﴿٨﴾ وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ ﴿٩﴾", tr: "7. wa-kuntum azwājan thalāthatan\n8. fa-aṣḥābu l-maymanati mā aṣḥābu l-maymanati\n9. wa-aṣḥābu l-mash’amati mā aṣḥābu l-mash’amati", fr: "7. en trois groupes l'on vous verra :\n8. gens de la dextre,\n9. gens de senestre," },
        { ar: "وَالسَّابِقُونَ السَّابِقُونَ ﴿١٠﴾ أُولَٰئِكَ الْمُقَرَّبُونَ ﴿١١﴾ فِي جَنَّاتِ النَّعِيمِ ﴿١٢﴾", tr: "10. wa-s-sābiqūna s-sābiqūna\n11. ulā’ika l-muqarrabūna\n12. fī jannāti n-naʿīmi", fr: "10. Les premiers resteront premiers :\n11. ceux-là, on les voudra tout près,\n12. aux jardins du bonheur," },
        { ar: "ثُلَّةٌ مِنَ الْأَوَّلِينَ ﴿١٣﴾ وَقَلِيلٌ مِنَ الْآخِرِينَ ﴿١٤﴾ عَلَىٰ سُرُرٍ مَوْضُونَةٍ ﴿١٥﴾", tr: "13. thullatun mina l-awwalīna\n14. wa-qalīlun mina l-ākhirīna\n15. ʿalā sururin mawḍūnatin", fr: "13. les anciens en rangs fort nombreux\n14. et les derniers venus fort peu,\n15. sur des trônes de grand apparat" },
        { ar: "مُتَّكِئِينَ عَلَيْهَا مُتَقَابِلِينَ ﴿١٦﴾ يَطُوفُ عَلَيْهِمْ وَلْدَانٌ مُخَلَّدُونَ ﴿١٧﴾ بِأَكْوَابٍ وَأَبَارِيقَ وَكَأْسٍ مِنْ مَعِينٍ ﴿١٨﴾", tr: "16. muttaki’īna ʿalayhā mutaqābilīna\n17. yaṭūfu ʿalayhim wildānun mukhalladūna\n18. bi-akwābin wa-abārīqa wa-ka’sin min maʿīnin", fr: "16. où ils reposeront, les yeux dans les yeux,\n17. parmi eux, à la ronde, des enfants d'éternité autour d'eux\n18. porteront jattes, aiguières, coupe pleine à flots lumineux," },
        { ar: "لَا يُصَدَّعُونَ عَنْهَا وَلَا يُنْزِفُونَ ﴿١٩﴾ وَفَاكِهَةٍ مِمَّا يَتَخَيَّرُونَ ﴿٢٠﴾ وَلَحْمِ طَيْرٍ مِمَّا يَشْتَهُونَ ﴿٢١﴾", tr: "19. lā yuṣaddaʿūna ʿanhā wa-lā yunzifūna\n20. wa-fākihatin mimmā yatakhayyarūna\n21. wa-laḥmi ṭayrin mimmā yashtahūna", fr: "19. d'où ne viennent migraine ni même ébriété,\n20. avec les meilleurs fruits choisis de leur plein gré,\n21. et toutes chairs d'oiseaux à satiété," },
        { ar: "وَحُورٌ عِينٌ ﴿٢٢﴾ كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ ﴿٢٣﴾ جَزَاءً بِمَا كَانُوا يَعْمَلُونَ ﴿٢٤﴾", tr: "22. wa-ḥūrun ʿīnun\n23. ka-amthāli l-lu’lu’i l-maknūni\n24. jazā’an bi-mā kānū yaʿmalūna", fr: "22. et des beautés aux noirs, immenses yeux,\n23. vraies images de perles celées,\n24. pour prix de leurs œuvres passées," },
        { ar: "لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا ﴿٢٥﴾ إِلَّا قِيلًا سَلَامًا سَلَامًا ﴿٢٦﴾ وَأَصْحَابُ الْيَمِينِ مَا أَصْحَابُ الْيَمِينِ ﴿٢٧﴾", tr: "25. lā yasmaʿūna fīhā laghwan wa-lā ta’thīman\n26. illā qīlan salāman salāman\n27. wa-aṣḥābu l-yamīni mā aṣḥābu l-yamīni", fr: "25. Alors, propos futiles ou provocants on n'entendra,\n26. mais : paix ! paix ! et rien de plus que ce mot-là,\n27. gens de la droite, gens de la droite, qu'en est-il d'eux ?" },
        { ar: "فِي سِدْرٍ مَخْضُودٍ ﴿٢٨﴾ وَطَلْحٍ مَنْضُودٍ ﴿٢٩﴾ وَظِلٍّ مَمْدُودٍ ﴿٣٠﴾", tr: "28. fī sidrin makhdūdin\n29. wa-ṭalḥin manḍūdin\n30. wa-ẓillin mamdūdin", fr: "28. pour eux, de lotus la riche caresse,\n29. de mimosas les frondaisons épaisses,\n30. une ombre qui jamais ne cesse," },
        { ar: "وَمَاءٍ مَسْكُوبٍ ﴿٣١﴾ وَفَاكِهَةٍ كَثِيرَةٍ ﴿٣٢﴾ لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ ﴿٣٣﴾", tr: "31. wa-mā’in maskūbin\n32. wa-fākihatin kathīratin\n33. lā maqṭūʿatin wa-lā mamnūʿatin", fr: "31. une eau épandue sans fin,\n32. et des senteurs de fruits qui se déploient,\n33. toujours offerts, toujours cueillis et toujours là," },
        { ar: "وَفُرُشٍ مَرْفُوعَةٍ ﴿٣٤﴾ إِنَّا أَنْشَأْنَاهُنَّ إِنْشَاءً ﴿٣٥﴾ فَجَعَلْنَاهُنَّ أَبْكَارًا ﴿٣٦﴾", tr: "34. wa-furushin marfūʿatin\n35. innā ansha’nāhunna inshā’an\n36. fa-jaʿalnāhunna abkāran", fr: "34. et puis, au faîte de lits délicats,\n35. celles créées par Nous en leur nouvel état,\n36. et voulues vierges pour cela," },
        { ar: "عُرُبًا أَتْرَابًا ﴿٣٧﴾ لِأَصْحَابِ الْيَمِينِ ﴿٣٨﴾ ثُلَّةٌ مِنَ الْأَوَّلِينَ ﴿٣٩﴾", tr: "37. ʿuruban atrāban\n38. li-aṣḥābi l-yamīni\n39. thullatun mina l-awwalīna", fr: "37. amoureuses, de l'âge qui se doit,\n38. pour les gens de la droite, pour eux,\n39. les anciens, en rangs fort nombreux," },
        { ar: "وَثُلَّةٌ مِنَ الْآخِرِينَ ﴿٤٠﴾ وَأَصْحَابُ الشِّمَالِ مَا أَصْحَابُ الشِّمَالِ ﴿٤١﴾ فِي سَمُومٍ وَحَمِيمٍ ﴿٤٢﴾", tr: "40. wa-thullatun mina l-ākhirīna\n41. wa-aṣḥābu sh-shimāli mā aṣḥābu sh-shimāli\n42. fī samūmin wa-ḥamīmin", fr: "40. les derniers venus, en rangs fort nombreux.\n41. gens de la gauche, gens de la gauche, quelle est leur part ?\n42. le vent les brûle et l'eau n'est que chaleur," },
        { ar: "وَظِلٍّ مِنْ يَحْمُومٍ ﴿٤٣﴾ لَا بَارِدٍ وَلَا كَرِيمٍ ﴿٤٤﴾ إِنَّهُمْ كَانُوا قَبْلَ ذَٰلِكَ مُتْرَفِينَ ﴿٤٥﴾", tr: "43. wa-ẓillin min yaḥmūmin\n44. lā bāridin wa-lā karīmin\n45. innahum kānū qabla dhālika mutrafīna", fr: "43. l'ombre que ténèbres de l'air,\n44. ni fraîche, ni généreuse au cœur,\n45. Eh quoi ! leur passé pourtant était fastueux," },
        { ar: "وَكَانُوا يُصِرُّونَ عَلَى الْحِنْثِ الْعَظِيمِ ﴿٤٦﴾ وَكَانُوا يَقُولُونَ أَئِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَئِنَّا لَمَبْعُوثُونَ ﴿٤٧﴾ أَوَ آبَاؤُنَا الْأَوَّلُونَ ﴿٤٨﴾", tr: "46. wa-kānū yuṣirrūna ʿalā l-ḥinthi l-ʿaẓīmi\n47. wa-kānū yaqūlūna a’idhā mitnā wa-kunnā turāban wa-ʿiẓāman a’innā la-mabʿūthūna\n48. awa ābā’unā l-awwalūna", fr: "46. mais ils s'enracinaient dans le péché majeur,\n47. et ils allaient disant : « Lorsque nous serons morts, quand nous ne serons plus que poussière, ossements, nous verra-t-on vraiment ressuscités,\n48. nous... et nos pères, les premiers ? »" },
        { ar: "قُلْ إِنَّ الْأَوَّلِينَ وَالْآخِرِينَ ﴿٤٩﴾ لَمَجْمُوعُونَ إِلَىٰ مِيقَاتِ يَوْمٍ مَعْلُومٍ ﴿٥٠﴾ ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ ﴿٥١﴾", tr: "49. qul inna l-awwalīna wa-l-ākhirīna\n50. la-majmūʿūna ilā mīqāti yawmin maʿlūmin\n51. thumma innakum ayyuhā ḍ-ḍāllūna l-mukadhdhibūna", fr: "49. Dis : « Anciens ou derniers venus, on vous veut\n50. À un certain jour fixé, pour un temps prescrit tous offerts ».\n51. Et puis, vous que voilà, les égarés, rebelles à la vérité," },
        { ar: "لَآكِلُونَ مِنْ شَجَرٍ مِنْ زَقُّومٍ ﴿٥٢﴾ فَمَالِئُونَ مِنْهَا الْبُطُونَ ﴿٥٣﴾ فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ ﴿٥٤﴾", tr: "52. la’ākilūna min shajarin min zaqqūmin\n53. fa-māli’ūna minhā l-buṭūna\n54. fa-shāribūna ʿalayhi mina l-ḥamīmi", fr: "52. vous mangerez du Zaqqūm, un certain arbre d'enfer,\n53. vos panses vous en remplirez,\n54. puis boirez là-dessus d'une eau faite chaleur," },
        { ar: "فَشَارِبُونَ شُرْبَ الْهِيمِ ﴿٥٥﴾ هَٰذَا نُزُلُهُمْ يَوْمَ الدِّينِ ﴿٥٦﴾ نَحْنُ خَلَقْنَاكُمْ فَلَوْلَا تُصَدِّقُونَ ﴿٥٧﴾", tr: "55. fa-shāribūna shurba l-hīmi\n56. hadhā nuzuluhum yawma d-dīni\n57. naḥnu khalaqnākum fa-lawlā tuṣaddiqūna", fr: "55. et reboirez, tels chameaux pris d'un mal de soif dévoreur!\n56. Au jour du Jugement, les voilà accueillis au mieux !\n57. Nous Seuls vous avons créés. N'allez-vous pas accepter ce qui est vrai ?" },
        { ar: "أَفَرَأَيْتُمْ مَا تُمْنُونَ ﴿٥٨﴾ أَأَنْتُمْ تَخْلُقُونَهُ أَمْ نَحْنُ الْخَالِقُونَ ﴿٥٩﴾ نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ ﴿٦٠﴾", tr: "58. a-fa-ra’aytum mā tumnūna\n59. a-antum takhluqūnahu am naḥnu l-khāliqūna\n60. naḥnu qaddarnā baynakumu l-mawta wa-mā naḥnu bi-masbūqīna", fr: "58. Voyez la semence hors de vous jetée\n59. est-ce vous qui la créez, ou faire croître est-il de Notre fait?\n60. C'est nous Seuls qui fixons en vos rangs sa mesure à la mort, nous qui menons le jeu," },
        { ar: "عَلَىٰ أَنْ نُبَدِّلَ أَمْثَالَكُمْ وَنُنْشِئَكُمْ فِي مَا لَا تَعْلَمُونَ ﴿٦١﴾ وَلَقَدْ عَلِمْتُمُ النَّشْأَةَ الْأُولَىٰ فَلَوْلَا تَذَكَّرُونَ ﴿٦٢﴾ أَفَرَأَيْتُمْ مَا تَحْرُثُونَ ﴿٦٣﴾", tr: "61. ʿalā an nubaddila amthālakum wa-nunshi’kum fī mā lā taʿlamūna\n62. wa-laqad ʿalimtumu n-nash’ata l-ūlā fa-lawlā tadhakkarūna\n63. a-fa-ra’aytum mā taḥruthūna", fr: "61. pour vous substituer vos pareils, puis vous recréer comme vous n'avez pas idée,\n62. Vous savez bien votre première venue au monde : n'allez-vous pas la méditer ?\n63. Voyez ce que vous labourez" },
        { ar: "أَأَنْتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ ﴿٦٤﴾ لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا فَظَلْتُمْ تَفَكَّهُونَ ﴿٦٥﴾ إِنَّا لَمُغْرَمُونَ ﴿٦٦﴾", tr: "64. a-antum tazraʿūnahu am naḥnu z-zāriʿūna\n65. law nashā’u la-jaʿalnāhu ḥuṭāman fa-ẓaltum tafakkahūna\n66. innā la-mughramūna", fr: "64. est-ce vous qui l'aidez à croître, ou si croître est de notre fait?\n65. Un mot de Nous, et tout cela n'est plus que paille sèche, et vous dévidez, stupéfaits, vos regrets :\n66. « Nous voilà bien ! grevés !" },
        { ar: "بَلْ نَحْنُ مَحْرُومُونَ ﴿٦٧﴾ أَفَرَأَيْتُمُ الْمَاءَ الَّذِي تَشْرَبُونَ ﴿٦٨﴾ أَأَنْتُمْ أَنْزَلْتُمُوهُ مِنَ الْمُزْنِ أَمْ نَحْنُ الْمُنْزِلُونَ ﴿٦٩﴾", tr: "67. bal naḥnu maḥrūmūna\n68. a-fa-ra’aytumu l-mā’a l-ladhī tashrabūna\n69. a-antum anzaltumūhu mina l-muzni am naḥnu l-munzilūna", fr: "67. Pis encore frustrés ! »\n68. Voyez cette eau que vous buvez\n69. est-ce par vous qu'elle pleut du nuage, ou pleuvoir est-il de Notre fait?" },
        { ar: "لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ ﴿٧٠﴾ أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ ﴿٧١﴾ أَأَنْتُمْ أَنْشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنْشِئُونَ ﴿٧٢﴾", tr: "70. law nashā’u jaʿalnāhu ujājan fa-lawlā tashkurūna\n71. a-fa-ra’aytumu n-nāra l-latī tūrūna\n72. a-antum ansha’tum shajaratahā am naḥnu l-munshi’ūna", fr: "70. Un mot de Nous, et la voilà qui deviendrait saumâtre. Alors, n'allez-vous pas remercier ?\n71. Voyez ce feu jailli du bois frotté\n72. est-ce par vous que cet arbre-là vient à vivre, ou faire vivre est-il de Notre fait?" },
        { ar: "نَحْنُ جَعَلْنَاهَا تَذْكِرَةً وَمَتَاعًا لِلْمُقْوِينَ ﴿٧٣﴾ فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ﴿٧٤﴾ فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ ﴿٧٥﴾", tr: "73. naḥnu jaʿalnāhā tadhkiratan wa-matāʿan li-l-muqwīna\n74. fa-sabbiḥ bi-smi rabbika l-ʿaẓīmi\n75. fa-lā uqsimu bi-mawāqiʿi n-nujūmi", fr: "73. Tel nous, nous Seul, l'avons voulu ressouvenir, et providence au voyageur nécessiteux.\n74. Chante donc pure louange au Nom du l'Incommensurable, ton Seigneur !\n75. À jurer par la position des astres, rien ne sert" },
        { ar: "وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ ﴿٧٦﴾ إِنَّهُ لَقُرْآنٌ كَرِيمٌ ﴿٧٧﴾ فِي كِتَابٍ مَكْنُونٍ ﴿٧٨﴾", tr: "76. wa-innahu la-qasamun law taʿlamūna ʿaẓīmun\n77. innahu la-qur’ānun karīmun\n78. fī kitābin maknūnin", fr: "76. (et c'est pourtant serment, si vous saviez, majeur)\n77. ceci est un Verbe de pure grandeur,\n78. en un Livre bien gardé," },
        { ar: "لَا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ ﴿٧٩﴾ تَنْزِيلٌ مِنْ رَبِّ الْعَالَمِينَ ﴿٨٠﴾ أَفَبِهَٰذَا الْحَدِيثِ أَنْتُمْ مُدْهِنُونَ ﴿٨١﴾", tr: "79. lā yamassuhu illā l-muṭahharūna\n80. tanzīlun min rabbi l-ʿālamīna\n81. a-fa-bi-hādhā l-ḥadīthi antum mudhinūna", fr: "79. que peuvent toucher les seuls purifiés,\n80. et que le Maître des mondes nous révéla des cieux.\n81. eh quoi ! de tels discours, pouvez-vous les farder," },
        { ar: "وَتَجْعَلُونَ رِزْقَكُمْ أَنَّكُمْ تُكَذِّبُونَ ﴿٨٢﴾ فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ ﴿٨٣﴾ وَأَنْتُمْ حِينَئِذٍ تَنْظُرُونَ ﴿٨٤﴾", tr: "82. wa-tajʿalūna rizqakum annakum tukadhdhibūna\n83. fa-lawlā idhā balaghati l-ḥulqūmi\n84. wa-antum ḥīna’idhin tanẓurūna", fr: "82. et payez-vous votre provende de la vérité refusée ?\n83. ah ! quand un dernier souffle en la gorge se perd,\n84. devant vous, là, qui regardez" },
        { ar: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْكُمْ وَلَٰكِنْ لَا تُبْصِرُونَ ﴿٨٥﴾ فَلَوْلَا إِنْ كُنْتُمْ غَيْرَ مَدِينِينَ ﴿٨٦﴾ تَرْجِعُونَهَا إِنْ كُنْتُمْ صَادِقِينَ ﴿٨٧﴾", tr: "85. wa-naḥnu aqrabu ilayhi minkum wa-lākin lā tubṣirūna\n86. fa-lawlā in kuntum ghayra madīnīna\n87. tarjiʿūnahā in kuntum ṣādiqīna", fr: "85. sans voir que du mourant, et plus que vous, Nous sommes près,\n86. alors pourquoi, si vous Nous devez donc si peu,\n87. ne refoulez-vous pas ce souffle ? Faudra-t-il vous prendre au sérieux ?" },
        { ar: "فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ ﴿٨٨﴾ فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ ﴿٨٩﴾ وَأَمَّا إِنْ كَانَ مِنْ أَصْحَابِ الْيَمِينِ ﴿٩٠﴾", tr: "88. fa-ammā in kāna mina l-muqarrabīna\n89. fa-rawḥun wa-rayḥānun wa-jannatu naʿīmin\n90. wa-ammā in kāna min aṣḥābi l-yamīni", fr: "88. si l’homme, donc, rejoint ceux qui sont près de Dieu,\n89. alors, repos, parfums et jardins de bonheur.\n90. Si les gens de la droite le comptent parmi eux," },
        { ar: "فَسَلَامٌ لَكَ مِنْ أَصْحَابِ الْيَمِينِ ﴿٩١﴾ وَأَمَّا إِنْ كَانَ مِنَ الْمُكَذِّبِينَ الضَّالِّينَ ﴿٩٢﴾ فَنُزُلٌ مِنْ حَمِيمٍ ﴿٩٣﴾", tr: "91. fa-salāmun laka min aṣḥābi l-yamīni\n92. wa-ammā in kāna mina l-mukadhdhibīna ḍ-ḍāllīna\n93. fa-nuzulun min ḥamīmin", fr: "91. les gens de la droite diront : « La Paix sur toi, Ô bienheureux ! »\n92. Mais s’il est des menteurs rebelles et des égarés sans aveu,\n93. pour tout accueil, une eau faite chaleur," },
        { ar: "وَتَصْلِيَةُ جَحِيمٍ ﴿٩٤﴾ إِنَّ هَٰذَا لَهُوَ حَقُّ الْيَقِينِ ﴿٩٥﴾ فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ﴿٩٦﴾", tr: "94. wa-taṣliyatu jaḥīmin\n95. inna hādhā la-huwa ḥaqqu l-yaqīni\n96. fa-sabbiḥ bi-smi rabbika l-ʿaẓīmi", fr: "94. et la fournaise et ses ardeurs.\n95. C’est là le vrai, le sûr, le lumineux\n96. Chante donc pure louange au Nom du l’Incommensurable, ton Seigneur !" },
        { ar: "سبحان ربك رب العزة عما يصفون وسلام على المرسلين والحمد لله رب العالمين (مرة واحدة)", tr: "Subḥāna rabbika rabbi l-ʿizzati ʿammā yaṣifūn wa-salāmun ʿalā l-mursalīn wa-l-ḥamdu li-l-Llāhi rabbi l-ʿālamīna (1 fois)", fr: "Gloire à ton Seigneur ! Le Seigneur de la Toute Puissance, très éloigné de ce qu'ils imaginent! Paix aux Prophètes ! Louange à Dieu, le Seigneur des mondes. (1 fois)" },
        { ar: "اللهم يا من جعلت الصلاة على النبي من القربات أتقرب إليك بكل صلاة صليت عليه من أول النشأة إلى ما لا نهاية للكمالات (3 مرات)", tr: "Allahumma yā man jaʿalta ṣ-ṣalāta ʿalā n-nabiyyi mina l-qurubāt ataqarrabu ilayka bi-kulli ṣalātin ṣulliyat ʿalayhi min awwali n-nashʾati ilā mā lā nihāyata li-l-kamālāt (3 fois)", fr: "Ô Allâh ! Ô Toi qui as fait de la prière sur le Prophète, l'un des moyens pour jouir de Ta proximité, je me rapproche de Toi par toute prière qui a été faite sur lui, depuis le début de la création jusqu'à l'infini. (3 fois)" },
        { ar: "سبحان ربك رب العزة عما يصفون وسلام على المرسلين والحمد لله رب العالمين (مرة واحدة)", tr: "Subḥāna rabbika rabbi l-ʿizzati ʿammā yaṣifūn wa-salāmun ʿalā l-mursalīn wa-l-ḥamdu li-l-Llāhi rabbi l-ʿālamīna (1 fois)", fr: "Gloire à ton Seigneur ! Le Seigneur de la Toute Puissance, très éloigné de ce qu'ils imaginent! Paix aux Prophètes ! Louange à Dieu, le Seigneur des mondes. (1 fois)" },
        { ar: "أعوذ بالله من الشيطان الرجيم (مرة واحدة)\nبسم الله الرحمن الرحيم (3 مرات)", tr: "Aʿūdhu bi-l-Llāhi mina ash-shayṭāni r-rajīmi (1 fois)\nbismi l-Llāhi r-Raḥmāni r-Raḥīmi (3 fois)", fr: "Je me réfugie en Dieu contre satan le lapidé (1 fois)\nAu Nom de Dieu le Tout Miséricordieux, le Très Miséricordieux (3 fois)" },
        { isTitlePage: true, ar: "الإستغفار", fr: "La demande de pardon", sub: "Al-Istighfār" },
        { ar: "وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِنْدَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ (المزمل: 20) (مرة واحدة)", tr: "wa mā tuqaddimū li-anfusikum min khayrin tajidūhu ʿinda l-Llāhi huwa khayran wa-aʿẓama ajran wa-staghfirū l-Llāha inna l-Llāha ghafūrun raḥīmun (1 fois)", fr: "Tout bien que vous avancerez pour vous-mêmes, vous le retrouverez auprès de Dieu, sous la forme d'une récompense meilleure et plus abondante. Demandez pardon à Dieu! Dieu est, en vérité, Celui qui pardonne; Il est Miséricordieux. (1 fois)" },
        { ar: "استغفر الله (33 أو 100 مرة)\nوفي الختام يقول استغفر الله العظيم", tr: "Astaghfiru l-Llāh (99 ou 32 fois)\nAstaghfiru l-Llāh l-ʿaẓīm (à la 100e ou 33e fois)", fr: "Je demande pardon à Dieu (99 ou 32 fois)\nJe demande pardon à Dieu, l'Incommensurable (à la 100e ou 33e fois)" },
        { isTitlePage: true, ar: "الصلاة على النبي", fr: "La prière sur le Prophète", sub: "Al-ṣalātu ʿalā n-nabī" },
        { ar: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا (الأحزاب: 56) (مرة واحدة)", tr: "Inna l-Llāha wa-malāʾikatahu yuṣallūna ʿalā n-nabiyyi yā ayyuhā l-ladhīna āmanū ṣallū ʿalayhi wa-sallimū taslīman (1 fois)", fr: "Oui, Dieu et Ses anges bénissent le Prophète. Ô vous, les croyants! Priez pour lui et appelez sur lui le salut. (1 fois)" },
        { ar: "اللهم صل على سيدنا محمد عبدك و رسولك النبي الأمي وعلى آله وصحبه وسلم (33 أو 100 مرة)\nوفي الختام يقول وسلم تسليما", tr: "Allāhumma ṣalli ʿalā sayyidinā Muḥammadin ʿabdika wa-rasūlika an-nabiyyi l-ummiyyi wa-ʿalā ālihi wa-ṣaḥbihi wa-sallim (99 ou 32 fois)\n...taslīman", fr: "Ô Allâh! Prie sur notre seigneur Muhammad; Ton serviteur et Ton envoyé, le Prophète illettré: ainsi que sur les siens, ses compagnons et adresse-leur Ton salut. (99 ou 32 fois)\nAccorde-lui un salut plénier (à la 100e ou 33e fois)" },
        { isTitlePage: true, ar: "الهيللة", fr: "La formule de l'Unité", sub: "Al-Haylala" },
        { ar: "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ (آل عمران : 18 - 19) (مرة واحدة)", tr: "Shahida l-Llāhu annahu lā ilāha illā huwa wa-l-malāʾikatu wa-ulū l-ʿilmi qāʾiman bi-l-qisṭi lā ilāha illā huwa l-ʿazīzu l-ḥakīmu inna d-dīna ʿinda l-Llāhi l-islāmu (1 fois)", fr: "Dieu atteste, ainsi que les Anges et ceux qui détiennent le savoir, qu'il n'est de dieu que Lui, qui assure la justice. Point de divinité en dehors de Lui, le Puissant, le Sage. Au regard de Dieu, il n'est de religion que l'islam. (1 fois)" },
        { ar: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير (33 أو 100 مرة)", tr: "Lā ilāha illā l-Llāhu waḥdahu lā sharīka lahu lahu l-mulku wa-lahu l-ḥamdu wa-huwa ʿalā kulli shayʾin qadīrun (100 ou 33 fois)", fr: "Il n'est de dieu que Dieu, l'Unique, Il est sans associé, à Lui, le règne; à Lui, la louange. Il est Puissant sur toute chose. (100 ou 33 fois)" },
        { isTitlePage: true, ar: "الحمدلة", fr: "Louange et grâce", sub: "Al-Ḥamdala" },
        { ar: "الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ (الأعراف: 43) (مرة واحدة)", tr: "Al-ḥamdu li-l-Llāhi l-ladhī hadānā li-hādhā wa-mā kunnā li-nahtadiya lawlā an hadānā l-Llāhu (1 fois)", fr: "Louange à Dieu qui nous a conduits ici; nous n'aurions pas été dirigés, si Dieu ne nous avait pas dirigés. (1 fois)" },
        { ar: "بسم الله الرحمن الرحيم\nقُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾ (الإخلاص) (3 مرات)", tr: "Bismi l-Llāhi r-raḥmāni r-raḥīmi\nQul huwa l-Llāhu aḥadun Allāhu ṣ-ṣamadu lam yalid wa-lam yūlad wa-lam yakun lahu kufuwan aḥadun (3 fois)", fr: "Au Nom de Dieu, Celui qui fait Miséricorde, le Miséricordieux.\nDis : « Lui, Dieu est Un! Dieu! L'Impénétrable! Il n'engendre pas; Il n'est pas engendré; nul n'est égal à Lui! (3 fois)" },
        { ar: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (الصافات: 180 - 182) (مرة واحدة)", tr: "Subḥāna rabbika rabbi l-ʿizzati ʿammā yaṣifūna wa-salāmun ʿalā l-mursalīna wa-l-ḥamdu li-l-Llāhi rabbi l-ʿālamīna (1 fois)", fr: "« Gloire à ton Seigneur ! Le Seigneur de la Toute-Puissance, très éloigné de ce qu'ils imaginent! Paix aux Prophètes ! Louange à Dieu, le Seigneur des mondes » (1 fois)" },
        { ar: "الحمد لله و الشكر لله (33 أو 100 مرة)", tr: "Al-ḥamdu li-l-Llāhi wa-sh-shukru li-l-Llāhi (100 ou 33 fois)", fr: "Louange et grâce à Dieu. (100 ou 33 fois)" },
        { ar: "الصلاة و السلام عليك يا سيدنا يا حبيب الله\nالصلاة والسلام عليك يا سيدنا يا نبي الله\nالصلاة والسلام عليك يا سيدنا يا رسول الله", tr: "aṣ-ṣalātu wa-s-salāmu ʿalayka yā sayyidinā yā ḥabība l-Llāhi\naṣ-ṣalātu wa-s-salāmu ʿalayka yā sayyidinā yā nabiya l-Llāhi\naṣ-ṣalātu wa-s-salāmu ʿalayka yā sayyidinā yā rasūla l-Llāhi", fr: "Que la prière et la paix soient sur toi, Ô le bien Aimé de Dieu!\nQue la prière et la paix soient sur toi, Ô Prophète de Dieu !\nQue la prière et la paix soient sur toi, Ô Envoyé de Dieu!" },
        { ar: "ألف صلاة وألف سلام عليك و على آلك والرضا عن أصحابك يا مولانا يا خير خلق الله أجمعين والحمد لله رب العالمين", tr: "alfu ṣalātin wa-alfu salāmin ʿalayka wa-ʿalā ālika wa-r-riḍā ʿan aṣḥābika yā mawlānā yā khayra khalqi l-Llāhi ajmaʿīn wa-l-ḥamdu li-l-Llāhi rabbi l-ʿālamīn", fr: "Mille prières et paix sur toi! Que la prière de Dieu soit sur toi, sur les tiens, et que Dieu agrée tes compagnons; Ô toi notre Maître! Ô toi qui es l'Élu d'entre la création entière ! Louange à Dieu, Seigneur des mondes." }
    ]
  },
  {
    id: "mashishiya",
    title: "الصلاة المشيشية",
    desc: "Prière du Shaykh Sīdī 'Abd as-Salām ibn Mashīsh",
    content: [
      { 
        isQuote: true, 
        ar: "اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ<br><span style='font-size:0.7em;'>(العنكبوت 45)</span>", 
        fr: "Récite ce qui t’est révélé du Livre et accomplis la Salat. En vérité la Salat préserve de la turpitude et du blâmable. Le Dikhr d’Allah (invocation) est certes ce qu’il y a de plus grand. Et Allah sait ce que vous faites.", 
        sub: "(Coran 29 : 45)" 
      },
      { isTitlePage: true, ar: "الصلاة المشيشية", fr: "La Prière Mashishiya", sub: "Shaykh Sīdī 'Abd as-Salām ibn Mashīsh" },
      {
        isLongText: true,
        ar: "عبد السلام بن مشيش العلمي (1163 - 1228م) عالم متصوف عاش في زمن الخلافة الموحدية ولد بمنطقة بني عروس بالقرب من مدينة طنجة وانتقل بعدها للعيش بجبل العلم قرب العرائش وهناك توفي حيث يوجد ضريحه، يعد أحد أعلام التصوف وأستاذ أبي الحسن الشاذلي صاحب الطريقة الشاذلية.",
        fr: "Abd al-Salām ibn Mashīsh al-'Alamī (que Dieu sanctifie son âme) (1163-1228) est un savant soufi qui a vécu à l'époque du califat almohade. Il est né dans la région de Beni Arouss près de la ville de Tanger. Il a vécu jusqu'à sa mort dans la montagne d'Al-Alam près d'Al-Araich, où se trouve son mausolée. Il est considéré comme l'une des plus éminentes figures du soufisme. Il a été le maître de Abu al-Hassan al-Shādhilī, fondateur de la voie Shādhiliyya.",
        tr: "al-ṣalāt al-Mashīshiyya li-l-Shaykh 'Abd as-Salām ibn Mashīsh"
      },
      {
        ar: "اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقْتِ الْأَسْرَارُ، وَانْفَلَقَتِ الأَنْوَارُ، وَ فِيهِ ارْتَقَتَ الحَقَائِقِ وَ تَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الخَلَائِقُ",
        tr: "Allāhumma ṣalli ʿalā man minhu inshaqqati l-asrār wa-nfalaqati l-anwār wa-fīhi rtaqati l-ḥaqāʾiq wa-tanazzalat ʿulūmu Ādama fa-aʿjaza l-khalāʾiq",
        fr: "Ô Allāh ! Prie sur celui de qui dérivent les secrets spirituels de qui jaillissent les lumières, en qui se subliment les vérités et en qui furent déposées les sciences d'Adam de sorte qu'il rendit les créatures perplexe."
      },
      {
        ar: "وَ لَهُ تَضَاءَلَتِ الفُهُومُ فَلَمْ يُدْرِكْهُ مِنَّا سَابِقٌ وَ لَا لَاحِقٌ",
        tr: "wa-lahu taḍāʾalati l-fuhūmu fa-lam yudrik-hu minnā sābiqun wa-l-ladhīna la-ḥiqun",
        fr: "Les intelligences se rapetissent devant lui, et aucun de nous ne le comprit : ni ses devanciers, ni ses suivants"
      },
      {
        ar: "فرياض الملكوت بزهْرِ جَمَالِهِ مُونقَةٌ، وَحِيَاضُ الجَبَرُوتَ بِفَيْضَ أَنْوَارَهِ مُتَدُفِقَةٌ",
        tr: "fa-riyāḍu l-malakūti bi-zahri jamālihi mūniqa wa-ḥiyāḍu l-jabarūti bi-fayḍi anwārihi mutadaffiqa",
        fr: "Les jardins du monde spirituel sont ornés par la fleur de sa beauté; et les bassins du monde de la Toute Puissance débordent par le flux de ses lumières."
      },
      {
        ar: "وَلَا شَيْءَ إِلَّا وَ هُوَ بِهِ مَنُوطٌ إِذْ لَوْلَا الوَاسِطَةُ لَذَهَبَ كما قيل الموسوط",
        tr: "wa-lā shayʾa illā wa-huwa bihi manūṭ idh lawlā l-wāsiṭatu la-dhahaba kamā qīla l-mawsūṭ",
        fr: "Il n'existe pas de chose qui ne soit reliée à lui, mais, comme cela a été dit, n'était le médiateur, tout ce qui est lié à lui disparaîtrait."
      },
      {
        ar: "صَلَاةً تَلِيقُ بِكَ مِنْكَ إِلَيْكَ كَمَا هُوَ أَهْلُهُ،",
        tr: "ṣalātan talīqu bi-ka minka ilayka kamā huwa ahluh",
        fr: "(Bénis-le, Ô mon Dieu) par une bénédiction qui Te convient, de Toi à lui, selon qu'il en est digne."
      },
      {
        ar: "اللَّهُمَّ إِنَّهُ سِرَّكَ الجَامِعُ الدَّالُ عَلَيْكَ وَحِجَابُكَ الْأَعْظَمُ القَائِمُ لكَ بَيْنَ يَدَيْكَ،",
        tr: "Allāhumma innahu sirruka l-jāmiʿu l-dāllu ʿalayka wa-ḥijābuka l-aʿẓamu l-qāʾimu laka bayna yadayk",
        fr: "Ô Allah! Il est Ton secret intégral qui englobe tout et qui Te démontre Il est Ton voile suprême dressé devant Toi, entre Tes mains"
      },
      {
        ar: "اللَّهُمَّ الْحِقْنِي بِنَسَبِهِ، وَحَقِّقْنِي بِحَسَبِهِ وَ عَرَّفْنِي إِيَّاهُ مَعْرِفَةً أَسْلَمُ بِهَا مِنْ مَوَارِدَ الجَهْلِ وَ أَكْرَعُ بِهَا مِنْ مَوَارِدِ الْفَضْلِ",
        tr: "Allāhumma alḥiqnī bi-nasabihi wa-ḥaqqiqnī bi-ḥasabihi wa ʿarrifnī iyyāhu maʿrifatan aslamu bihā min mawāridi l-jahli wa akraʿu bihā min mawāridi l-faḍli",
        fr: "Ô Allâh! Joins-moi à sa parenté. Réalise-moi par sa noblesse. Et fais-le moi connaître par une connaissance qui m'épargne de l'eau trouble (mawārid) de l'ignorance et qui me désaltère par les eaux pures (mawārid) de la grâce"
      },
      {
        ar: "وَاحْمِلْنِي عَلَى سَبِيلِهِ إِلَى حَضْرَتِكَ حَمْلاً مَحْفُوفًا بِنَصْرَتِكَ",
        tr: "wa-aḥmilnī ʿalā sabīlihi ilā ḥaḍratika ḥamlan maḥfūfan bi-nuṣratika",
        fr: "Porte-moi dans sa voie vers Ta présence, Enveloppé de Ton secours"
      },
      {
        ar: "وَاقْذِفُ بِي عَلَى البَاطِلِ فَأَدْمَغَهُ",
        tr: "wa-aqdhif bi ʿalā l-bāṭili fa-admaghahu",
        fr: "Frappe par moi sur ce qui est vain afin que je l'anéantisse,"
      },
      {
        ar: "وَزُجَّ بِي فِي بِحَارِ الأَحَدِيَةِ وَانْشَلَنِي مِنْ أَوْحَالِ التَّوْحِيدِ",
        tr: "wa-zujja bi fī biḥāri l-aḥadiyyati wa-nshulanī min awḥāli t-tawḥīdi",
        fr: "Plonge-moi dans les océans de l'Unicité, Et tire-moi de la confusion du tawḥīd"
      },
      {
        ar: "وَأَغْرَقْنِي فِي عَيْنِ بحر الوَحْدَة",
        tr: "wa-aghriqnī fī ʿayni baḥri l-waḥdati",
        fr: "et noie-moi dans la source pure de l'océan de l'Unicité"
      },
      {
        ar: "حَتَّى لَا أَرَى وَ لَا أَسْمَعَ وَ لَا أَجِدَ وَ لَا أُحِسٌ إِلَّا بِهَا",
        tr: "ḥattā lā arā wa lā asmaʿ wa lā ajida wa lā uḥiss illā bihā",
        fr: "afin que je ne voie, ni n'entende, ni n'aie conscience, ni ne sente que par elle"
      },
      {
        ar: "وَاجْعَلِ الحِجَابَ الْأَعْظَمَ حَيَاةَ رُوحِي وَ رُوحَهُ سِرّ حَقِيقَتِي وَحَقِيقَتَهُ جَامِعَ عَوَالِمِي",
        tr: "wa-jʿali l-ḥijāba l-aʿẓama ḥayāta rūḥī wa rūḥahu sirra ḥaqīqatī wa ḥaqīqatahu jāmiʿa ʿawālimī",
        fr: "Fais du Voile suprême la vie de mon esprit, et de son esprit le secret de ma réalité, et de sa réalité tous mes mondes"
      },
      {
        ar: "بِتَحْقِيقِ الحَقِّ الْأَوَّلِ يَا أَوَّلُ يَا آخِرُ يَا ظَاهِرُ يَا بَاطِنُ إِسْمَعْ نَدَائِي بِمَا سَمِعْتَ بِهِ نِدَاءً عَبْدِكَ زَكَرِيَاءُ عَلَيْهِ السلام",
        tr: "bi-taḥqīqi l-ḥaqqi l-awwali yā awwalu yā ākhiru yā ẓāhiru yā bāṭinu ismaʿ nadāʾī bimā samiʿta bihi nidāʾa ʿabdika zakariyyā ʿalayhi s-salām",
        fr: "par la réalisation de la vérité première, Ô Premier ! Ô Dernier ! Ô Apparent ! Ô Caché! Ecoute mon appel comme Tu as écouté celui de Ton serviteur Zacharie (sur lui la paix)"
      },
      {
        ar: "وَانْصُرْنِي بِكَ لَكَ وَأَيْدُنِي بِكَ لَكَ وَاجِمَع بَيْنِي وَبَيْنَكَ وَحُلَ بَيْنِي وَبَيْنَ غَيْرِكَ",
        tr: "wa-nṣurnī bika laka wa-ayyidnī bika laka wa-jmaʿ baynī wa baynaka wa ḥul baynī wa bayna ghayrika",
        fr: "Secours-moi par Toi pour Toi, et soutiens-moi par Toi pour Toi, et unis-moi à Toi, et sépare-moi de ce qui n'est pas Toi."
      },
      {
        ar: "الله الله الله",
        tr: "Allāh Allāh Allāh",
        fr: "Allāh! Allāh! Allāh!"
      },
      {
        ar: "إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ لَرَادُّكَ إِلَى مَعَادٍ (القصص: 85)",
        tr: "Inna l-ladhī faraḍa ʿalayka l-qurʾāna la-rādduka ilā maʿādin",
        fr: "« En vérité, Celui qui t'a imposé le Coran te ramènera au terme promis » (Coran, 28: 85)."
      },
      {
        ar: "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا (الكهف: 10) (3 مرات)",
        tr: "Rabbanā ātinā min ladunka raḥmatan wa-hayyiʾ lanā min amrinā rashadan (3 fois)",
        fr: "« Notre Seigneur! accorde-nous une miséricorde venue de Toi et assure-nous une conduite droite!» (Coran, 18: 10). (3 fois)"
      },
      {
        ar: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا (الأحزاب: 56)",
        tr: "Inna l-Llāha wa-malāʾikatahu yuṣallūna ʿalā n-nabiyyi yā ayyuhā l-ladhīna āmanū ṣallū ʿalayhi wa-sallimū taslīman",
        fr: "« En vérité Allah et Ses Anges bénissent le Prophète. Ô vous qui avez la foi, priez sur lui et appelez sur lui le salut » (Coran, 33: 56)."
      },
      {
        ar: "صَلَوَاتُ اللهِ وَ سَلَامُهُ وَ تَحِيَاتُهُ وَ رَحْمَتُهُ وَ بَرَكَاتُهُ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَ نَبِيِّكَ وَ رَسُولِكَ النَّبِيِّ الْأُمِّي وَ عَلَى آلِهِ وَ صَحْبِهِ عَدَدَ الشَّفْعِ وَ الْوَتْرِ وَ عَدَدَ كَلِمَاتِ رَبَّنَا التَّامَّاتِ الْمُبَارَكَاتِ",
        tr: "Ṣalawātu l-Llāhi wa-salāmuhu wa-taḥiyyātuhu wa-raḥmatuhu wa-barakātuhu ʿalā sayyidinā muḥammadin ʿabdika wa nabiyyika wa-rasūlika n-nabiyyi l-ummiyyi wa-ʿalā ālihi wa-ṣaḥbihi ʿadada sh-shafʿi wa l-watri wa-ʿadada kalimāti rabbinā t-tāmmāti l-mubārakāti",
        fr: "Que la prière, la paix, les salutations, la miséricorde et les bénédictions soient sur notre Maître Muhammad, Ton Serviteur et Ton Envoyé, le Prophète illettré; ainsi que sur les siens, ses compagnons à la mesure des Paroles sublimes et bénies de notre Seigneur."
      },
      {
        ar: "سُبْحَانَ رَبَّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (الصافات: 180 - 182)",
        tr: "Subḥāna rabbika rabbi l-ʿizzati ʿammā yaṣifūna wa salāmun ʿalā l-mursalīna wa l-ḥamdu li-l-lāhi rabbi l-ʿālamīna",
        fr: "« Gloire à ton Seigneur! Le Seigneur de la Toute-Puissance, très éloigné de ce qu'ils imaginent! Paix aux Prophètes! Louange à Dieu, le Seigneur des mondes » (Coran, 37: 180-182)."
      }
    ]
  },
  {
    id: "hizb_bahr",
    title: "حزب البحر",
    desc: "L'Oraison de la Mer",
    content: [
      /* Transition Coranique */
      { 
        isQuote: true, 
        ar: "الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ<br><span style='font-size:0.7em;'>(آل عمران : 191)</span>", 
        fr: "qui, debout, assis, couchés sur leurs côtés, invoquent Allah et méditent sur la création des cieux et de la terre (disant) : « Notre Seigneur ! Tu n’as pas créé cela en vain. Gloire à Toi ! Garde-nous du châtiment du Feu. »", 
        sub: "(Coran 3 : 191)" 
      },
      /* Titre */
      { isTitlePage: true, ar: "حزب البحر", fr: "L'Oraison de la Mer", sub: "Hizb al-Baḥr" },
      /* Biographie */
      {
        isLongText: true,
        ar: "الشيخ أبو الحسن علي بن عبد الله بن عبد الجبار الشاذلي المغربي، إليه تنتسب الطائفة الشاذلية، سكن الإسكندرية، ولد 1175م بقبيلة الأخماس الغمارية بالمغرب، تفقه وتصوف في تونس، وسكن مدينة (شاذلة) التونسية ونسب إليها، وتوفي الشاذلي بوادي حميثرة بصحراء عيذاب بمصر متوجهاً إلى بيت الله الحرام في 1258م. خلف وراءه العديد من الأوراد معروفة بالأحزاب، كحزب النصر، حزب اللطف وحزب البر ...",
        fr: "Le Cheikh Abu al-Hassan Ali ibn-Abdullah ibn-Abd al-Jabbar al-Shâdhilī al-Maghribī, (que Dieu sanctifie son âme) dont la voie Shâdhiliyy porte jusqu'à aujourd'hui son nom, résidait à Alexandrie. Il est né en 1175 au sein de la tribu d'al-Akhmas al-Ghamaria au Maroc. Il a étudié la jurisprudence et le soufisme en Tunisie, et vécut dans la ville tunisienne Shadhilah, éponyme de Abu al-Hassan. Il est mort à Wadi Humaithra en Égypte, dans le désert d'Aidhab, durant son voyage vers la Mecque, en 1258. Il laissa de nombreux écrits connu sous le nom Ahzâb, dont les principaux sont Hizb al-Nasr, Hizb al-Lutf et hizb al-Bar ...",
        tr: "للشيخ أبو الحسن الشاذلي"
      },
      /* Versets Intro */
      {
        ar: "فقد ابتلي المؤمنون وزلزلوا زلزالا شديدا وإذ يقول المنافقون والذين في قلوبهم مرض ما وعدنا الله ورسوله إلا غرورا (الأحزاب: 11 - 12)",
        tr: "fa-qad ibtuliya l-mūminūna wa-zulzilū zilzālan shadīdan wa-idh yaqūlu l-munāfiqūna wa-l-ladhīna fī qulūbihim maraḍun mā waʻadanā l-Llāhu wa-rasūluhu illā ghurūran",
        fr: "Car les croyants furent éprouvés et ébranlés d'une violente secousse. Les hypocrites et ceux dont le cœur est malade leur disaient : « Ce que Dieu et Son Envoyé nous ont promis n'est que duperie! » (Coran, 33: 11-12)."
      },
      {
        ar: "بسم الله الرحمن الرحيم",
        tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīmi",
        fr: "Au Nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux"
      },
      /* Hizb Start */
      {
        ar: "يا علي يا عظيم يا حليم يا عليم أنت ربي وعلمك حسبي فنعم الرب ربي ونعم الحسب حسبي تنصر من تشاء وأنت العزيز الرحيم نسألك العصمة في الحركات والسكنات والكلمات والإرادات والخطرات من الشكوك والظنون والأوهام الساترة للقلوب عن مطالعة الغيوب",
        tr: "yā ʿaliyyu yā ʿaẓīmu yā ḥalīmu yā ʿalīmu anta rabbī wa ʿilmuka ḥasbī fa-niʿma r-rabbu rabbī wa-niʿma l-ḥasbu ḥasbī tanṣuru man tashāʾu wa-anta l-ʿazīzu r-raḥīmu nasʾaluka l-ʿiṣmata fī l-ḥarakāti wa-s-sakanāti wa-l-kalimāti wa-l-irādāti wa-l-khaṭarāti mina sh-shukūki wa-ẓ-ẓunūni wa-l-awhāmi s-sātirati li-l-qulūbi ʿan muṭālaʿati l-ghuyūbi",
        fr: "Dieu! Sublime! Magnifique! Ô Très Clément! Omniscient! Tu es mon Seigneur, et Ta science me suffit. Quel excellent Seigneur, et quelle satisfaction! Tu secours qui Tu veux, car Tu es le Très Fort, le Très Miséricordieux ! Dans le mouvement comme dans le repos, dans la parole, les désirs et les pensées, nous Te demandons de nous préserver des doutes, des conjectures et des illusions, qui empêchent le cœur de scruter Tes mystères !"
      },
      {
        ar: "فتبتنا وانصرنا وسخر لنا هذا البحر كما سخرت البحر لموسى وسخرت النار لإبراهيم وسخرت الجبال والحديد لداود وسخرت الريح والشياطين والجن لسليمان وسخر لنا كل بحر هو لك في الأرض والسماء والملك والملكوت وبحر الدنيا وبحر الآخرة وسخر لنا كل شيء يا من بيده ملكوت كل شيء",
        tr: "fa-thabbitnā wa-nṣurnā wa-sakhkhir lanā hādhā l-baḥra kamā sakhkharta l-baḥra li-mūsā wa-sakhkharta n-nāra li-ibrāhīma wa-sakhkharta l-jibāla wa-l-ḥadīda li-dāwūda wa-sakhkharta r-rīḥa wa-sh-shayāṭīna wa-l-jinna li-sulaymāna wa-sakhkhir lanā kulla baḥrin huwa laka fī l-arḍi wa-s-samāʾi wa-l-mulki wa-l-malakūti wa-baḥri d-dunyā wa-baḥri l-ākhirati wa-sakhkhir lanā kulla shayʾin yā man bi-yadihi malakūtu kulli shayʾin",
        fr: "Alors affermis-nous et secours-nous ! Fais que cette mer nous soit soumise, comme Tu as soumis la mer pour Moïse, le feu pour Abraham, les montagnes et le fer pour David, le vent, les diables et les djinns pour Salomon ! Fais que toute mer qui T'appartienne nous soit soumise, aussi bien sur terre que dans le ciel, dans le monde sensible et dans le royaume céleste, la mer de cette vie et celle de l'Au-delà! Rends-nous soumise toute chose, Ô Toi, « Celui qui détient en Sa main la royauté de toute chose »."
      },
      {
        ar: "كهيعص كهيعص كهيعص",
        tr: "kāf-hā-yā-ʿayn-ṣād (3 fois)",
        fr: "Kāf - Hā - Yā - ʿAyn - Ṣād (3 fois)."
      },
      {
        ar: "انصرنا فإنك خير الناصرين وافتح لنا فإنك خير الفاتحين واغفر لنا فإنك خير الغافرين وارحمنا فإنك خير الراحمين وارزقنا فإنك خير الرازقين واهدنا ونجنا من القوم الظالمين",
        tr: "unṣurnā fa-innaka khayru n-nāṣirīna wa-iftaḥ lanā fa-innaka khayru l-fātiḥīna wa-ghfir lanā fa-innaka khayru l-ghāfirīna wa-rḥamnā fa-innaka khayru r-rāḥimīna wa-rzuqnā fa-innaka khayru r-rāziqīna wa-hdinā wa-najjinā mina l-qawmi ẓ-ẓālimīna",
        fr: "Secours-nous, car Tu es par excellence Celui qui assiste! Accorde-nous l'ouverture spirituelle, car Toi seul peux la donner! Fais-nous miséricorde, car Tu es le meilleur des miséricordieux! Sustente-nous, car Toi seul pourvois au besoin des créatures! Guide-nous, et sauve-nous des oppresseurs!"
      },
      {
        ar: "وهب لنا ريحا طيبة كما هي في علمك وانشرها علينا من خزائن رحمتك واحملنا بها حمل الكرامة مع السلامة والعافية في الدين والدنيا والآخرة إنك على كل شيء قدير",
        tr: "wa-hab lanā rīḥan ṭayyibatan kamā hiya fī ʿilmika wa-nshurhā ʿalaynā min khazāʾini raḥmatika wa-aḥmilnā bihā ḥamla l-karāmati maʿa s-salāmati wa-l-ʿāfiyati fī d-dīni wa-d-dunyā wa-l-ākhirati innaka ʿalā kulli shayʾin qadīrun",
        fr: "Accorde-nous un vent favorable, tel que peut le concevoir Ta science et, le prenant des trésors de Ta Miséricorde, déploie-le sur nous! Fais qu'il nous porte de façon miraculeuse, et que nous accompagnent la sauvegarde et l'intégrité dans nos vies spirituelle et temporelle, ainsi que dans l'Au-delà: Tu es Puissant sur toute chose !"
      },
      {
        ar: "اللهم يسر لنا أمورنا مع الراحة لقلوبنا وأبداننا والسلامة والعافية في ديننا ودنيانا وكن لنا صاحبا في سفرنا وخليفة في أهلنا واطمس على وجوه أعدائنا وامسحهم على مكانتهم فلا يستطيعون المضي ولا المجيء إلينا",
        tr: "Allāhumma yassir lanā umūranā maʿa r-rāḥati li-qulūbinā wa-abdāninā wa-s-salāmati wa-l-ʿāfiyati fī dīninā wa-dunyānā wa-kun lanā ṣāḥiban fī safarinā wa-khalīfatan fī ahlinā wa-ṭmis ʿalā wujūhi aʿdāʾinā wa-msakhhum ʿalā makānatihim fa-lā yastaṭīʿūna l-muḍiyya wa-lā l-majīʾa ilaynā",
        fr: "Mon Dieu, facilite-nous nos affaires, tout en nous assurant le repos du cœur et du corps, ainsi que santé et protection dans nos vies spirituelle et temporelle. Sois pour nous un compagnon durant le voyage, et remplace-nous au sein de notre famille ! Efface les visages de nos ennemis, et pétrifie-les sur place, de sorte qu'ils ne puissent ni nous échapper ni fondre sur nous :"
      },
      {
        ar: "وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَى أَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّى يُبْصِرُونَ وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَى مَكَانَتِهِمْ فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ (يس: 66 - 67)",
        tr: "wa-law nashāʾu la-ṭamasnā ʿalā aʿyunihim fa-stabaqū ṣ-ṣirāṭa fa-annā yubṣirūna wa-law nashāʾu la-masakhnāhum ʿalā makānatihim fa-mā staṭāʿū muḍiyyan wa-lā yarjiʿūna",
        fr: "« Si Nous le voulions, Nous les frapperions de cécité; ils se rueraient sur la route. Mais comment verraient-ils? Si Nous le voulions, Nous les pétrifierions sur place de sorte qu'ils ne sauraient ni partir ni revenir » (Coran, 36: 66-67)"
      },
      {
        ar: "يس والقرآن الحكيم إنك لمن المرسلين على صراط مستقيم تنزيل العزيز الرحيم لتنذر قوما ما أنذر آباؤهم فهم غافلون لقد حق القول على أكثرهم فهم لا يؤمنون إنا جعلنا في أعناقهم أغلالا فهي إلى الأذقان فهم مقمحون وجعلنا من بين أيديهم سدا ومن خلفهم سدا فأغشيناهم فهم لا يبصرون (يس: 1 - 9)",
        tr: "yā-sīn wa-l-qurʾāni l-ḥakīmi innaka la-mina l-mursalīna ʿalā ṣirāṭin mustaqīmin tanzīlu l-ʿazīzi r-raḥīmi li-tundhira qawman mā undhira ābāʾuhum fahum ghāfilūna la-qad ḥaqqa l-qawlu ʿalā aktharihim fahum lā yuʾminūna innā jaʿalnā fī aʿnāqihim aghlālan fahiya ilā l-adhqāni fahum muqmaḥūna wa-jaʿalnā min bayni aydīhim saddan wa-min khalfihim saddan fa-aghsheynāhum fahum lā yubṣirūna",
        fr: "« Ya-Sin. Par le Coran plein de sagesse ! Tu es certes du nombre des Envoyés de Dieu, sur une voie droite. Voici une Révélation émanant du Tout Puissant, du Très Miséricordieux, qui t'est confiée pour que tu avertisses un peuple dont les ancêtres n'ont pas été avertis et qui, de ce fait, sont insouciants. La sentence prononcée contre la plupart d'entre eux s'est réalisée : ils ne croiront pas. Nous avons mis à leur cou des carcans qui montent jusqu'au menton; aussi vont-ils la tête haute mais les yeux baissés. Nous avons mis une barrière devant eux et une autre derrière eux. Nous leur avons bandé les yeux; aussi ne voient-ils pas » (Coran, 36: 1-9)."
      },
      {
        ar: "شاهت الوجوه شاهت الوجوه شاهت الوجوه\nوعنت الوجوه للحي القيوم وقد خاب من حمل ظلما (طه: 111)\nطسم حم عسق\nمرج البحرين يلتقيان بينهما برزخ لا يبغيان (الرحمن: 19 - 20)",
        tr: "shāhati l-wujūhu (3 fois) wa ʿanati l-wujūhu li-l-ḥayyi l-qayyūmi wa-qad khāba man ḥamala ẓulman ṭā-sīn, ḥā-mīm ʿayn sīn qāf Maraja l-baḥrayni yaltaqiyāni baynahumā barzakhun lā yabghiyāni",
        fr: "Les visages sont défais (3 fois)! « Les visages s'humilieront devant le Vivant, l'Immuable. Malheureux l'être qui se présentera à Lui chargé d'iniquité ! » (Coran, 20: 111).\nTa-sin. ḥā mīm ʿayn sin qaf. « Il a fait confluer les deux mers pour qu'elles se rencontrent. Entre elles est un isthme, de sorte qu'elles ne se mélangent pas » (Coran, 55: 19-20)."
      },
      {
        ar: "حم حم حم حم حم حم حم\nحم الأمر وجاء النصر فعلينا لا ينصرون",
        tr: "ḥā-mīm, (7 fois), ḥumma l-amru wa jāʾa n-naṣru fa-ʿalaynā lā yunṣarūna.",
        fr: "Ḥā mīm (7 fois). La chose est décrétée: le secours divin est arrivé; ils ne pourront donc pas l'emporter sur nous."
      },
      {
        ar: "حم تنزيل الكتاب من الله العزيز العليم غافر الذنب وقابل التوب شديد العقاب ذي الطول لا إله إلا هو إليه المصير (غافر: 1 - 3)",
        tr: "ḥā mīm tanzīlu l-kitābi mina l-Llāhi l-ʿazīzi l-ʿalīmi ghāfiri dh-dhanbi wa-qābili t-tawbi shadīdi l-ʿiqābi dhī ṭ-ṭawli lā ilaha illā huwa ilayhi l-maṣīru",
        fr: "« Ha - mim. La Révélation du Livre vient de Dieu, le Tout Puissant, l'Omniscient, Celui qui pardonne le péché, qui accueille le repentir, qui est redoutable dans son châtiment, le Longanime. Pas de dieu si ce n'est Lui. Vers Lui sera le retour » (Coran, 40:1-3)."
      },
      {
        ar: "بسم الله بابنا تبارك حيطاننا يس سقفنا كهيعص كفايتنا حم عسق حمايتنا",
        tr: "bismi l-Llāhi bābunā tabāraka ḥīṭānunā yā sīn saqfunā kāf hā yā ʿayn ṣād kifāyatunā ḥā mīm, ʿayn, sīn, qāf, ḥimāyatunā",
        fr: "« Au Nom de Dieu » est notre porte; « Tabāraka » est notre muraille « Ya-Sin » est notre toit: « Kāf - Hà - Ya - Ayn - Şad » est notre subsistance suffisante; « Ha Mim - Ayn -Sin-Qaf » est notre protection."
      },
      {
        ar: "فسيكفيكهم الله وهو السميع العليم (البقرة: 137) (3 مرات)",
        tr: "fa-sayakfīkahumu l-Llāhu wa-huwa s-samīʿu l-ʿalīmu (3 fois)",
        fr: "« Dieu te suffira contre eux: Il entend et sait tout » (Coran, 2: 137): (3 fois)"
      },
      {
        ar: "سِتْرُ الْعَرْشِ مَسْبُولٌ عَلَيْنَا وعين الله ناظرة إلينا بحول الله لا يقدر علينا والله من ورائهم محيط بل هو قرآن مجيد في لوح محفوظ (البروج: 20 - 22)",
        tr: "sitru l-ʿarshi masbūlun ʿalaynā wa-ʿaynu l-Llāhi nāẓiratun ilaynā bi-ḥawli l-Llāhi lā yuqdiru ʿalaynā wa-l-Llāhu min warāʾihim muḥīṭun bal huwa qurʾānun majīdun fī lawḥin maḥfūẓin",
        fr: "Le voile du Trône est étendu sur nous, et l'œil de Dieu nous regarde! Par la force de Dieu, ils n'auront pas de puissance sur nous! « Dieu les cerne à leur insu. Ceci est, au contraire, un Coran sublime, gravé sur une Table gardée!» (Coran, 85: 20-22)."
      },
      {
        ar: "والله خير حافظا وهو أرحم الراحمين (3 مرات)\nإن ولي الله الذي نزل الكتاب وهو يتولى الصالحين (3 مرات)",
        tr: "wa-l-Llāhu khayrun ḥāfiẓan wa-huwa arḥamu r-rāḥimīna (3 fois) inna waliyyīya l-Llāhu l-ladhī nazzala l-kitāba wa-huwa yatawallā ṣ-ṣāliḥīna (3 fois)",
        fr: "« Dieu est le meilleur gardien; Il est le plus Miséricordieux des miséricordieux » (3 fois). « En vérité, mon Maître est Dieu, qui a fait descendre le Livre. C'est Lui qui investit les saints » (3 fois)."
      },
      {
        ar: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم (3 مرات)",
        tr: "ḥasbiya l-Llāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa-huwa rabbu l-ʿarshi l-ʿaẓīmi (3 fois)",
        fr: "« Dieu me suffit! Pas de dieu si ce n'est Lui! Je me confie entièrement à Lui. Il est le Maître du Trône immense!» (3 fois)"
      },
      {
        ar: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم (3 مرات)\nولا حول ولا قوة إلا بالله العلي العظيم (3 مرات)",
        tr: "bismi l-Llāhi l-ladhī lā yaḍurru maʿa ismihi shayʾun fī l-arḍi wa-l-ā fī s-samāʾi wa-huwa s-samīʿu l-ʿalīmu (3 fois) wa-l-ā ḥawla wa-l-ā quwwata illā bi-l-Llāhi l-ʿaliyyi l-ʿaẓīmi (3 fois)",
        fr: "Au nom de Dieu: grâce Au Nom, rien de ce qui se trouve sur la terre ou au ciel ne saurait nuire. Il entend et sait tout (3 fois). Il n'y a de force et de puissance que par Dieu, le Sublime, le Magnifique (3 fois)."
      },
      {
        ar: "وصلى الله على سيدنا محمد وآله وصحبه وسلم",
        tr: "wa ṣallā l-Llāhu ʿalā sayyidinā muḥammadin wa ʿalā ālihi wa ṣaḥbihi wa sallam",
        fr: "Que Dieu accorde Sa grâce et Sa paix à notre seigneur Muhammad, ainsi qu'à sa famille et à ses compagnons !"
      },
      {
        ar: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        tr: "subḥāna rabbika rabbi l-ʿizzati ʿammā yaṣifūna wa salāmun ʿalā l-mursalīna wa l-ḥamdu li-llāhi rabbi l-ʿālamīna",
        fr: "Gloire à notre Seigneur, Seigneur de la Toute-Puissance Très éloigné de ce qu'ils imaginent Paix sur les Prophètes Louange à Dieu, Seigneur des mondes."
      }
    ]
  },
  {
    id: "latif",
    title: "ذكر اللطيف",
    desc: "L'invocation de l'attribut divin al-Latîf",
    content: [
      /* Transition Coranique (Verset 33:21) */
      { 
        isQuote: true, 
        ar: "وَلَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُوا اللهَ وَالْيَومَ الآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا<br><span style='font-size:0.7em;'>(الأحزاب: 21)</span>", 
        fr: "En effet, vous avez dans le Messager d'Allah un excellent modèle [à suivre], pour quiconque espère en Allah et au Jour dernier et invoque Allah fréquemment.", 
        sub: "(Coran, 33:21)" 
      },
      /* Titre */
      { isTitlePage: true, ar: "ذكر اللطيف", fr: "Dhikr al-Latîf", sub: "L'invocation de l'attribut divin al-Latîf" },
      /* Instructions Rak'at 1 */
      {
        isLongText: true,
        fr: "Faire une prière de deux rak'ates.<br><strong>1ère rak'at :</strong> Sourate 1 (L'Ouvrante) + Sourate 94 (La Dilatation).<br><strong>2ème rak'at :</strong> Sourate 1 (L'Ouvrante) + Sourate 108 (L'Abondance).",
        ar: "صل ركعتين، الركعة الأولى بسورة الفاتحة وسورة الشرح. الركعة الثانية بسورة الفاتحة وسورة الكوثر."
      },
      /* Sourate 1 (Fatiha) */
      {
        isTitlePage: true,
        ar: "سورة الفاتحة",
        fr: "Sourate 1 – L’Ouvrante",
        sub: "al-Fātiḥa"
      },
      {
        ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm. al-ḥamdu li-l-Llāhi rabbi l-ʿālamīn ar-Raḥmāni r-Raḥīm māliki yawmi d-dīn iyyāka naʿbudu wa iyyāka nastaʿīn ihdinā ṣ-ṣirāṭa l-mustaqīm ṣirāṭa l-ladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa lā ḍ-ḍāllīn",
        fr: "Au nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux. Louange à Dieu, Seigneur des mondes, le Tout-Miséricordieux, le Matriciel, Roi du jour de la rétribution. C’est Toi que nous adorons et c’est Toi dont nous implorons le secours. Guide-nous dans le chemin droit, le chemin de ceux que Tu as comblés de bienfaits, non celui de ceux qui encourent Ta colère, ni de ceux qui s’égarent."
      },
      /* Sourate 94 (Sharh) */
      {
        isTitlePage: true,
        ar: "سورة الشرح",
        fr: "Sourate 94 – La Dilatation",
        sub: "al-Sharḥ"
      },
      {
        ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ وَوَضَعْنَا عَنكَ وِزْرَكَ الَّذِي أَنْقَضَ ظَهْرَكَ وَرَفَعْنَا لَكَ ذِكْرَكَ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا فَإِذَا فَرَغْتَ فَانْصَبْ وَإِلَى رَبِّكَ فَارْغَبْ",
        tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm. Alam nashraḥ laka ṣadrak wa waḍaʿnā ʿanka wizrak alladhī anqaḍa ẓahrak wa rafaʿnā laka dhikrak fa-inna maʿa l-ʿusri yusrā inna maʿa l-ʿusri yusrā fa-idhā faraghta fa-nṣab wa-ilā rabbika farghab",
        fr: "Au nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux. N’avons-nous pas dilaté ta poitrine ? Ne t’avons-nous pas délesté du fardeau qui te rompait le dos ? Tout en hissant ta renommée ? Certes, l’aisance accompagne l’adversité ! Oui, l’aisance accompagne l’adversité ! Libéré de tes occupations, lève-toi pour prier et recherche ton Seigneur avec ferveur."
      },
      /* Sourate 108 (Kawthar) */
      {
        isTitlePage: true,
        ar: "سورة الكوثر",
        fr: "Sourate 108 – L’Abondance",
        sub: "al-Kawthar"
      },
      {
        ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ فَصَلِّ لِرَبِّكَ وَانْحَرْ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm. innā aʿṭaynāka l-kawthar fa-ṣalli li-rabbika wanḥar inna shāniʾaka huwa l-abtar",
        fr: "Au nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux. Oui, Nous t’avons accordé l’Abondance. Prie donc ton Seigneur et sacrifie. Celui qui te hait sera certes sans postérité."
      },
      /* Après la prière */
      {
        ar: "بعد الصلاة قراءة الفاتحة مرة واحدة",
        fr: "Après avoir fini la prière, réciter Sourate 1 – L’Ouvrante (1 fois)",
        tr: " "
      },
      {
        ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ الرَّحْمَنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm. al-ḥamdu li-l-Llāhi rabbi l-ʿālamīn ar-Raḥmāni r-Raḥīm māliki yawmi d-dīn iyyāka naʿbudu wa iyyāka nastaʿīn ihdinā ṣ-ṣirāṭa l-mustaqīm ṣirāṭa l-ladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa lā ḍ-ḍāllīn",
        fr: "Louange à Dieu, Seigneur des mondes, le Tout Miséricordieux, le Très Miséricordieux, Roi du jour de la rétribution. C’est Toi que nous adorons et c’est Toi dont nous implorons le secours. Guide-nous dans le chemin droit, le chemin de ceux que Tu as comblés de bienfaits, non celui de ceux qui encourent Ta colère, ni de ceux qui s’égarent."
      },
      /* Etape 1 */
      {
        ar: "(1) ذكر اسم اللطيف 8 مرات",
        fr: "1) Répéter avec conviction Yā Latīf (8 fois)",
        tr: "Yā Laṭīf (8x)"
      },
      {
        ar: "ذكر الدعاء التالي:<br>يَا لَطِيفُ اللَّهُمَّ إِنِّي تَبَرَّأْتُ مِنْ حَوْلِي وَقُوَّتِي وَأَبْقَيْتُ بِحَوْلِكَ وَقُوَّتِكَ لَا إِلَهَ إِلَّا أَنْتَ أَرِنِي عَجَائِبَ صُنْعِ لُطْفِكَ وَقُوَّتِكَ يَا أَرْحَمَ الرَّاحِمِينَ يَا رَبَّ الْعَالَمِينَ",
        tr: "Allāhumma innī tabarraʾtu min ḥawlī wa quwwatī wa abqaytu bi-ḥawlika wa quwwatika lā ilāha illā anta arinī ʿajāʾiba ṣunʿi luṭfika wa quwwatika yā arḥama r-rāḥimīn yā rabba l-ʿālamīn",
        fr: "Faire le duʿāʾ suivant (duʿāʾ n°1) : Ô Dieu, je désavoue ma force et ma puissance pour demeurer par Ta force et Ta puissance. Il n’y a de Dieu que Toi. Révèle-moi les merveilles de Ton œuvre de bienveillance et de puissance, Ô Toi, le plus Miséricordieux des miséricordieux, Seigneur des mondes."
      },
      {
        ar: "اللَّهُمَّ يَا لَطِيفُ فِي الْأَزَلِ يَا حَيُّ لَمْ تَزَلْ أَنْتَ اللَّطِيفُ فِي الْأَزَلِ اُلْطُفْ بِنَا فِيمَا نَزَلَ بِحُرْمَةِ الْقُرْآنِ وَعَلَى مَنْ نَزَلَ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
        tr: "Allāhumma yā Laṭīfu fī l-azal yā Ḥayyu lam tazal anta l-Laṭīfu fī l-azal ulṭuf binā fīmā nazal bi-ḥurmati l-Qurʾāni wa ʿalā man nazal Sayyidinā Muḥammadin ṣallā l-Llāhu ʿalayhi wa sallam",
        fr: "Notre Seigneur, Toi le Bienveillant pour l’éternité, Toi le Vivant éternel, Toi, Bonté de toute éternité, accorde-nous Ta bienveillance dans les épreuves, par la sacralité du Coran et de celui qui a reçu sa révélation, notre Maître Muḥammad, sur lui la prière et la paix."
      },
      /* Etape 2 */
      {
        ar: "(2) ذكر اسم اللطيف 20 مرة<br>ذكر الدعاء مرة واحدة",
        fr: "2) Répéter avec conviction Yā Latīf (20 fois) Faire le duʿāʾ n°1 (1 fois)",
        tr: "Yā Laṭīf (20x)"
      },
      /* Etape 3 */
      {
        ar: "(3) ذكر اسم اللطيف 100 مرة<br>ذكر الدعاء مرة واحدة",
        fr: "3) Répéter avec conviction Yā Latīf (100 fois) Faire le duʿāʾ n°1 (1 fois)",
        tr: "Yā Laṭīf (100x)"
      },
      /* Etape 4 */
      {
        ar: "(4) ذكر اسم اللطيف 100 مرة<br>ذكر الدعاء مرة واحدة",
        fr: "4) Répéter avec conviction Yā Latīf (100 fois) Faire le duʿāʾ n°1 (1 fois)",
        tr: "Yā Laṭīf (100x)"
      },
      /* Etape 5 */
      {
        ar: "(5) ذكر اسم اللطيف 100 مرة<br>ذكر الدعاء مرة واحدة",
        fr: "5) Répéter avec conviction Yā Latīf (100 fois) Faire le duʿāʾ n°1 (1 fois)",
        tr: "Yā Laṭīf (100x)"
      },
      {
        ar: "المجموع: 328",
        fr: "Total : 328",
        tr: " "
      },
      /* Clôture */
      {
        isLongText: true,
        ar: "(9) في الختام الدعاء لنفسك، لوالديك، لأهل السلسلة وللإنسانية جمعاء",
        fr: "9) Enfin, prier pour soi-même, ses parents, les maîtres de la chaîne spirituelle, pour l’humanité tout entière.",
        tr: " "
      },
      /* Transition Hadith (Al-Mufradun) */
      { 
        isQuote: true, 
        ar: "عن أبي هريرة قال رسول الله صلى الله عليه وسلم:<br>سَبَقَ الْمُفْرَدُونَ. قَالُوا وَ مَا الْمُفْرَدُونَ يَا رَسُولَ اللهِ ؟<br>قَالَ: «الذَّاكِرُونَ اللَّهَ كَثِيرًا وَالذَّاكِرَاتُ»<br><span style='font-size:0.7em;'>(رواه مسلم، حديث صحيح)</span>", 
        fr: "D’après Abū Hurayra, l’Envoyé d’Allah (sur lui le salut et la paix) a dit :<br>« Les Esseulés devancent tout le monde.<br>On demanda : “Qui sont les Esseulés*, ô Envoyé de Dieu ?”<br>Il répondit : “Les hommes et les femmes qui pratiquent abondamment l’invocation de Dieu.” »", 
        sub: "Cité par Muslim, hadith authentifié.<br>* Esseulés : celles et ceux qui sont dans la singularité (Fardāniyya), dans la quête de Dieu." 
      }
    ]
  },
  {
  id: "lutfiyya",
  title: "اللطفية",
  subtitle: "Qasīdat al-Luṭfiyya",
  desc: "Prière du cheikh al-ʿAlāwī en défense du Coran et des écoles coraniques.",
  content: [
    {
      type: "heading",
      ar: "للشيخ العلاوي",
      tr: "Du Cheikh al-ʿAlâwî",
      fr: ""
    },
    {
      type: "heading",
      ar: "قصيدة اللطفية",
      tr: "Qasida al-Luṭfiyya",
      fr: "Poème Lutfiyya du Cheikh al-Alâwî"
    },
    {
      ar: "اللطفية ، نضمها الشيخ العلاوي حين أضمرت السلطات الإستعمارية سوءا بالمدارس العربية التي تُدرس القرآن ، فأصدرت قانونا يقضي بغلقها بحجة أنها مدارس غير مرخص لها فنافح الشيخ العلاوي بهذه القصيدة عن القرآن وأهله، وجاء دعاءه لرد تلك البلوة ولتنبيه الأمة إلى الخطر الذي يهددها. ثم إن ذلك القرار توقف العمل به بسبب نشوب الحرب العالمية الأولى سنة 1914.",
      tr: "",
      fr: ""
    },
    {
      ar: "",
      tr: "",
      fr: "Le poème Al-Lutfiya ou « La prière » a été composé par le Cheikh al-ʿAlâwî lorsque les autorités coloniales ont promulgué une loi visant à fermer les écoles coraniques sous prétexte qu’elles ne disposaient pas d’autorisation pour enseigner. Le Cheikh al-ʿAlâwî a écrit ce poème pour mettre en avant l’importance et la valeur du Coran aux yeux de son peuple. Sa supplication visait à annuler ce décret et à éveiller la nation sur la perte des fondements de l’identité musulmane. Finalement, cette décision a été suspendue en raison du déclenchement de la première guerre mondiale en 1914."
    },
    {
      ar: "أيَا رَبِّ بِلُطْفِكَ يَا مُرْتَجِى\nالطْفْ بِنَا وَهَيِّئْ لَنَا فَرَجًا",
      tr: "ayā rabbi bi-luṭfika yā murtajā\nulṭuf binā wa hayyi lanā farajā",
      fr: "Seigneur ! Toi, notre espoir ! Par Ta bienveillance,\nProtège-nous, accorde-nous délivrance."
    },
    {
      ar: "سَأَلْنَاكَ يَا رَبِّ بِالقُرْآنِ وَمَا فِيهِ وَ بِالسَّبْعِ المَثَانِي",
      tr: "saʾalnāka yā rabbi bi-l-qurʾāni wa mā fīhi wa-bi-s-sabʿi l-mathānī",
      fr: "Nous T’implorons, Seigneur, par le Saint Coran\net tout ce qu’il contient, par les sept versets répétés."
    },
    {
      ar: "وَبِالَّذِي أَتَى بِهِ وَبَثَّهُ وَ يَجِلُّ آيَاتِهِ وَحَبَّهُ",
      tr: "wa bi-l-ladhī atā bihi wa baththahu wa bajjala āyātihi wa ḥabbahu",
      fr: "Par celui qui l’a reçu et transmis,\nqui honora ses versets et l’aima."
    },
    {
      ar: "وَأَمَرَ بِحُبِّنَا الْقُرْآنَا فَكَانَ أَطْيَبُ لَنَا مِمَّا كَانَ",
      tr: "wa amara bi-ḥubbinā l-qurʾāna fakāna aṭyab lanā mimmā kāna",
      fr: "Nous recommandant l’amour du Coran ;\nil nous fut alors plus doux que tout."
    },
    {
      ar: "نَزَّلْتَهُ وَ بِجَمْعِهِ أَمَرْتَا\nفَالْتَحْفَظُهُ يَا مَوْلانَا كَمَا قُلْتَا",
      tr: "nazzaltahu wa bi-jamʿihi amarta\nfal-taḥfaẓhu yā mawlānā kamā qulta",
      fr: "Tu l’as révélé et ordonné sa compilation ;\npréserve-le, Seigneur, comme Tu l’as annoncé."
    },
    {
      ar: "فَقَدْ حَاوَلَ الغَيْرُ عَلَى تَرْكِهِ\nوَهَلْ تَسْمَحْ يَا مَوْلَانَا بِفِعْلِهِ",
      tr: "fa-qad ḥāwala l-ghayru ʿalā tarkihi\nwa hal tasmaḥ yā mawlānā bi-fiʿlihi",
      fr: "Certains ont tramé pour sa disparition :\nle permettras-Tu, Seigneur ?"
    },
    {
      ar: "فَلَا نَرْضَى بِتَرْكِنَا الْقُرْآنَا\nلِأَنَّهُ الدِّينُ مَعَ الْإِيمَانَا",
      tr: "falā narḍā bi-tarkina l-qurʾāna\nli-annahu d-dīnu maʿa l-īmāna",
      fr: "Nous n’accepterons jamais de renoncer au Coran :\nil est la Religion et la Foi."
    },
    {
      ar: "فَقَدْرُهُ عِنْدَنَا لَا يُسَاوِيهِ\nكُلُّ الْوُجُودِ وَمَا احْتَوَى عَلَيْهِ",
      tr: "fa-qadruhu ʿindanā lā yusāwīhi\nkullu l-wujūdi wa mā iḥtawā ʿalayhi",
      fr: "Sa valeur, pour nous, rien ne l’égale,\nni l’univers ni tout ce qu’il contient."
    },
    {
      ar: "فَالْقُرْآنُ هُوَ عَيْنُ الحقيقَةِ\nوَالشَّرِيعَةُ وَالْعُرْوَةُ الْوَثِيقَةُ",
      tr: "fa-l-qurʾānu huwa ʿaynu l-ḥaqīqa\nwa-sh-sharīʿatu wa-l-ʿurwatu l-wathīqa",
      fr: "Le Coran est l’essence de la Réalité,\nil est la Loi et le lien le plus sûr."
    },
    {
      ar: "أَنْتَ تَعْلَمُ بِحُبِّنَا الْقُرْآنَا\nوَكَيْفَ حَلَّ الْقَلْبَ وَاللِّسَانَا",
      tr: "anta taʿlamu bi-ḥubbinā l-qurʾāna\nwa-kayfa ḥalla l-qalba wa-l-lisāna",
      fr: "Toi, Tu connais notre amour pour le Coran\net Tu vois comment il habite notre cœur et notre langue."
    },
    {
      ar: "فَامْتَزَجَ بِدَمِنَا وَلَحْمِنَا\nوَالْعُرُوقِ وَالْعِظَامِ وَمَا فِينَا",
      tr: "fa-mtazaja bi-daminā wa-laḥminā\nwa-l-ʿurūqi wa-l-ʿiẓāmi wa-mā fīnā",
      fr: "Il est mêlé à notre sang, à notre chair,\nà nos veines, nos os et tout ce qui est en nous."
    },
    {
      ar: "أَيَا رَبِّ بِحَقِّهِ لَا تَفْجَأْنَا\nفِي دِينِنَا يَا مَوْلَانَا لَا تَفْتِنَّا",
      tr: "ayā rabbi bi-ḥaqqihi lā tafjaʾnā fī dīninā\nyā mawlānā lā taftinnā",
      fr: "Seigneur ! Par le Saint Coran, ne nous afflige pas ;\nne nous éprouve pas dans notre religion."
    },
    {
      ar: "يَا رَبِّ اجْعَلْ لِدِينِكَ فَرَجًا\nإِنَّهُ وَاقِفٌ بِبَابِكَ يُرْتَجَى",
      tr: "yā rabbi ijʿal li-dīnika farajā\ninnahu wāqifun bi-bābika yurtajā",
      fr: "Seigneur ! Accorde à Ta religion secours :\nelle se tient à Ta porte, pleine d’espoir."
    },
    {
      ar: "أَوِ الْغَرِيبَ يَا رَبِّ لِأَهْلِهِ\nقَدْ أَلَمَّ الْفِرَاقُ بِأَحْبَابِهِ",
      tr: "awi l-gharība yā rabbi li-ahlihi\nqad allama l-firāqu bi-aḥbābihi",
      fr: "Seigneur ! Unis aux siens celui qui en est séparé :\nla séparation accable de souffrance ses amis."
    },
    {
      ar: "أَدْرِكْهُ يَا رَبِّ قَبْلَ وَفَاتِهِ\nوَزِدْ لَنَا يَا رَبِّ فِي حَيَاتِهِ",
      tr: "adrik-hu yā rabbi qabla wafātihi\nwa-zid lanā yā rabbi fī ḥayātihi",
      fr: "Sauve-le, Seigneur, du péril,\nprolonge sa vie pour nous."
    },
    {
      ar: "وَاجْعَلْ دِيَارَنَا دِيَارًا أَمْنًا\nوَاحْفَظْنَا مِنْ كُلِّ مَكْرٍ وَمِحْنَةٍ",
      tr: "wa-jʿal diyārana diyāran amnā\nwa-ḥfaẓnā min kulli makrin wa-miḥna",
      fr: "Fais de nos demeures des lieux de paix ;\ngarde-nous de tout malheur."
    },
    {
      ar: "وَأَيِّدْنَا يَا مَوْلَانَا بِرُوحِكَ\nوَوَفِّقْنَا يَا رَبَّنَا لِأَمْرِكَ",
      tr: "wa-ayyidnā yā mawlānā bi-rūḥika\nwa-waffiqnā yā rabbanā li-amrika",
      fr: "Assiste-nous, Seigneur, par Ton Esprit,\naide-nous à observer Ton commandement."
    },
    {
      ar: "وَارْحَمْ مِنَّا الْكِبَارَ وَالصِّغَارَا\nوَأَمِّنْهُمْ فَتَرَاهُمْ حُيَارَى",
      tr: "wa-rḥam minnā l-kibārā wa-ṣ-ṣighārā\nwa-amminhum fa tarāhum ḥuyārā",
      fr: "Fais miséricorde aux anciens comme aux jeunes ;\nrassure-les, car Tu les vois désemparés."
    },
    {
      ar: "وَاصْلِحْ لَنَا دُنْيَانَا مَعَ الدِّينِ\nوَاغْفِرْ رَبِّ لِمَنْ دَعَا بِدَعْوَانَا",
      tr: "wa-ṣlaḥ lanā dunyānā maʿa d-dīn\nwa-ghfir rabbi liman daʿā bi-daʿwānā",
      fr: "Améliore notre vie matérielle et spirituelle;\npardonne, Seigneur, à celui qui T’implore comme nous."
    },
    {
      ar: "وَافْرِجْ كَرْبَ الْمَكْرُوبِ وَالْمِسْكِينِ\nوَكُنْ لَنَا وَلِجَمِيعِ خِلَّانَا",
      tr: "wa-frij karba l-makrūbi wa-l-miskīn\nwa-kun lanā wa-li-jamīʿi khillānā",
      fr: "Dissipe la peine de l’affligé et du pauvre,\net sois pour nous et pour tous nos amis un soutien."
    },
    {
      ar: "وَانْهَضْ بِنَا لِشُهُودِ الْجَمَالِ\nوَمَا لَهُ مِنْ أَسْرَارِ الْكَمَالِ",
      tr: "wa-nhad binā li-shuhūdi l-jamāl\nwa-mā lahu min asrāri l-kamāl",
      fr: "Élève-nous à la contemplation de Ta Beauté\net aux secrets de Ta Perfection."
    },
    {
      ar: "وَصَلِّ يَا رَبِّ صَلَاةً تَلِيقُ\nبِالْمُصْطَفَى وَعَلَى الْآلِ تَصْدُقُ",
      tr: "wa ṣalli yā rabbi ṣalātan taliqu\nbi-l-muṣṭafā wa-ʿalā l-āli taṣduqu",
      fr: "Prie, Seigneur, sur l’Élu d’une prière digne de lui,\net étends-la à sa famille."
    },
    {
      ar: "وَصَحْبِهِ وَأَنْصَارِهِ وَالتَّابِعِينَ\nثُمَّ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      tr: "wa-ṣaḥbihi wa-anṣārihi wa-t-tābiʿīn\nthumma l-ḥamdu li-llāhi rabbi l-ʿālamīn",
      fr: "À ses compagnons, ses auxiliaires et ceux qui suivent sa voie.\nLouange à Dieu, Seigneur des mondes."
    }
  ]
},

{
  id: "fath",
  title: "سورة الفتح",
  subtitle: "Sourate 48 – La Victoire",
  desc: "Victoire, ouverture, pardon et confirmation de la mission prophétique.",
  content: [
    {
      // Page de transition – hadith sur les assemblées de rappel
      ar: "عن أبي سعيد الخدري قال رسول الله صلى الله عليه وسلم:\n« يَقُولُ اللهُ عَزَّ وَجَلَّ يَوْمَ القِيَامَةِ : سَيُعْلَمُ أَهْلُ الجَمْعِ مَنْ أَهْلُ الكَرَمِ\nفَقِيلَ : وَمَنْ أَهْلُ الكَرَمِ ؟ قال: أَهْلُ مَجَالِسِ الذِّكْرِ »\nرواه مسلم، حديث صحيح",
      tr: "",
      fr: "D’après Abū Saʿīd al-Khudrī, l’Envoyé d’Allah a dit :\n« Dieu dira le jour de la Résurrection : “La distinction va être faite entre les gens du commun et ceux de la noblesse des cœurs.”\nOn demandera : “Qui sont les gens de la noblesse des cœurs ?”\nIl répondra : “Ceux des assemblées de l’invocation (dhikr).” »\n\nHadith authentique rapporté par Muslim."
    },
    {
      type: "heading",
      ar: "سورة الفتح",
      tr: "Sourate 48 – al-Fatḥ",
      fr: "La Victoire / L’Ouverture"
    },
    {
      ar: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ",
      tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm",
      fr: "Au Nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux."
    },
    {
      ar: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ﴿1﴾ لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِنْ ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا ﴿2﴾",
      tr: "innā fataḥnā laka fatḥan mubīnan\nli-yaghfira laka l-Llāhu mā taqaddama min dhanbika wa mā ta’akhkhara\nwa yutimma niʿmatahū ʿalayka wa yahdiyaka ṣirāṭan mustaqīman",
      fr: "1. Oui, Nous t’avons accordé une victoire éclatante / une ouverture explicite,\n2. afin que Dieu te pardonne tes péchés, passés et futurs, qu’Il parachève Sa Grâce en toi et qu’Il t’offre la guidance sur une voie droite."
    },
    {
      ar: "وَيَنْصُرَكَ اللَّهُ نَصْرًا عَزِيزًا ﴿3﴾ هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَعَ إِيمَانِهِمْ ﴿4﴾",
      tr: "wa yanṣuraka l-Llāhu naṣran ʿazīzā\nhuwa l-ladhī anzala s-sakīnata fī qulūbi l-mu’minīna li-yazdādū īmānan maʿa īmānihim",
      fr: "3. Et afin que Dieu te prête un puissant secours.\n4. C’est Lui qui a fait descendre la quiétude dans les cœurs des croyants afin qu’ils croissent dans la foi."
    },
    {
      ar: "وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ وَكَانَ اللَّهُ عَلِيمًا حَكِيمًا ﴿4﴾ لِّيُدْخِلَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَيُكَفِّرَ عَنْهُمْ سَيِّئَاتِهِمْ وَكَانَ ذَٰلِكَ عِندَ اللَّهِ فَوْزًا عَظِيمًا ﴿5﴾",
      tr: "wa li-Llāhi junūdu s-samāwāti wa-l-arḍi wa kāna l-Llāhu ʿalīman ḥakīmā\nli-yudkhila l-mu’minīna wa-l-mu’mināti jannātin tajrī min taḥtihā l-anhār\nkhālidīna fīhā wa yukaffira ʿanhum sayyiātihim wa kāna dhālika ʿinda Llāhi fawzan ʿaẓīmā",
      fr: "À Dieu appartiennent les armées des cieux et de la terre, et Dieu est Omniscient et Sage.\n5. Afin qu’Il fasse entrer les croyants et les croyantes dans des Jardins sous lesquels coulent les ruisseaux où ils demeureront éternellement, et afin de leur effacer leurs méfaits. Cela est auprès de Dieu un énorme succès, sans limites."
    },
    {
      ar: "وَيُعَذِّبَ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ الظَّانِّينَ بِاللَّهِ ظَنَّ السَّوْءِ ۚ عَلَيْهِمْ دَائِرَةُ السَّوْءِ وَغَضِبَ اللَّهُ عَلَيْهِمْ وَلَعَنَهُمْ وَأَعَدَّ لَهُمْ جَهَنَّمَ وَسَاءَتْ مَصِيرًا ﴿6﴾",
      tr: "wa yuʿadhdhiba l-munāfiqīna wa-l-munāfiqāti wa-l-mushrikīna wa-l-mushrikāti\naẓ-ẓānnīna bi-Llāhi ẓanna s-saw’\nʿalayhim dā’iratu s-saw’ wa ghadiba L-Llāhu ʿalayhim wa laʿanahum\nwa aʿadda lahum jahannama wa sā’at maṣīrā",
      fr: "6. Et afin qu’Il châtie les hypocrites et les polythéistes, hommes et femmes, qui se font une fausse idée négative de Dieu. Que les effets du cercle négatif les atteignent. Dieu est courroucé contre eux, les a maudits, et leur a préparé la Géhenne. Quelle détestable destination !"
    },
    {
      ar: "وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا ﴿7﴾",
      tr: "wa li-Llāhi junūdu s-samāwāti wa-l-arḍi wa kāna L-Llāhu ʿazīzan ḥakīmā",
      fr: "7. À Dieu appartiennent les armées des cieux et de la terre ; et Dieu est Puissant et Sage."
    },
    {
      ar: "إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا ﴿8﴾ لِّتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَتُعَزِّرُوهُ وَتُوَقِّرُوهُ وَتُسَبِّحُوهُ بُكْرَةً وَأَصِيلًا ﴿9﴾",
      tr: "innā arsalnāka shāhidan wa mubashiran wa nadhīrā\nli-tu’minū bi-Llāhi wa rasūlihī wa tuʿazzirūhu wa tuwaqqirūhu\nwa tusabbiḥūhu bukratan wa aṣīlā",
      fr: "8. Oui, Nous t’avons envoyé en tant que témoin, annonciateur de la bonne nouvelle et avertisseur,\n9. pour que vous croyiez en Dieu et en Son Messager, que vous l’assistiez, l’honoriez et Le glorifiiez à l’aube et au crépuscule."
    },
    {
      ar: "إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللَّهَ ۚ يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِ وَمَنْ أَوْفَىٰ بِمَا عَاهَدَ عَلَيْهُ اللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًا ﴿10﴾",
      tr: "inna l-ladhīna yubāyiʿūnaka innamā yubāyiʿūna Llāh\nyadu L-Llāhi fawqa aydīhim\nfa-man nakatha fa-innamā yankuthu ʿalā nafsih\nwa man awfā bimā ʿāhada ʿalayhi Llāha fa-sa-yu’tīhi ajran ʿaẓīmā",
      fr: "Ceux qui te prêtent serment d’allégeance ne font que prêter serment à Dieu : la main de Dieu est au-dessus de leurs mains.\n10. Quiconque est parjure est parjure à son propre détriment ; et quiconque remplit son engagement envers Dieu, Il lui apportera bientôt une énorme récompense sans limite."
    },
    {
      ar: "سَيَقُولُ لَكَ الْمُخَلَّفُونَ مِنَ الْأَعْرَابِ شَغَلَتْنَا أَمْوَالُنَا وَأَهْلُونَا فَاسْتَغْفِرْ لَنَا ۚ يَقُولُونَ بِأَلْسِنَتِهِم مَّا لَيْسَ فِي قُلُوبِهِمْ ۚ قُلْ فَمَن يَمْلِكُ لَكُم مِّنَ اللَّهِ شَيْئًا إِنْ أَرَادَ بِكُمْ ضَرًّا أَوْ أَرَادَ بِكُمْ نَفْعًا ۚ بَلْ كَانَ اللَّهُ بِمَا تَعْمَلُونَ خَبِيرًا ﴿11﴾",
      tr: "sa-yaqūlu laka l-mukhallafūna mina l-aʿrābi shaghalatnā amwālunā wa ahlūnā fa-staghfir lanā\nyaqūlūna bi-alsinatihim mā laysa fī qulūbihim\nqul fa-man yamliku lakum mina L-Llāhi shay’an in arāda bikum ḍarran aw arāda bikum nafʿā\nbal kāna L-Llāhu bimā taʿmalūna khabīrā",
      fr: "Ceux des Bédouins qui sont restés en arrière te diront : « Nos richesses et nos familles nous ont accaparés : implore donc pour nous le pardon. » Ils prononcent avec leurs langues ce qui n’est pas dans leurs cœurs.\n11. Dis : « Qui donc peut quelque chose pour vous auprès de Dieu, s’Il veut pour vous du mal ou du bien ? Mais Dieu est Parfaitement Connaisseur de ce que vous faites. »"
    },
    {
      ar: "بَلْ ظَنَنتُمْ أَن لَّن يَنقَلِبَ الرَّسُولُ وَالْمُؤْمِنُونَ إِلَىٰ أَهْلِيهِمْ أَبَدًا وَزُيِّنَ ذَٰلِكَ فِي قُلُوبِكُمْ وَظَنَنتُمْ ظَنَّ السَّوْءِ وَكُنتُمْ قَوْمًا بُورًا ﴿12﴾",
      tr: "bal ẓanantum an lan yanqaliba r-rasūlu wa-l-mu’minūna ilā ahlihim abadan\nwa zuyyina dhālika fī qulūbikum wa ẓanantum ẓanna s-saw’\nwa kuntum qawman būrā",
      fr: "12. Vous pensiez plutôt que jamais le Messager et les croyants ne retourneraient parmi les leurs. Cette méprise s’est embellie dans vos cœurs ; et vous avez eu de mauvaises pensées. Et vous fûtes des gens perdus."
    },
    {
      ar: "وَمَن لَّمْ يُؤْمِن بِاللَّهِ وَرَسُولِهِ فَإِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَعِيرًا ﴿13﴾",
      tr: "wa man lam yu’min bi-Llāhi wa rasūlihī fa-innā aʿtadnā li-l-kāfirīna saʿīrā",
      fr: "13. Et quiconque ne croit pas en Dieu et en Son Messager… alors, pour les mécréants, Nous avons préparé une fournaise ardente."
    },
    {
      ar: "وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا ﴿14﴾",
      tr: "wa li-Llāhi mulku s-samāwāti wa-l-arḍ\nyaghfiru li-man yashā’u wa yuʿadhdhibu man yashā’\nwa kāna L-Llāhu ghafūran raḥīmā",
      fr: "14. À Dieu appartient la souveraineté des cieux et de la terre. Il pardonne à qui Il veut et châtie qui Il veut. Dieu est le Pardonneur et le Miséricordieux."
    },
    {
      ar: "سَيَقُولُ الْمُخَلَّفُونَ إِذَا انطَلَقْتُمْ إِلَىٰ مَغَانِمَ لِتَأْخُذُوهَا ذَرُونَا نَتَّبِعْكُمْ يُرِيدُونَ أَن يُبَدِّلُوا كَلَامَ اللَّهِ قُل لَّن تَتَّبِعُونَا كَذَٰلِكُمْ قَالَ اللَّهُ مِن قَبْلُ فَسَيَقُولُونَ بَلْ تَحْسُدُونَنَا بَلْ كَانُوا لَا يَفْقَهُونَ إِلَّا قَلِيلًا ﴿15﴾",
      tr: "sa-yaqūlu l-mukhallafūna idhā inṭalaqtum ilā maghānima li-ta’khudhūhā dharūnā nattabiʿkum\nyurīdūna an yubaddilū kalāma L-Llāh\nqul lan tattabiʿūnā kadhālikum qāla L-Llāhu min qabl\nfa-sayaqūlūna bal taḥsudūnanā bal kānū lā yafqahūna illā qalīlā",
      fr: "15. Ceux qui restèrent en arrière diront, quand vous vous dirigerez vers le butin pour vous en emparer : « Laissez-nous vous suivre ». Ils voudraient changer la parole de Dieu. Dis : « Jamais vous ne nous suivrez : ainsi Dieu a déjà annoncé ». Mais ils diront : « Vous êtes plutôt envieux à notre égard ». Mais ils ne comprenaient en réalité que peu."
    },
    {
      ar: "قُل لِّلْمُخَلَّفِينَ مِنَ الْأَعْرَابِ سَتُدْعَوْنَ إِلَىٰ قَوْمٍ أُولِي بَأْسٍ شَدِيدٍ تُقَاتِلُونَهُمْ أَوْ يُسْلِمُونَ فَإِن تُطِيعُوا يُؤْتِكُمُ اللَّهُ أَجْرًا حَسَنًا وَإِن تَتَوَلَّوْا كَمَا تَوَلَّيْتُم مِّن قَبْلُ يُعَذِّبْكُمْ عَذَابًا أَلِيمًا ﴿16﴾",
      tr: "qul li-l-mukhallafīna mina l-aʿrābi sa-tudʿawna ilā qawmin ulī ba’sin shadīd\ntuqātilūnahum aw yuslimūn\nfa-in tuṭīʿū yu’tikum L-Llāhu ajran ḥasanā\nwa in tatawallaw kamā tawallaytum min qabl yuʿadhdhibkum ʿadhāban alīmā",
      fr: "16. Dis à ceux des Bédouins qui restèrent en arrière : « Vous serez bientôt appelés contre des gens d’une force redoutable. Vous les combattrez, à moins qu’ils ne se soumettent à Dieu. Si vous obéissez, Dieu vous donnera une belle récompense, et si vous vous détournez comme vous vous êtes détournés auparavant, Il vous châtiera d’un châtiment douloureux. »"
    },
    {
      ar: "لَيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ وَلَا عَلَى الْأَعْرَجِ حَرَجٌ وَلَا عَلَى الْمَرِيضِ حَرَجٌ ۗ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ وَمَن يَتَوَلَّ يُعَذِّبْهُ عَذَابًا أَلِيمًا ﴿17﴾",
      tr: "laysa ʿalā l-aʿmā ḥarajun wa lā ʿalā l-aʿraji ḥarajun wa lā ʿalā l-marīḍi ḥaraj\nwa man yuṭiʿi L-Llāha wa rasūlahu yudkhilhu jannātin tajrī min taḥtihā l-anhār\nwa man yatawalla yuʿadhdhibhu ʿadhāban alīmā",
      fr: "17. Nul grief n’est à faire à l’aveugle, ni au boiteux, ni au malade. Et quiconque obéit à Dieu et à Son Messager, Il le fera entrer dans des Jardins sous lesquels coulent les ruisseaux. Quiconque cependant se détourne, Il le châtiera d’un douloureux châtiment."
    },
    {
      ar: "لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ فَعَلِمَ مَا فِي قُلُوبِهِمْ فَأَنزَلَ السَّكِينَةَ عَلَيْهِمْ وَأَثَابَهُمْ فَتْحًا قَرِيبًا ﴿18﴾ وَمَغَانِمَ كَثِيرَةً يَأْخُذُونَهَا وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا ﴿19﴾",
      tr: "laqad raḍiya L-Llāhu ʿani l-mu’minīna idh yubāyiʿūnaka taḥta sh-shajarati\nfa-ʿalima mā fī qulūbihim fa-anzala s-sakīnata ʿalayhim\nwa athābahum fatḥan qarībā\nwa maghānima kathīratan ya’khudhūnahā wa kāna L-Llāhu ʿazīzan ḥakīmā",
      fr: "18. Dieu a très certainement été satisfait des croyants quand ils t’ont prêté le serment d’allégeance sous l’arbre. Il a su ce qu’il y avait dans leurs cœurs, a fait descendre sur eux la quiétude, et Il les a récompensés par une victoire proche,\n19. ainsi qu’un abondant butin qu’ils ramasseront. Dieu est Puissant et Sage."
    },
    {
      ar: "وَعَدَكُمُ اللَّهُ مَغَانِمَ كَثِيرَةً تَأْخُذُونَهَا فَعَجَّلَ لَكُمْ هَٰذِهِ وَكَفَّ أَيْدِيَ النَّاسِ عَنكُمْ وَلِتَكُونَ آيَةً لِّلْمُؤْمِنِينَ وَيَهْدِيَكُمْ صِرَاطًا مُّسْتَقِيمًا ﴿20﴾ وَأُخْرَىٰ لَمْ تَقْدِرُوا عَلَيْهَا قَدْ أَحَاطَ اللَّهُ بِهَا وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرًا ﴿21﴾",
      tr: "waʿadakumu L-Llāhu maghānima kathīratan ta’khudhūnahā fa-ʿajjala lakum hādhihi\nwa kaffa aydiya n-nāsi ʿankum wa li-takūna āyatan li-l-mu’minīna\nwa yahdiyakum ṣirāṭan mustaqīmā\nwa ukhrā lam taqdirū ʿalayhā qad aḥāṭa L-Llāhu bihā wa kāna L-Llāhu ʿalā kulli shay’in qadīrā",
      fr: "20. Dieu vous a promis un abondant butin que vous prendrez, et Il a hâté pour vous celle-ci et repoussé de vous les mains des gens, afin que tout cela soit un signe pour les croyants et qu’Il vous guide sur un droit chemin,\n21. et un autre [butin] que vous ne seriez jamais, par vous-mêmes, capables d’avoir, que Dieu a embrassé en Sa puissance ; Il est Omnipotent."
    },
    {
      ar: "وَلَوْ قَاتَلَكُمُ الَّذِينَ كَفَرُوا لَوَلَّوُا الْأَدْبَارَ ثُمَّ لَا يَجِدُونَ وَلِيًّا وَلَا نَصِيرًا ﴿22﴾ سُنَّةَ اللَّهِ الَّتِي قَدْ خَلَتْ مِن قَبْلُ وَلَن تَجِدَ لِسُنَّةِ اللَّهِ تَبْدِيلًا ﴿23﴾",
      tr: "wa law qātalakumu l-ladhīna kafarū la-wallawū l-adbāra\nthumma lā yajidūna waliyyan wa lā naṣīrā\nsunnata L-Llāhi l-latī qad khalat min qabl wa lan tajida li-sunnati L-Llāhi tabdīlā",
      fr: "22. Et si ceux qui ont mécru vous combattaient, ils se détourneraient, certes ; puis ils ne trouveraient ni allié ni secoureur.\n23. Tel est le décret de Dieu appliqué aux générations passées. Et tu ne trouveras jamais de changement au décret de Dieu."
    },
    {
      ar: "وَهُوَ الَّذِي كَفَّ أَيْدِيَهُمْ عَنكُمْ وَأَيْدِيَكُمْ عَنْهُمْ بِبَطْنِ مَكَّةَ مِن بَعْدِ أَنْ أَظْفَرَكُمْ عَلَيْهِمْ وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا ﴿24﴾",
      tr: "wa huwa l-ladhī kaffa aydiyahum ʿankum wa aydiyakum ʿanhum\nbi-baṭni makka min baʿdi an aẓfarakum ʿalayhim\nwa kāna L-Llāhu bimā taʿmalūna baṣīrā",
      fr: "24. C’est Lui qui, dans la vallée de la Mecque, vous a épargnés de leur emprise et les a épargnés de la vôtre, après vous avoir fait triompher sur eux. Et Dieu voit parfaitement ce que vous œuvrez."
    },
    {
      ar: "هُمُ الَّذِينَ كَفَرُوا وَصَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ وَالْهَدْيَ مَعْكُوفًا أَن يَبْلُغَ مَحِلَّهُ ۚ وَلَوْلَا رِجَالٌ مُّؤْمِنُونَ وَنِسَاءٌ مُّؤْمِنَاتٌ لَّمْ تَعْلَمُوهُمْ أَنْ تَطَئُوهُمْ فَتُصِيبَكُم مِّنْهُمْ مَّعَرَّةٌۢ بِغَيْرِ عِلْمٍ لِّيُدْخِلَ اللَّهُ فِي رَحْمَتِهِ مَن يَشَاءُ ۚ لَوْ تَزَيَّلُوا لَعَذَّبْنَا الَّذِينَ كَفَرُوا مِنْهُمْ عَذَابًا أَلِيمًا ﴿25﴾",
      tr: "humu l-ladhīna kafarū wa ṣaddūkum ʿani l-masjidi l-ḥarām\nwa l-hadya maʿkūfan an yablugha maḥillah\nwa lawlā rijālun mu’minūna wa nisā’un mu’minātun lam taʿlamūhum\nan taṭa’ūhum fa-tuṣība-kum minhum maʿarratun bi-ghayri ʿilmin\nli-yudkhila L-Llāhu fī raḥmatihī man yashā’\nlaw tazayyālū la-ʿadhdhabnā l-ladhīna kafarū minhum ʿadhāban alīmā",
      fr: "Ce sont eux qui ont mécru et qui vous ont obstrué le chemin de la Mosquée sacrée et empêché que les offrandes entravées parvinssent à leur lieu d’immolation. S’il n’y avait pas eu des hommes croyants et des femmes croyantes que vous ne connaissiez pas et que vous auriez pu léser sans le savoir, vous rendant ainsi coupables d’une action répréhensible… Tout cela s’est fait pour que Dieu fasse entrer qui Il veut dans Sa Miséricorde.\n25. Et s’ils s’étaient identifiés, Nous aurions certes châtié d’un châtiment douloureux ceux qui avaient mécru parmi eux."
    },
    {
      ar: "إِذْ جَعَلَ الَّذِينَ كَفَرُوا فِي قُلُوبِهِمُ الْحَمِيَّةَ حَمِيَّةَ الْجَاهِلِيَّةِ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَىٰ رَسُولِهِ وَعَلَى الْمُؤْمِنِينَ وَأَلْزَمَهُمْ كَلِمَةَ التَّقْوَىٰ وَكَانُوا أَحَقَّ بِهَا وَأَهْلَهَا وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا ﴿26﴾",
      tr: "idh jaʿala l-ladhīna kafarū fī qulūbihimu l-ḥamiyyata ḥamiyyata l-jāhiliyya\nfa-anzala L-Llāhu sakīnatahū ʿalā rasūlihī wa ʿalā l-mu’minīn\nwa alzamahum kalimata t-taqwā wa kānū aḥaqqa bihā wa ahlahā\nwa kāna L-Llāhu bi-kulli shay’in ʿalīmā",
      fr: "26. Quand ceux qui ont mécru eurent mis dans leurs cœurs la fureur, la fureur de la Jāhiliyya (la période pré-islamique)… Puis Dieu fit descendre Sa paix sur Son Messager ainsi que sur les croyants, et les obligea à la parole de piété dont ils étaient les plus dignes et les plus proches. Dieu est Omniscient."
    },
    {
      ar: "لَقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا بِالْحَقِّ لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ إِن شَاءَ اللَّهُ آمِنِينَ مُحَلِّقِينَ رُءُوسَكُمْ وَمُقَصِّرِينَ لَا تَخَافُونَ فَعَلِمَ مَا لَمْ تَعْلَمُوا فَجَعَلَ مِن دُونِ ذَٰلِكَ فَتْحًا قَرِيبًا ﴿27﴾",
      tr: "laqad ṣadaqa L-Llāhu rasūlahu r-ru’yā bi-l-ḥaqq\nla-tadkhulunna l-masjida l-ḥarāma in shā’a L-Llāhu āminīna\nmuḥalliqīna ruʾūsakum wa muqaṣṣirīna lā takhāfūn\nfa-ʿalima mā lam taʿlamū fa-jaʿala min dūni dhālika fatḥan qarībā",
      fr: "Oui, Dieu a confirmé la promesse faite à Son Messager par la vérité de la vision qu’Il lui a accordée : vous entrerez dans la Mosquée Sacrée, si Dieu le veut, en toute sécurité, ayant rasé vos têtes ou coupé vos cheveux, sans aucune crainte.\n27. Il savait donc ce que vous ne saviez pas. Il a placé en deçà de cela (la trêve de Ḥudaybiya) une prompte victoire."
    },
    {
      ar: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَكَفَىٰ بِاللَّهِ شَهِيدًا ﴿28﴾",
      tr: "huwa l-ladhī arsala rasūlahu bi-l-hudā wa dīni l-ḥaqq\nli-yuẓhirahu ʿalā d-dīni kullihī wa kafā bi-Llāhi shahīdā",
      fr: "28. C’est Lui qui a envoyé Son Messager avec la guidance et la religion de vérité, pour la faire triompher sur toute autre religion. Dieu suffit comme témoin."
    },
    {
      ar: "مُحَمَّدٌ رَسُولُ اللَّهِ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ تَرَاهُمْ رُكَّعًا سُجَّدًا يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ وَرِضْوَانًا سِيمَاهُمْ فِي وُجُوهِهِم مِّنْ أَثَرِ السُّجُودِ ذَٰلِكَ مَثَلُهُمْ فِي التَّوْرَاةِ وَمَثَلُهُمْ فِي الْإِنجِيلِ كَزَرْعٍ أَخْرَجَ شَطْأَهُ فَآزَرَهُ فَاسْتَغْلَظَ فَاسْتَوَىٰ عَلَىٰ سُوقِهِ يُعْجِبُ الزُّرَّاعَ لِيَغِيظَ بِهِمُ الْكُفَّارَ وَعَدَ اللَّهُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ مِنْهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا ﴿29﴾",
      tr: "muḥammadun rasūlu L-Llāh\nwa l-ladhīna maʿahu ashidda’u ʿalā l-kuffāri ruḥamā’u baynahum\ntarāhum rukkaʿan sujjadan yabtaghūna faḍlan mina L-Llāhi wa riḍwānā\nsīmāhum fī wujūhihim min athari s-sujūd\ndhālika mathaluhum fī t-tawrāti wa mathaluhum fī l-injīl\nka-zarʿin akhraja shaṭ’ahu fa-āzarahu fa-staghlāẓa fa-stawā ʿalā sūqih\nyuʿjibu z-zurrāʿa li-yaghīẓa bihimu l-kuffār\nwa ʿada L-Llāhu l-ladhīna āmanū wa ʿamilū ṣ-ṣāliḥāti minhum\nmaghfiratan wa ajran ʿaẓīmā",
      fr: "29. Muhammad, le Messager de Dieu, et ceux qui sont avec lui sont durs envers les mécréants, miséricordieux entre eux. Tu les vois inclinés, prosternés, recherchant grâce auprès de Dieu et agrément. Leur visage porte la trace de la prosternation. Telle est leur image dans la Torah. Et l’image que l’on donne d’eux dans l’Évangile est celle d’une semence qui sort sa pousse, puis se raffermit, s’épaissit et ensuite se dresse sur sa tige, à l’émerveillement des semeurs. Par eux, Dieu remplit de dépit les mécréants. Dieu promet à ceux d’entre eux qui croient et font de bonnes œuvres un pardon et une énorme récompense sans limites."
    }
  ]
},

{
  id: "mulk",
  title: "سورة الملك",
  subtitle: "Sourate 67 – La Royauté",
  desc: "La souveraineté de Dieu, la création, l’épreuve et la prise de conscience.",
  content: [
    {
      // Page de transition – hadith sur les degrés des gens du dhikr
      ar: "عن أبي الدرداء قال رسول الله صلى الله عليه وسلم:\n« أَعْظَمُ النَّاسِ دَرَجَةً الذَّاكِرُونَ اللَّهَ »\nرواه البيهقي، حديث حسن",
      tr: "",
      fr: "D’après Abū al-Dardā’, l’Envoyé d’Allah (sur lui le salut et la paix) a dit :\n« Ceux à qui revient le plus haut degré spirituel sont ceux qui pratiquent l’invocation de Dieu. »\n\nCité par Bayhaqī, hadith de bonne authenticité."
    },
    {
      type: "heading",
      ar: "سورة الملك",
      tr: "Sourate 67 – al-Mulk",
      fr: "La Royauté"
    },
    {
      ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      tr: "Bismi l-Llāhi r-Raḥmāni r-Raḥīm",
      fr: "Au Nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux."
    },
    {
      ar: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾\nالَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾",
      tr: "tabāraka l-ladhī bi-yadihi l-mulku wa huwa ʿalā kulli shay’in qadīr\nal-ladhī khalaqa l-mawta wa l-ḥayāta li-yabluwakum ayyukum aḥsanu ʿamalā wa huwa l-ʿazīzu l-ghafūr",
      fr: "1. Béni soit Celui qui tient en Ses mains la Royauté, et Il est Omnipotent.\n2. Celui qui a créé la mort et la vie afin de vous éprouver : qui de vous est le meilleur en œuvre, et c’est Lui le Puissant, le Pardonneur."
    },
    {
      ar: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَا تَرَىٰ فِي خَلْقِ الرَّحْمٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ ﴿٣﴾\nثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ ﴿٤﴾",
      tr: "al-ladhī khalaqa sabʿa samāwātin ṭibāqā mā tarā fī khalqi r-Raḥmāni min tafāwut\nfa-rjiʿi l-baṣara hal tarā min fuṭūr\nthumma rjiʿi l-baṣara karratayni yanqalib ilayka l-baṣaru khāsi’an wa huwa ḥasīr",
      fr: "3. Celui qui a créé sept cieux superposés, sans que tu ne voies aucune disproportion en la création du Tout Miséricordieux.\n4. Puis, retourne ton regard à deux reprises : le regard te reviendra humilié et frustré."
    },
    {
      ar: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ ﴿٥﴾",
      tr: "wa laqad zayyanā s-samā’a d-dunyā bi-maṣābīḥa wa jaʿalnāhā rujūman li-sh-shayāṭīn\nwa aʿtadnā lahum ʿadhāba s-saʿīr",
      fr: "5. Nous avons effectivement embelli le ciel le plus proche avec des luminaires [des étoiles] dont Nous avons fait des projectiles pour lapider les diables, et Nous leur avons préparé le châtiment de la Fournaise."
    },
    {
      ar: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ وَبِئْسَ الْمَصِيرُ ﴿٦﴾\nإِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ ﴿٧﴾",
      tr: "wa li-l-ladhīna kafarū bi-rabbihim ʿadhābu jahannam wa bi’sa l-maṣīr\nidhā ulqū fīhā samiʿū lahā shahīqā wa hiya tafūr",
      fr: "6. Ceux qui ont mécru en leur Seigneur auront le châtiment de la Géhenne. Et quelle mauvaise destination !\n7. Quand ils y seront jetés, ils lui entendront un gémissement, tandis qu’elle bouillonne."
    },
    {
      ar: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ ﴿٨﴾",
      tr: "takādu tamayyazu mina l-ghayẓi kullamā ulqiya fīhā fawjun sa’alahum khazanatuhā a-lam ya’tikum nadhīr",
      fr: "8. Peu s’en faut que, de rage, elle n’éclate. Toutes les fois qu’un groupe y est jeté, ses gardiens leur demandent : « Quoi ! Ne vous est-il pas venu d’avertisseur ? »"
    },
    {
      ar: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ ﴿٩﴾",
      tr: "qālū balā qad jā’anā nadhīr fa-kadhdhabnā wa qulnā mā nazzala L-Lāhu min shay’\nin antum illā fī ḍalālin kabīr",
      fr: "9. Ils dirent : « Mais si ! Un avertisseur nous était venu certes, mais nous avons crié au mensonge et avons dit : “Dieu n’a rien fait descendre ; vous n’êtes que dans un grand égarement.” »"
    },
    {
      ar: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ ﴿١٠﴾\nفَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ ﴿١١﴾",
      tr: "wa qālū law kunnā nasmaʿu aw naʿqilu mā kunnā fī aṣḥābi s-saʿīr\nfa-ʿtarafū bi-dhanbihim fa-suḥqan li-aṣḥābi s-saʿīr",
      fr: "10. Et ils dirent : « Si nous avions écouté ou raisonné, nous ne serions pas parmi les gens de la Fournaise. »\n11. Ils ont reconnu leur péché. Que les gens de la Fournaise soient anéantis à jamais."
    },
    {
      ar: "إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ ﴿١٢﴾\nوَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ ۖ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ ﴿١٣﴾",
      tr: "inna l-ladhīna yakhshawna rabbahum bi-l-ghaybi lahum maghfiratun wa ajrun kabīr\nwa asirrū qawlakum aw ijharū bih innahu ʿalīmun bi-dhāti ṣ-ṣudūr",
      fr: "12. Ceux qui craignent leur Seigneur dans Son mystère impénétrable auront un pardon et une grande récompense.\n13. Que vous teniez votre parole secrète ou la divulguiez, Il connaît bien le contenu intime de vos cœurs."
    },
    {
      ar: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ ﴿١٤﴾\nهُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ ﴿١٥﴾",
      tr: "alā yaʿlamu man khalaq wa huwa l-Laṭīfu l-Khabīr\nhuwa l-ladhī jaʿala lakumu l-arḍa dhalūlan fa-mshū fī manākibihā wa kulū min rizqih\nwa ilayhi n-nushūr",
      fr: "14. Ne connaît-Il pas ce qu’Il a créé, alors que c’est Lui le Compatissant, le Parfaitement Connaisseur ?\n15. C’est Lui qui vous a soumis la terre : parcourez donc ses grandes étendues, et mangez de ce qu’Il vous fournit. Vers Lui est la Résurrection."
    },
    {
      ar: "أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ ﴿١٦﴾\nأَمْ أَمِنتُم مَّن فِي السَّمَاءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ ﴿١٧﴾",
      tr: "a-amintum man fī s-samā’i an yakhsifa bikumu l-arḍa fa-idhā hiya tamūr\nam-amintum man fī s-samā’i an yursila ʿalaykum ḥāṣibā fa-sa-taʿlamūna kayfa nadhīr",
      fr: "16. Êtes-vous à l’abri de Celui qui est au ciel qu’Il vous enfouisse en la terre ? Et voici qu’elle tremble !\n17. Ou êtes-vous à l’abri de Celui qui est au ciel qu’Il envoie sur vous un ouragan de pierres ? Vous saurez ainsi quel fut Mon avertissement."
    },
    {
      ar: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ ﴿١٨﴾\nأَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ ﴿١٩﴾",
      tr: "wa laqad kadhdaba l-ladhīna min qablihim fa-kayfa kāna nakīr\na-wa lam yaraw ilā ṭ-ṭayri fawqahum ṣāffātin wa yaqbiḍn\nmā yumsikuhunna illā r-Raḥmān innahu bi-kulli shay’in baṣīr",
      fr: "18. En effet, ceux d’avant eux avaient crié au mensonge. Quelle fut alors Ma réprobation !\n19. N’ont-ils pas vu les oiseaux au-dessus d’eux, déployant et repliant leurs ailes tour à tour ? Seul le Tout Miséricordieux les soutient. Car Il est sur toute chose Clairvoyant."
    },
    {
      ar: "أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمٰنِ ۚ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ ﴿٢٠﴾\nأَمَّنْ هَٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ ۚ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ ﴿٢١﴾",
      tr: "amman hādhā l-ladhī huwa jundun lakum yanṣurukum min dūni r-Raḥmān\nin i l-kāfirūna illā fī ghurūr\namman hādhā l-ladhī yarzuqukum in amsaka rizqah\nbal lajjū fī ʿutuwwin wa nufūr",
      fr: "20. Quel est celui qui constituerait pour vous une armée capable de vous secourir, en dehors du Tout Miséricordieux ? En vérité, les mécréants ne sont que dans l’illusion.\n21. Ou quel est celui qui vous donnera votre subsistance s’Il retient Sa grâce ? Mais ils persistent dans leur insolence et dans leur répulsion."
    },
    {
      ar: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ ﴿٢٢﴾\nقُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَّا تَشْكُرُونَ ﴿٢٣﴾",
      tr: "afa-man yamshī mukibban ʿalā wajhihī ahdā\namman yamshī sawiyyan ʿalā ṣirāṭin mustaqīm\nqul huwa l-ladhī ansha’akum wa jaʿala lakumu s-samʿa wa l-abṣāra wa l-af’ida\nqalīlan mā tashkurūn",
      fr: "22. Qui est donc mieux guidé ? Celui qui marche face contre terre, ou celui qui marche redressé sur un chemin droit ?\n23. Dis : « C’est Lui qui vous a créés et vous a donné l’ouïe, les yeux et les cœurs ». Mais vous êtes rarement reconnaissants !"
    },
    {
      ar: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ ﴿٢٤﴾\nوَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ ﴿٢٥﴾",
      tr: "qul huwa l-ladhī dhara’akum fī l-arḍ wa ilayhi tuḥsharūn\nwa yaqūlūna matā hādhā l-waʿdu in kuntum ṣādiqīn",
      fr: "24. Dis : « C’est Lui qui vous a répandus sur la terre, et c’est vers Lui que vous serez rassemblés ».\n25. Et ils disent : « À quand cette promesse, si vous êtes véridiques ? »"
    },
    {
      ar: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ ﴿٢٦﴾\nفَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَٰذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ ﴿٢٧﴾",
      tr: "qul innamā l-ʿilmu ʿinda L-Lāh wa innamā anā nadhīrun mubīn\nfa-lammā ra’awhu zulfatan sī’at wujūhu l-ladhīna kafarū wa qīla hādhā l-ladhī kuntum bihi taddaʿūn",
      fr: "26. Dis : « Dieu seul en a la connaissance. Et moi, je ne suis qu’un avertisseur explicite. »\n27. Puis, quand ils verront (le châtiment) de près, les visages de ceux qui ont mécru seront assombris. Et il leur sera dit : « Voilà ce que vous réclamiez. »"
    },
    {
      ar: "قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ ﴿٢٨﴾",
      tr: "qul ara’aytum in ahlakaniya L-Lāhu wa man maʿiya aw raḥimanā\nfa-man yujīru l-kāfirīn min ʿadhābin alīm",
      fr: "28. Dis : « Que vous en semble ? Que Dieu me fasse périr, ainsi que ceux qui sont avec moi, ou qu’Il nous fasse miséricorde, qui protégera alors les mécréants d’un châtiment douloureux ? »"
    },
    {
      ar: "قُلْ هُوَ الرَّحْمٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هو فِي ضَلَالٍ مُّبِينٍ ﴿٢٩﴾\nقُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ ﴿٣٠﴾",
      tr: "qul huwa r-Raḥmān āmannā bih wa ʿalayhi tawakkalnā\nfa-sa-taʿlamūna man huwa fī ḍalālin mubīn\nqul ara’aytum in aṣbaḥa mā’ukum ghawran\nfa-man ya’tīkum bi-mā’in maʿīn",
      fr: "29. Dis : « C’est Lui, le Tout Miséricordieux. Nous croyons en Lui et c’est en Lui que nous plaçons notre confiance. Vous saurez bientôt qui est dans un égarement évident. »\n30. Dis : « Que vous en semble ? Si votre eau était absorbée au plus profond de la terre, qui donc vous procurerait une eau vive ? »"
    }
  ]
},

{
  id: "ya_adiman",
  title: "يا عظيما",
  subtitle: "Qasida Yā ʿAẓīman",
  desc: "Prière du Cheikh Adda Bentounes au cœur de l’épreuve historique.",
  content: [
    {
      // Page de transition – hadith sur la supériorité du dhikr
      ar: "عن ابن عباس قال رسول الله صلى الله عليه وسلم:\n« مَا مِنْ صَدَقَةٍ أَفْضَلُ مِنْ ذِكْرِ اللَّهِ تَعَالَى »\nرواه الطبراني، حديث حسن",
      tr: "",
      fr: "D’après Ibn ʿAbbās, l’Envoyé d’Allah (sur lui le salut et la paix) a dit :\n« Il n’est pas d’aumône meilleure que l’invocation de Dieu le Très-Haut. »\n\nCité par Ṭabarānī, hadith de bonne authenticité."
    },
    {
      type: "heading",
      ar: "قصيدة يا عظيما",
      tr: "Qasida Yā ʿAẓīman",
      fr: "Poème Yā ʿAẓīman"
    },
    {
      ar: "للشيخ عدة بن تونس",
      tr: "Du Cheikh ʿAdda Bentounes",
      fr: ""
    },
    {
      ar: "ولد الشيخ عدة بن تونس سنة 1898 بمستغانم (الجزائر)، نشأ في الزاوية العلاوية الكبرى، حيث اكتمل نضجه الفكري والديني تحت رعاية الشيخ العلاوي. تولى الخلافة من بعده، وعمل على نشر الطريقة والدعوة إلى الله، أنشأ العديد من الزوايا داخل الجزائر وخارجها، لأجل التربية والتعليم والتوجيه والإرشاد رغم الظروف القاسية التي شلت كل نشاط ديني واجتماعي أثناء الحرب العالمية وبعدها، توفي سنة 1952. وقد نظم الشيخ سيدي عدة رضي الله عنه هاته القصيدة بسبب الأوضاع القاسية التي عاشها المسلمون جراء الاحتلال الغربي لبلدانهم وتدهور الأوضاع الاقتصادية في العالم ما ترتب عن تلك حربا عالمية أتت على الأخضر واليابس فاستغاث بالله بهاته القصيدة عساه يرفع الغبن عن الأمة، والحرب عن الإنسانية.",
      tr: "",
      fr: ""
    },
    {
      ar: "",
      tr: "",
      fr: "Le Cheikh Adda Bentounes (1898-1952) (que Dieu sanctifie son âme) est né dans le quartier de Tijdit de la ville de Mostaganem (Algérie). Il a grandi au sein de la zaouia mère Alawiyya. C’est dans ce lieu que sa maturité intellectuelle et religieuse s’est développée, sous la tutelle de son maître, le Cheikh Ahmed Ibn Mustapha al-ʿAlâwî, dont il a pris la succession spirituelle en 1934.\n\nDès lors, le Cheikh Adda Bentounes a eu à cœur de diffuser la ṭarīqa et l’appel à Allah. Il a créé de nombreuses zāwiyas en Algérie et à l’étranger, dans le but d’éduquer, d’instruire et de guider, malgré les conditions complexes ayant entravé toute activité religieuse et sociale pendant et après la guerre mondiale.\n\nLe Cheikh Adda Bentounes, qu’Allah l’agrée, a composé ce poème en raison des conditions de vie très difficiles des musulmans durant la colonisation et en prenant en considération le contexte économique international qui a plongé le monde dans une guerre destructrice. Par ce poème, le Cheikh implore Allah, le priant de libérer la nation de l’injustice et l’humanité toute entière de la guerre."
    },
    {
      ar: "يَا عَظِيمًا يُرْجَى لِكُلِّ عَظِيمٍ\nقَدْ عَظُمَ الخَطْبُ وَفَاضَ البَلاءُ",
      tr: "yā ʿaẓīman yurjā li-kulli ʿaẓīmin\nqad ʿaẓuma l-khaṭbu wa-fāḍa l-balā’u",
      fr: "Ô Dieu sublime que dans le malheur nous implorons,\nl’épreuve s’est aggravée et les périls nous submergent."
    },
    {
      ar: "جَلَلٌ عَمْنَا كَشِبْهِ صَيِّبٍ\nفِيهِ رَعْدٌ وَبَرْقٌ فِيهِ صَلَاءُ",
      tr: "jalalun ʿammanā ka-shibhi ṣayyibin\nfīhi raʿdun wa-barqun fīhi ṣalā’u",
      fr: "Un drame s’est répandu en nuées,\nempli de tonnerre, d’éclairs et de feu."
    },
    {
      ar: "يَا لِلْإِسْلَامِ وَالْمُسْلِمِينَ طُرًّا\nمِنْ قَضَاءٍ يَبْدُو عَلَيْهِ شَقَاءُ",
      tr: "yā li-l-islāmi wa-l-muslimīna ṭurran\nmin qaḍā’in yabdū ʿalayhi shaqā’u",
      fr: "Quel malheur pour l’Islam et tous les musulmans\nqui d’un sort laisse présager des souffrances."
    },
    {
      ar: "رَحْمَاكَ رَبِّي بِعِبَادٍ حَيَارَى\nفِي قُيُودٍ شَدِيدَةٍ أُسَرَاءُ",
      tr: "raḥmāka rabbī bi-ʿibādin ḥuyārā\nfī quyūdin shadīdatin usarā’u",
      fr: "Miséricorde, Seigneur, pour des serviteurs perplexes,\nprisonniers de terribles entraves !"
    },
    {
      ar: "نُودِيَ فِي النَّاسِ بِسُوءِ نَفِيرٍ\nفَعَمَّ الجَزَعُ وَضَاقَ الفَضَاءُ",
      tr: "nūdiyya fī n-nāsi bi-sū’i nafīrin\nfa-ʿamma l-jazaʿu wa-ḍāqa l-faḍā’u",
      fr: "Un appel est lancé aux hommes d’un sinistre cor ;\nl’inquiétude s’est répandue et l’espace s’est restreint."
    },
    {
      ar: "كَمْ صِبْيَةٍ ضَلَّتْ فِي الوَرَى يَتَامَى\nعَالَةً عَرَايَا جِيَاعَ ضِمَاءُ",
      tr: "kam ṣibyatan ḍallat fī l-warā yatāmā\nʿālatan ʿarāyā jiyāʿan ḍimā’u",
      fr: "Combien d’enfants sont demeurés orphelins,\npauvres, nus, affamés, assoiffés !"
    },
    {
      ar: "وَنِسْوَةٌ تَبْكِينَ فِي كُلِّ بَيْتٍ\nدَاهَمَتْهُنَّ فِتْنَةٌ عَمْيَاءُ",
      tr: "wa-niswatan tabkīna fī kulli baytin\ndāhamat-hunna fitnatun ʿamyā’u",
      fr: "Combien de mères pleurent dans leur maison,\nassaillies par une démence aveugle !"
    },
    {
      ar: "يَا غِيَاثًا بِبَابِكَ قَدْ وَقَفْنَا\nأَذِلَّةً صَرْعَى مَسَّنَا الفَنَاءُ",
      tr: "yā ghiyāthan bi-bābika qad waqafnā\nadhillatan ṣarʿā massanā l-fanā’u",
      fr: "Toi qui prêtes assistance, nous implorons devant Ta porte,\nhumiliés, abattus, anéantis !"
    },
    {
      ar: "بِسِرِّكَ المَصُونِ فِي كُلِّ شَيْءٍ\nبِنُورِ وَجْهِكَ يَتِمُّ الشِّفَاءُ",
      tr: "bi-sirrika l-maṣūni fī kulli shay’in\nbi-nūri wajhika yatimmu sh-shifā’u",
      fr: "Par Ton Secret préservé en toute chose,\npar la lumière de Ta Face, notre guérison s’achèvera."
    },
    {
      ar: "أَنْتَ أَوْقَفْتَنَا بِبَابِكَ نَدْعُو\nوَحَاشَا أَنْ يَخِيبَ فِيكَ الرَّجَاءُ",
      tr: "anta awqaftanā bi-bābika nadʿū\nwa-ḥāshā an yakhība fīka r-rajā’u",
      fr: "C’est Toi qui nous places implorants devant Ta porte ;\nà Dieu ne plaise que notre espoir soit vain."
    },
    {
      ar: "أَغِثِ المُسْتَغِيثَ قَدْ عِيلَ صَبْرًا\nأَجِبِ المُضْطَرَّ غَشَاهُ الوَبَاءُ",
      tr: "aghithī l-mustaghītha qad ʿīla ṣabran\najibi l-muḍṭarra ghashāhu l-wabā’u",
      fr: "Assiste celui qui T’implore, la patience est épuisée ;\nréponds au malheureux atteint par le mal."
    },
    {
      ar: "دَعَوْنَاكَ رَبِّي وَالقَلْبُ جَرِيحٌ\nوَالطَّرْفُ قَرِيحٌ وَالعَقْلُ هَبَاءُ",
      tr: "daʿawnāka rabbī wa-l-qalbu jarīḥun\nwa-ṭ-ṭarfu qarīḥun wa-l-ʿaqlu habā’u",
      fr: "Nous T’implorons, Seigneur, avec le cœur meurtri,\nles yeux en larmes et la raison anéantie."
    },
    {
      ar: "دَعَوْنَاكَ رَبِّي مَا لَنَا سِوَاكَ\nوَبِرِضْوَانِكَ يَكُونُ العَطَاءُ",
      tr: "daʿawnāka rabbī mā lanā siwāka\nwa-bi-riḍwānika yakūnu l-ʿaṭā’u",
      fr: "Nous T’implorons, Seigneur, nous n’avons d’autre que Toi ;\navec Ton agrément, le don se fera."
    },
    {
      ar: "بِاسْمِكَ الأَعْظَمِ يُرْجَى دُعَانَا\nبِالرَّسُولِ الأَكْرَمِ يُلْغَى العَنَاءُ",
      tr: "bi-ismika l-aʿẓami yurjā duʿānā\nbi-r-rasūli l-akrami yulghā l-ʿanā’u",
      fr: "Par Ton Nom Suprême, notre prière s’exaucera ;\npar le Noble Envoyé, notre peine finira."
    },
    {
      ar: "إِنْ رَحِمْتَ فَبِفَضْلٍ مِنْكَ نُحْمَى\nوَإِنْ عَذَّبْتَ فَعَدْلٌ وَدَوَاءُ",
      tr: "in raḥimta fa-bi-faḍlin minka nuḥmā\nwa-in ʿadhdhabta fa-ʿadlun wa dawā’u",
      fr: "Si Tu accordes Ta Miséricorde, nous serons protégés par Ta Grâce ;\nmais si Tu châties, c’est justice et remède."
    },
    {
      ar: "فَعَلَى كُلِّ حَالَةٍ أَنْتَ أَوْلَى\nبِعَبِيدِكَ أَحْسَنُوا أَمْ أَسَاءُوا",
      tr: "fa-ʿalā kulli ḥālatin anta awlā\nbi-ʿabīdika aḥsanū am asā’ū",
      fr: "En chaque état, Tu restes le meilleur recours\npour Tes serviteurs, qu’ils aient fait le bien ou le mal."
    },
    {
      ar: "يَا رَحِيمًا بِرَحْمَتِكَ أَغِثْنَا",
      tr: "yā raḥīman bi-raḥmatika aghithnā",
      fr: "Ô Miséricordieux, accorde-nous Ta Miséricorde."
    },
    {
      ar: "يَا كَرِيمًا مَا مِثْلُهُ كُرَمَاءُ",
      tr: "yā karīman mā mithluhu kuramā’u",
      fr: "Ô Généreux à nul autre pareil !"
    },
    {
      ar: "يَا غَفُورًا فَاغْفِرْ فَإِنَّكَ عَفُوٌّ\nفَاعْفُ عَنَّا فَالْعَفْوُ مِنْكَ صَفَاءُ",
      tr: "yā ghafūran fa-ghfir fa-innaka ʿafūw\nfaʿfu ʿannā fa-l-ʿafwu minka ṣafā’u",
      fr: "Toi qui pardonnes, sois indulgent, Tu es l’indulgence même.\nPardonne-nous, Ton pardon est pureté et sérénité."
    },
    {
      ar: "وَالسَّلَامُ الشَّامِلُ لِكُلِّ فَرْدٍ\nمِنْ آلٍ وَصَحْبٍ مَا فَاضَ السَّمَاءُ",
      tr: "wa-s-salāmu sh-shāmilu li-kulli fardin\nmin ālin wa-ṣaḥbin mā fāḍa s-samā’u",
      fr: "Que la paix s’étende sur chacun,\nsur les siens et sur ses compagnons,\ncomme l’abondance vient du ciel."
    },
    {
      ar: "وَفِّقْنَا أَجِرْنَا مِنْ سُوءِ الطَّوَارِي\nوَاخْتِمْ لَنَا عُمْرًا مَدَاهُ رِضَاءُ",
      tr: "waffiqnā ajirnā min sū’i ṭ-ṭawārī\nwa-akh’tim lanā ʿumran madāhu riḍā’u",
      fr: "Accorde-nous le succès, protège-nous des malheurs,\nscelle notre vie par Ton Agrément."
    },
    {
      ar: "وَالصَّلَاةُ عَلَى النَّبِيِّ عِمَادِي\nعَيْنِ رَحْمَةِ اللَّهِ بِهِ الجَلاءُ",
      tr: "wa-ṣ-ṣalātu ʿalā n-nabiyyi ʿimādī\nʿayni raḥmati l-Llāhi bihi l-jalā’u",
      fr: "Je prie pour le Prophète, mon Soutien,\nsource de Miséricorde et de Délivrance."
    }
  ]
},

{
  id: "aghith",
  title: "إغاثة المستغيثين",
  subtitle: "Ighāthat al-mustaghīthīn bi-rijāli Llāhi ṣ-ṣāliḥīn",
  desc: "Poème de Cheikh al-ʿAlâwî : l’imploration du salut par la chaîne des saints.",
  content: [
    {
      // Page de transition – hadith sur l’amour et la haine du dhikr
      ar: "عن أنس بن مالك قال رسول الله صلى الله عليه وسلم:\n« عَلَامَةُ حُبِّ اللَّهِ تَعَالَى ذِكْرُ اللَّهِ،\nوَعَلَامَةُ بُغْضِ اللَّهِ بُغْضُ ذِكْرِ اللَّهِ »\nرواه البيهقي، حديث حسن",
      tr: "",
      fr: "D’après Anas b. Mālik, l’Envoyé d’Allah (sur lui le salut et la paix) a dit :\n« Le critère de l’amour de Dieu est l’amour de Son invocation (dhikr),\n et celui de la haine de Dieu est la haine de Son invocation. »\n\nCité par Bayhaqī, hadith de bonne authenticité."
    },
    {
      type: "heading",
      ar: "قصيدة إغاثة المستغيثين برجال الله الصالحين",
      tr: "Qasida ighāthat al-mustaghīthīn bi-rijāli Llāhi ṣ-ṣāliḥīn",
      fr: "Poème : Seigneur, nous implorons le salut par les gens de la silsila"
    },
    {
      ar: "للشيخ العلاوي",
      tr: "Du Cheikh al-ʿAlâwî",
      fr: ""
    },
    {
      ar: "صَفِيُّ القَلْبِ قَوِيُّ الوِدَادِ حَسَنُ الْبُشْرَى نَقِيُّ الفُؤَادِ",
      tr: "ṣafiyyu l-qalbi qawiyyu l-widādi ḥasanu l-bushrā naqiyyu l-fu’ādi",
      fr: "Cœur pur et amour puissant,\nà l’âme pure et à la présence apaisante."
    },
    {
      ar: "سَأَلْنَاكَ يَا رَبِّ بِهِ تَحْفِظْنَا عَنْ بَابِكَ يَا مَوْلَانَا لَا تَطْرُدْنَا",
      tr: "sa’alnāka yā Rabbī bihi taḥfaẓnā ʿan bābika yā Mawlānā lā tatrudnā",
      fr: "Par lui, Seigneur, nous implorons Ta protection ;\nparvenus au seuil de Ta porte, ne nous chasse pas."
    },
    {
      ar: "وَبِشَيْخِهِ نَرْتَجِي الْفَرَجَ وَلِيُّنَا أَبُو يَعْزَى الْمُهَاجِي",
      tr: "wa-bi-shaykhihi nartajī l-faraja waliyyunā Abū Yaʿzā l-Mahājī",
      fr: "Par son Cheikh, nous espérons une prompte délivrance :\nnotre Saint, Abū Yaʿzā al-Mahājī."
    },
    {
      ar: "بِحَقِّ مَوْلَايَ الْعَرَبِيِّ الدَّرْقَاوِي أَحْفَظْنَا يَا إِلَهِي مِنَ الدَّعَاوِي",
      tr: "bi-ḥaqqi Mawlāya l-ʿArbī d-Darqāwī iḥfaẓnā yā Ilāhī mina d-daʿāwī",
      fr: "Par le mérite de Mawlāy al-ʿArbī ad-Darqāwī,\nimmunise-nous contre toute forme de prétention."
    },
    {
      ar: "وَبِشَيْخِهِ مَنْهَلِ التَّبْجِيلِ الْمُكَنَّى بِالْيَتِيمِ الْوَكِيلِي",
      tr: "wa-bi-shaykhihi manhali t-tabjīli l-mukannā bi-l-Yatīmi l-Wakīlī",
      fr: "Par son Cheikh, digne de vénération,\nsurnommé al-Yatīm al-Wakīlī."
    },
    {
      ar: "مُحَمَّدُ الْقَدُّورِي مُفِيضُ الشَّرَابِ أَسْلُكْ بِنَا يَا رَبِّ سَبِيلَ الصَّوَابِ",
      tr: "Muḥammadu l-Qaddūrī mufīḍu sh-sharāb usluk binā yā Rabbī sabīla ṣ-ṣawāb",
      fr: "Muḥammad al-Qaddūrī, coupe débordante,\nconduis-nous, Seigneur, sur la voie juste."
    },
    {
      ar: "فَقَدْ مَهَّدَ الطَّرِيقَةَ لِأَهْلِهَا فَوَفِّقْنَا يَا مَوْلَانَا لِحِفْظِهَا",
      tr: "faqad mahhada ṭ-ṭarīqata li-ahlihā fa-waffiqnā yā Mawlānā li-ḥifẓihā",
      fr: "Lui qui a aplani la Voie pour ses aspirants ;\naide-nous, Seigneur, à lui rester fidèles."
    },
    {
      ar: "وَبِشَيْخِهِ أَحْفِظْنَا مِنَ الْخَلَلِ الْمُسَمَّى عَلِيًّا مَعْرُوفًا بِالْجَمَلِ",
      tr: "wa-bi-shaykhihi iḥfaẓnā mina l-khalali l-musammā ʿAliyyan maʿrūfan bi-l-Jamal",
      fr: "Par son Cheikh ʿAlī, connu sous le nom d’al-Jamal,\npréserve-nous de toute défaillance."
    },
    {
      ar: "سَأَلْنَاكَ يَا رَبِّ بِإِسْنَادِهِ الْعَرَبِيِّ بْنِ عَبْدِ اللَّهِ وَبِأَبِيهِ",
      tr: "sa’alnāka yā Rabbī bi-isnādihi l-ʿArbī bni ʿAbdi Llāhi wa-bi-abīhi",
      fr: "Nous T’implorons, Seigneur, par sa lignée spirituelle,\nal-ʿArbī ibn ʿAbd Allāh, et par son père."
    },
    {
      ar: "أَحْمَدَ الثَّابِتِ الْجَبَلِ الرَّاسِي وَبِشَيْخِهِ قَاسِمِ الْخَصَاصِي",
      tr: "Aḥmada th-thābita l-jabali r-rāsī wa-bi-shaykhihi Qāsimi l-Khaṣṣāṣī",
      fr: "Par son père Aḥmad, montagne immuable,\net par son Cheikh Qāsim al-Khaṣṣāṣī."
    },
    {
      ar: "وَبِالْفَاسِي يُوسُفَ صَفِيَّ الْمَشْرُوبِ وَشَيْخِهِ عَبْدِ الرَّحْمَنِ الْمَجْذُوبِ",
      tr: "wa-bi-l-Fāsī Yūsufa ṣafiyya l-mashrūb wa-shaykhihi ʿAbdi r-Raḥmāni l-Majdhūb",
      fr: "Ainsi que par al-Fāsī Yūsuf, breuvage limpide,\npar son Cheikh ʿAbd ar-Raḥmān al-Majdhūb."
    },
    {
      ar: "وَبِقُدْوَتِهِمْ عَلِيِّ الصِّنْهَاجِي يَا إِلَهِي نَجِّنَا مِنَ الْحَرَجِ",
      tr: "wa-bi-qudwatihim ʿAlī ṣ-Ṣinhājī yā Ilāhī najjinā mina l-ḥaraj",
      fr: "Et par leur guide ʿAlī aṣ-Ṣinhājī,\nSeigneur, délivre-nous de toute gêne."
    },
    {
      ar: "وَبِشَيْخِهِ مُحَمَّدِ بْنِ عَبْدِ اللَّهِ وَلِيِّ اللَّهِ مَعْرُوفًا لَهُ صَوْلَهُ",
      tr: "wa-bi-shaykhihi Muḥammad bni ʿAbdi Llāh waliyyi Llāhi maʿrūfan lahu ṣawlah",
      fr: "Par son maître Muḥammad Ibn ʿAbd Allāh,\nÉlu de Dieu, autorité imposante."
    },
    {
      ar: "سَأَلْنَاكَ الْفَنَا عَنِ الْإِحْسَاسِ بِشَيْخِهِمْ عَبْدِ الرَّحْمَنِ الْفَاسِي",
      tr: "sa’alnāka l-fanā ʿani l-iḥsās bi-shaykhihim ʿAbdi r-Raḥmāni l-Fāsī",
      fr: "Nous Te demandons l’extinction des impulsions négatives,\npar leur Cheikh ʿAbd ar-Raḥmān al-Fāsī."
    },
    {
      ar: "وَبِإِبْرَاهِيمَ الْمُكَنَّى بِالْفَحَّامِ أَنْقِذْنَا يَا رَبِّ مِنْ قُيُودِ الْأَوْهَامِ",
      tr: "wa-bi-Ibrāhīma l-mukannā bi-l-Faḥḥām anqidhnā yā Rabbī min quyūdi l-awhām",
      fr: "Par Ibrāhīm, surnommé al-Faḥḥām,\nlibère-nous, Seigneur, des chaînes de l’illusion."
    },
    {
      ar: "وَبِشَيْخِهِ أَحْمَدَ الزَّرُّوقِي أَفْنِ رَبِّي حُظُوظِي فِي حُقُوقِي",
      tr: "wa-bi-shaykhihi Aḥmada z-Zarrūqī afni Rabbī ḥuẓūẓī fī ḥuqūqī",
      fr: "Par son Cheikh Aḥmad az-Zarrūqī,\nanéantis mon état égotique pour restaurer mon être spirituel."
    },
    {
      ar: "فَهُوَ بِهَذَا الشَّرَابِ مُوَصِّي مِنْ شَيْخِهِ أَبِي الْعَبَّاسِ الْمُرْسِي",
      tr: "fa-huwa bi-hādhā sh-sharābi muwaṣṣī min shaykhihi Abī l-ʿAbbāsi l-Mursī",
      fr: "Il n’a cessé de recommander ce breuvage,\nqu’il a hérité de son Cheikh Abū l-ʿAbbās al-Mursī."
    },
    {
      ar: "مَنْ مَهَّدَ وَسَهَّلَ الطَّرِيقَةَ حَتَّى وَصَلَتْ إِلَيْنَا الْحَقِيقَةُ",
      tr: "man mahhada wa-sahhala ṭ-ṭarīqata ḥattā waṣalat ilaynā l-ḥaqīqa",
      fr: "Qui a aplani et facilité la Voie,\net ainsi la Réalité nous est parvenue."
    },
    {
      ar: "بِحَقِّ الْحَضْرَمِي أَحْمَدَ بْنِ عُقْبَةَ وَالْقَادِرِي يَحْيَى تَمْنَحْنَا تَوْبَةً",
      tr: "bi-ḥaqqi l-Ḥaḍramī Aḥmad bni ʿUqba wa-l-Qādirī Yaḥyā tamnaḥnā tawba",
      fr: "Par la grâce d’al-Ḥaḍramī Aḥmad Ibn ʿUqba\net par celle d’al-Qādirī Yaḥyā, permets-nous le retour vers Toi."
    },
    {
      ar: "بِحَقِّ أُسْتَاذِهِمْ عَلِيِّ بْنِ وَفَا وَبِشَيْخِهِ مُحَمَّدٍ بَحْرِ الصَّفَا",
      tr: "bi-ḥaqqi ustādhihim ʿAlī bni Wafā wa-bi-shaykhihi Muḥammad Baḥru ṣ-ṣafā",
      fr: "Par leur maître ʿAlī Ibn Wafā,\npar son Cheikh Muḥammad, Baḥru ṣ-ṣafā."
    },
    {
      ar: "أَقْبِلْ رَبِّي بِحَقِّهِمْ سُؤَالِي وَبِشَيْخِهِمْ دَاوُدَ بْنِ الْبَاخِلِي",
      tr: "iqbil Rabbī bi-ḥaqqihim su’ālī wa-bi-shaykhihim Dāwūda bni l-Bākhilī",
      fr: "Et par leur Cheikh Dāwūd Ibn al-Bākhilī,\nexauce, Seigneur, mes prières."
    },
    {
      ar: "فَالرَّجَا كُلُّ الرَّجَى مِنْكَ يَا إِلَهِي بِحَقِّ شَيْخِهِمْ ابْنِ عَطَاءِ اللَّهِ",
      tr: "fa-r-rajā kullu r-rajā minka yā Ilāhī bi-ḥaqqi shaykhihim Ibni ʿAṭā’i Llāh",
      fr: "En Toi est tout espoir,\npar leur Cheikh Ibn ʿAṭā’illāh."
    },
    {
      ar: "وَبِشَيْخِهِمُ الشَّاذِلِيِّ أَبِي الْحَسَنِ احْفَظْنَا يَا رَبِّ مِنْ تَوَالِي الْمِحَنِ",
      tr: "wa-bi-shaykhihimu sh-Shādhilī Abī l-Ḥasan iḥfaẓnā yā Rabbī min tawālī l-miḥan",
      fr: "Par son Cheikh ash-Shādhilī Abū l-Ḥasan,\npréserve-nous des épreuves successives."
    },
    {
      ar: "فَجَاهُهُ عِنْدَكَ يُحْكَى مُعْتَبَرُ هُوَ الْوَارِثُ لِلْبَاطِنِ وَالظَّاهِرِ",
      tr: "fa-jāhuhu ʿindaka yuḥkā muʿtabar huwa l-wārithu li-l-bāṭini wa-ẓ-ẓāhir",
      fr: "Lui dont le rang auprès de Toi est, dit-on, prestigieux :\nil est l’héritier et du Caché et de l’Apparent."
    },
    {
      ar: "بِشَمْسِ الدِّينِ وَارِثِ الطَّرِيقَةِ عَنْ الْقَزْوِينِي عُنْصُرِ الْحَقِيقَةِ",
      tr: "bi-Shamsi d-Dīn wārithi ṭ-ṭarīqa ʿani l-Qazwīnī ʿunṣuri l-ḥaqīqa",
      fr: "Par Shams ad-Dīn, héritier de la ṭarīqa,\nléguée par al-Qazwīnī, source de la ḥaqīqa."
    },
    {
      ar: "فَلَنَا مِنْ فَيْضِهِمْ سِرٌّ يَسْرِي كَمَا سَرَى مِنْ إِبْرَاهِيمَ الْبَصْرِي",
      tr: "fa-lanā min fayḍihim sirrun yasrī kamā sarā min Ibrāhīm al-Baṣrī",
      fr: "Nous détenons de leurs saintes effluves un secret qui coule,\nainsi que d’Ibrāhīm al-Baṣrī."
    },
    {
      ar: "وَبِالْمَشِيشِ شَيْخِهِ عَبْدِ السَّلَامِ مَنْ زَادَ لِلطَّرِيقَةِ عِزًّا وَاحْتِرَامًا",
      tr: "wa-bi-l-Mashīshī shaykhihi ʿAbdi s-Salām man zāda li-ṭ-ṭarīqa ʿizzan wa-hti­rāmā",
      fr: "Par al-Mashīsh ʿAbd as-Salām, son Cheikh,\ngrâce auquel la Voie a connu grandeur et considération."
    },
    {
      ar: "بِشَيْخِهِمُ الْمَدَنِيِّ عَبْدِ الرَّحْمَنِ أَسْلُكْ بِنَا يَا رَبِّ سَبِيلَ الْإِحْسَانِ",
      tr: "bi-shaykhihim al-Madanī ʿAbdi r-Raḥmān usluk binā yā Rabbī sabīla l-iḥsān",
      fr: "Par leur maître al-Madanī ʿAbd ar-Raḥmān,\nguide-nous, Seigneur, sur le chemin de l’Excellence."
    },
    {
      ar: "فَهُوَ السَّاقِي لِشَرَابِ الْمَعَانِي أَخَذَهُ مِنْ شَيْخِهِ الْمَرْوَانِي",
      tr: "fa-huwa s-sāqī li-sharābi l-maʿānī akhadhahu min shaykhihi l-Marwānī",
      fr: "C’est lui l’échanson des réalités spirituelles,\nnectar hérité de son Cheikh al-Marwānī."
    },
    {
      ar: "أَخَذْنَا عَنْهُمْ كُلَّ مَا آتَانَا فَاحْفَظْنَا بِحَقِّهِمْ يَا مَوْلَانَا",
      tr: "akhadhnā ʿanhum kulla mā ātānā fa-iḥfaẓnā bi-ḥaqqihim yā Mawlānā",
      fr: "D’eux, nous avons pris tout ce qui nous a été offert ;\npar leur vertu, Seigneur, protège-nous."
    },
    {
      ar: "وَبِالْفَقِيرِ الصُّوفِي تَقِيِّ الدِّينِ وَبِشَيْخِهِ الْمُسَمَّى فَخْرَ الدِّينِ",
      tr: "wa-bi-l-faqīri ṣ-ṣūfī Taqī ad-Dīn wa-bi-shaykhihi l-musammā Fakhr ad-Dīn",
      fr: "Par al-Faqīr, le soufi Taqī ad-Dīn,\npar son Cheikh nommé Fakhr ad-Dīn."
    },
    {
      ar: "وَبِحَقِّ نُورِ الدِّينِ مُحَمَّدٍ وَبِشَيْخِهِ تَاجِ الدِّينِ نُورِ الْهُدَى",
      tr: "wa-bi-ḥaqqi Nūri d-Dīn Muḥammad wa-bi-shaykhihi Tāji d-Dīn Nūri l-Hudā",
      fr: "Par Nūr ad-Dīn Muḥammad,\net par son Cheikh Tāj ad-Dīn, Nūr al-Hudā."
    },
    {
      ar: "وَبِسَعِيدِ السَّعَادَةِ سَأَلْنَا وَبِأُسْتَاذِهِ يَسْعَدُ دَعَوْنَا",
      tr: "wa-bi-Saʿīdi s-saʿāda sa’alnā wa-bi-ustādhihi Yasʿadu daʿawnā",
      fr: "Par Saʿīd, compte-nous parmi les bienheureux ;\npar son maître Yasʿad, nous T’implorons."
    },
    {
      ar: "بِفَتْحِ السُّعُودِي سَأَلْنَا يَا رَبِّ أُسْتَاذَهُمْ فَلَا تُبْقِ مِنْ حُجُبٍ",
      tr: "bi-Fatḥi s-Suʿūdī sa’alnā yā Rabbī ustādhahum fa-lā tubqi min ḥujub",
      fr: "Par leur maître Fatḥ as-Suʿūd, nous Te prions, Seigneur :\nne laisse subsister aucun voile."
    },
    {
      ar: "بِأَبِيهِ وَشَيْخِهِ صِنْوِ الرَّسُولِ هُوَ بَابُ الْوِلَايَةِ أَصْلُ الْأُصُولِ",
      tr: "bi-abīhi wa-shaykhihi ṣinwi r-rasūl huwa bābu l-wilāyati aṣlu l-uṣūl",
      fr: "Par son père et maître, reflet de l’Envoyé :\nPorte de la sainteté, origine de toute filiation."
    },
    {
      ar: "أَخَذَهَا مِنْ عَيْنِهَا الْجَارِيَةِ مِنْ فَيْضِ الْمُصْطَفَى لَهُ مَزِيَّةٌ",
      tr: "akhadhahā min ʿaynihā l-jāriya min fayḍi l-Muṣṭafā lahu maziyya",
      fr: "Il reçut la Voie de sa source intarissable,\nde la Présence sublime de l’Élu."
    },
    {
      ar: "فَخَصَّهُ بِأَسْرَارٍ غَرِيبَةٍ عَنْ جِبْرِيلَ أَتَى بِهَا قَرِيبَةً",
      tr: "fa-khaṣṣahu bi-asrārin gharība ʿan Jibrīl atā bihā qarība",
      fr: "Qui lui a réservé des secrets inouïs,\nque Gabriel venait de lui transmettre."
    },
    {
      ar: "مِنْ رَبِّ الْعِزَّةِ عَزَّهُ بِسِرِّهِ خَصَّهُ وَعَرَّفَهُ بِنَفْسِهِ",
      tr: "min Rabbi l-ʿizzati ʿazzahu bi-sirrihi khaṣṣahu wa-ʿarrafahu bi-nafsihi",
      fr: "Du Tout-Puissant, qui le fortifia par Son Secret,\nle privilégia et lui fit connaître le Soi."
    },
    {
      ar: "بِالْغَزْوَانِي شَيْخِ الْجَمِيعِ الْمُعَظَّمِ بِجَابِرٍ اجْبُرْ كَسْرِي قَبْلَ أَنْ نُعْدَمَ",
      tr: "bi-l-Ghazwānī shaykhi l-jamīʿī l-muʿaẓẓam bi-Jābir ijbur kasrī qabla an nuʿdam",
      fr: "Par al-Ghazwānī, le Vénéré, maître de tous,\net par Jābir, panse ma blessure avant qu’elle ne s’aggrave."
    },
    {
      ar: "وَبِالْحَسَنِ يَنْبُوعِ الْحَقَائِقِ فَرْعِ النُّبُوَّةِ وَكَهْفِ الْوَثَائِقِ",
      tr: "wa-bi-l-Ḥasani yanbūʿi l-ḥaqā’iq farʿi n-nubuwwa wa-kahfi l-wathā’iq",
      fr: "Ainsi que par al-Ḥasan, source des réalités,\nrameau de la prophétie, refuge de tous les secrets."
    },
    {
      ar: "بِحَقِّ سِلْسِلَةِ ذِي الطَّرِيقَةِ أَهْلِ اللَّهِ يَنَابِيعِ الْحَقِيقَةِ",
      tr: "bi-ḥaqqi silsilati dhī ṭ-ṭarīqa ahli Llāhi yanābīʿi l-ḥaqīqa",
      fr: "Par la vertu de la chaîne de cette Voie,\nles gens de Dieu, sources de la Réalité."
    },
    {
      ar: "مِنْ سَنَدِي وَالْغَايَةُ إِلَيْكَ إِلَهِي مُسْتَنَدُنَا عَلَيْكَ",
      tr: "min sanadī wa-l-ghāyatu ilayka ilāhī mustanadunā ʿalayk",
      fr: "Je T’implore par mon maître, mon soutien dans cette chaîne,\net qui me relie à Toi, l’Unique But ;\nSeigneur, Tu es notre appui."
    },
    {
      ar: "فَرَفَعَ عَنْ بَصَرِهِ الْحُجُبَ فَامْتَلَأَتْ مِنْ فَيْضِهِ الْقُلُوبُ",
      tr: "fa-rafaʿa ʿan baṣarihi l-ḥujub fa-imtala’at min fayḍihi l-qulūb",
      fr: "De sa vue, Il ôta les voiles,\net des cœurs s’emplirent de son flux débordant."
    },
    {
      ar: "أَيَا رَبِّ بِرَسُولِكَ الْمُعَظَّمِ وَنُورِكَ وَسِرِّكَ الْمُكْتَتَمِ",
      tr: "ayā Rabbī bi-rasūlika l-muʿaẓẓam wa-nūrika wa-sirrika l-mukta­tam",
      fr: "Par Ton Sublime Envoyé, Seigneur,\npar Ta Lumière et Ton Secret scellé."
    },
    {
      ar: "اجْذِبْنَا إِلَهِي إِلَيْكَ جَذْبَةً وَاسْقِنَا مِنْ فَيَّاضِكَ غَرْفَةً",
      tr: "ajdhibnā ilāhī ilayka jadhba wa-sqinā min fayyāḍika gharfa",
      fr: "Ravis-nous entièrement à Toi ;\nde Ton breuvage abondant, offre-nous une coupe."
    },
    {
      ar: "تُغَيِّبُنَا عَنْ وُجُودِنَا فِيكَ حَتَّى نَكُونَ بِكَ مِنْكَ إِلَيْكَ",
      tr: "tughayyibunā ʿan wujūdinā fīka ḥattā nakūna bika minka ilayka",
      fr: "Qui nous soustrait à nous-mêmes pour n’exister qu’en Toi,\nafin d’être par Toi, de Toi, vers Toi."
    },
    {
      ar: "بِنُورِكَ الْقَلْبِيِّ أَصْلِ الْمَعَالِي مَظْهَرِ الْأَسْرَارِ وَنُورِ الْجَمَالِ",
      tr: "bi-nūrika l-qalbī aṣli l-maʿālī maẓhari l-asrār wa-nūri l-jamāl",
      fr: "Par la quintessence de Ta Lumière, origine de toute sublimité,\nmanifestation des Secrets, Lumière de la Beauté."
    },
    {
      ar: "صَلِّ يَا رَبِّ صَلَاةً بَقِيَّةً تَعُمُّ الآلَ وَجَمِيعَ الْأَوْلِيَا",
      tr: "ṣalli yā Rabbī ṣalātan baqiyya taʿummu l-āla wa-jamīʿa l-awliyā",
      fr: "Prie, Seigneur, d’une prière plénière\nqui s’étend sur sa Famille et tous les élus."
    },
    {
      ar: "وَارْحَمْ رَبِّ عُبَيْدَكَ فِي ضُعْفِهِ الْعَلَاوِيَّ مُقَصِّرًا فِي فِعْلِهِ",
      tr: "wa-rḥam Rabbī ʿubaydaka fī ḍuʿfihi l-ʿAlāwī muqaṣṣiran fī fiʿlih",
      fr: "Et fais miséricorde à Ton humble serviteur al-ʿAlāwī,\ndont les œuvres sont de si peu de poids."
    },
    {
      ar: "وَارْحَمْ حِزْبَنَا وَجَمِيعَ الْمُؤْمِنِينَ ثُمَّ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      tr: "wa-rḥam ḥizbanā wa-jamīʿa l-mu’minīn thumma l-ḥamdu li-Llāhi Rabbi l-ʿālamīn",
      fr: "Accorde Ta Grâce à nos disciples et à tous les croyants,\net louange à Allāh, Seigneur des mondes."
    }
  ]
},

{
    id: "biblio",
    title: "المراجع",
    desc: "Bibliographie",
    content: [
      // --- CARTE 1 : BIBLIOGRAPHIE ARABE ---
      {
        isLongText: true,
        ar: "المراجع",
        fr: "", // On laisse vide ici pour ne pas qu'il s'affiche en bas
        arBody: `
          <h3 style='color:var(--text-main); text-align:center; font-family:var(--font-fr); font-size:1.1rem; text-transform:uppercase; margin-bottom:5px; direction:ltr;'>I. Bibliographie Arabe</h3>
          
          <h3 style='color:var(--accent-gold); text-align:center;'>المراجع العربية</h3>
          <br>
          <div style="margin-bottom:15px;"><strong>مقدمات عامة</strong></div>
          <div style="margin-bottom:5px;">• مظهر البينات في التمهيد بالمقدمات</div>
          <div style="margin-bottom:5px;">• القول المقبول فيما تتوصل إليه العقول</div>
          <div style="margin-bottom:5px;">• النور الضاوي في حكم ومناجاة الشيخ العلاوي</div>
          <div style="margin-bottom:20px;">• حكمته (حكم الشيخ العلاوي)</div>
          
          <div style="margin-bottom:15px;"><strong>مؤلفات الشيخ عدة بن تونس (قدس الله روحه)</strong></div>
          <div style="margin-bottom:5px;">• ديوان آيات المحبين في مقامات العارفين</div>
          <div style="margin-bottom:5px;">• الروضة السنية في المآثر العلاوية</div>
          <div style="margin-bottom:5px;">• تنبيه القراء إلى كفاح مجلة المرشد الغراء</div>
          <div style="margin-bottom:5px;">• فك العقال عن تصرف الأفعال</div>
          <div style="margin-bottom:5px;">• قواعد الإسلام</div>
          <div style="margin-bottom:5px;">• وقاية الذاكرين من غواية الغافلين</div>
          <div style="margin-bottom:5px;">• الدرة البهية في أوراد وسند الطريقة العلاوية</div>
          <div style="margin-bottom:20px;">• مجالس التذكير في تهذيب الروح وتربية الضمير</div>
          
          <div style="margin-bottom:15px;"><strong>مؤلفات الشيخ أحمد بن مصطفى العلاوي (قدس الله روحه)</strong></div>
          <div style="margin-bottom:5px;">• ديوان العارفين في نظم المحققين</div>
          <div style="margin-bottom:5px;">• المنح القدوسية في شرح المرشد المعين بطريق الصوفية</div>
          <div style="margin-bottom:5px;">• المواد الغيثية الناشئة عن الحكم الغوثية</div>
          <div style="margin-bottom:5px;">• مفتاح الشهود في مظاهر الوجود</div>
          <div style="margin-bottom:5px;">• البحر المسجور في تفسير القرآن بمحض النور</div>
          <div style="margin-bottom:5px;">• منهل العرفان في تفسير البسملة وسور من القرآن</div>
          <div style="margin-bottom:5px;">• مفتاح علوم السر في تفسير سورة والعصر</div>
          <div style="margin-bottom:5px;">• القول المعروف في الرد على من أنكر التصوف</div>
          <div style="margin-bottom:5px;">• رسالة الناصر معروف في الذب عن مجد التصوف</div>
          <div style="margin-bottom:5px;">• القول المعتمد في مشروعية الذكر بالاسم المفرد</div>
          <div style="margin-bottom:5px;">• معراج السالكين ونهاية الواصلين</div>
          <div style="margin-bottom:5px;">• الرسالة العلاوية في الأحكام الشرعية</div>
          <div style="margin-bottom:5px;">• مبادئ التأييد في بعض ما يحتاج إليه المريد</div>
          <div style="margin-bottom:5px;">• المنهاج المفيد في أحكام الفقه والتوحيد</div>
          <div style="margin-bottom:5px;">• النور الأثمد في سنة وضع اليد على اليد في الصلاة</div>
          <div style="margin-bottom:5px;">• دوحة الأسرار في الصلاة على النبي المختار</div>
          <div style="margin-bottom:5px;">• أعذب المناهل في الأجوبة والرسائل</div>
          <div style="margin-bottom:5px;">• الأبحاث العلاوية في الفلسفة الإسلامية</div>
        `
      },
      
      // --- CARTE 2 : BIBLIOGRAPHIE FRANÇAISE ---
      {
        isLongText: true,
        ar: "المراجع الفرنسية",
        fr: `
          <h3 style='color:var(--accent-gold); text-align:center; text-transform:uppercase; margin-bottom:5px;'>II. Bibliographie Française</h3>
          <p style='text-align:center; font-style:italic; font-size:0.9rem; margin-bottom:30px; opacity:0.8;'>Ouvrages traduits en langue française</p>
          
          <div style='color:var(--accent-gold); font-size:1.1rem; margin-bottom:15px; border-bottom:1px solid rgba(212,175,55,0.3); padding-bottom:5px;'>Cheikh Ahmad al-ʿAlawî</div>
          
          <div style="margin-bottom: 25px;">
            • <strong>Lettre ouverte à celui qui critique le soufisme</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">(Al-qawl al-maʿrûf fi l-radd ʿalâ man ankara l-taṣawwuf), traduit de l’arabe et annoté par Manuel Chabry, préface de J.-J. Gonzalez, Entrelacs, 2011.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>L’Arbre aux secrets</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">ou De la signification de la prière sur le Prophète, traduit de l’arabe et annoté par Nabil Badrawi, Albouraq, 2003.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>De la Révélation</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">traduit par M. Chabry et J.-J. Gonzalez, Entrelacs, 2011.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>Sagesse céleste. Traité de soufisme</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">(Al-mawādd al-ghaythiyya), introduction, traduction et notes de M. Chabry et J.-J. Gonzalez, Entrelacs, 2013.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>Les Très Saintes Inspirations</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">ou L’Éveil de la Conscience (Al-minaḥ al-quddûsiyya), présenté, annoté et traduit par Ahmed Benaliwah, Albouraq, 2015.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>Dîwân</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">traduction de Manuel Chabry, La Caravane, 2017.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>Clé de la contemplation</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">Traité de cosmologie musulmane (Miftāḥ al-shuhūd fī maẓāhir al-wujūd), introduction et traduction par Manuel Chabry, La Caravane, 2018.</span>
          </div>

          <div style="margin-bottom: 40px;">
            • <strong>La voie du Taṣawwuf</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">Épître sur la voie soufie (Minhāj at-taṣawwuf), Albouraq, 2006.</span>
          </div>

          
          <div style='color:var(--accent-gold); font-size:1.1rem; margin-bottom:15px; border-bottom:1px solid rgba(212,175,55,0.3); padding-bottom:5px;'>Cheikh Adda Bentounes</div>

          <div style="margin-bottom: 25px;">
            • <strong>La Fraternité des cœurs</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">Le Relié, 2003.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>L’invocation dans le soufisme</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">(Wiqāyat al-dhākirīn), traduit de l’arabe et annoté par Manuel Chabry, ILV Éditions, 2011.</span>
          </div>

          <div style="margin-bottom: 25px;">
            • <strong>Le Chœur des Prophètes</strong><br>
            <span style="font-size:0.9em; opacity:0.8; display:block; margin-top:5px;">Enseignements soufis du Cheikh Adda Bentounès, Albin Michel, 1997.</span>
          </div>
        `
      }
    ]
  }];
