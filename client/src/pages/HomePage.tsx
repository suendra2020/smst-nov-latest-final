import Layout from '@/components/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Carousel from '@/components/Carousel';

export default function HomePage() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Home/Carousel Section */}
      <section id="home">
        <Carousel />
      </section>

      {/* Original Content Section */}
      <section className="smst-section  homepage-text relative z-10">
	        <div className="container mx-auto px-4">
	          <div
	            ref={titleRef}
	            className={`transition-all duration-700 ${
	              titleVisible ? 'animate-fade-in-up' : 'opacity-0'
	            }`}
	          >
	            <h2 className="smst-section-title">Welcome to Sai Master Seva Trust</h2>
	            <p className="smst-section-subtitle">Dedicated to Spiritual Growth and Community Service</p>
	          </div>
	
	          <div
	            ref={contentRef}
	            className={`mt-8 transition-all duration-700 ${
	              contentVisible ? 'animate-fade-in-up' : 'opacity-0'
	            }`}
	          >
	            <p className="text-gray-700 m-4">
	              "అమ్మా! సుబ్బరామయ్య అంటే ఏమనుకున్నావు? ఇద్దరు సజీవ మహానీయులను సేవించిన మహనీయుడు" అని శ్రీ భరద్వాజ మాష్టారు గారి చేత శ్లాఘించబడిన శ్రీ పెసల సుబ్బరామయ్య గారే ఈ 'సాయి మాష్టర్ సేవా ట్రస్ట్' వ్యవస్థాపకులు. భక్తుల చేత "శ్రీ సార్" గా పూజలందుకుని వారు మహాసమాధి అనంతరం కూడా సర్వ ప్రేరణాధికారియై, సర్వభూత హృదయాంతర్వర్తియై, సర్వ సమర్దుడిగా ఈ ట్రస్ట్ నడిపే తీరు అద్భుతం. తాము సేవించిన దత్త సాంప్రదాయానికి చెందిన త్రిమూర్తులు (శ్రీ సాయి, శ్రీ వెంకయ్య స్వామి, శ్రీ భరద్వాజ మాష్టారు) వలె తమ మహత్యాన్ని లోకానికి వెల్లడి చేయక, పైకి సాధారణంగా కనిపిస్తూ తమను ఆశ్రయించిన వారిని ధర్మ మార్గంలో నడిపిస్తూ భక్త రక్షణ గావించే విధానం మహాద్భుతం. అట్టి 'శ్రీ సార్' జీవిత విశేషాలను, "శ్రమతో సేవ సేవతో కైవల్యం" సందేశంతో భక్తులకు ప్రసాదించిన దివ్యానుభవాలను తెలుసుకునేందుకు 'పుస్తకాలు, డౌన్లోడ్లు' సెక్షన్ చూడండి...
	            </p>
	
	            <br />
	            <p className="m-4">
	              "What do you think of Subbaramaiah? He is a great Mahatma (Sadguru) who has served two great Mahatmas" as praised by Sri Ekkirala Bharadwaja Master. The same 'Pesala Subbaramaiah' fondly called as 'SIR' by His devotees is the founder of 'Sai Master Seva Trust'. Even after His MahaSamadhi in 2017, the manner in which HE runs this Trust and protects His devotees by guiding them in the Righteous path is amazing. To know more about His Life, Preachings and the Divine Experiences bestowed upon His devotees, please check the 'Books and Downloads' section...
	            </p>
	
	            <p className="m-4 font-bold">
	              Sai Swamy Master
	              <br />
	              శ్రీ శిరిడీ సాయిబాబా
	              <br />
	              శ్రీ వెంకయ్య స్వామి
	              <br />
	              శ్రీ ఎక్కిరాల భరద్వాజ
	            </p>
	
	            <p className="m-4">
	              దీనజనోద్ధరణ కొరకు, భక్త సంరక్షణ కొరకు, ముముక్షువులకు మార్గం చూపడానికి ఆ పరమాత్మ మన మధ్య సద్గురువుగా అవతరిస్తారు. అట్టి సద్గురువులలో శాస్త్రాలలో నిర్దేశించబడిన సర్వవ్యాపకత్వం, సర్వసమర్ధత, సర్వజ్ఞత్వాలు సంపూర్ణముగా ప్రకటమవుతాయి. అలా ప్రకటమయినవారే గొలగమూడిలో వెలసిన అవధూత శ్రీ వెంకయ్యస్వామివారు.
	            </p>
	
	            <p className="m-4">
	              మహాత్ములు శరీరం చాలించిన తర్వాత గూడా నిత్యసత్యులై కోరిన చోట శరీరంతో కన్పించగలరు. అదృశ్యంగా అంతటా నిండియుండి ఎల్లవేళలా తమ భక్తుల ప్రార్థనలను, చేష్టలను సాక్షిగా గమనిస్తూనే ఉంటారు. మనము ఏమారి వారిని ప్రార్థించకున్నా, వారు మనలను అన్ని వేళలా రక్షిస్తారు. శ్రీ స్వామివారి మహాసమాధి అనంతరం జరుగుతున్న లీలలే అందుకు నిదర్శనం. శ్రీ స్వామివారికి మతభేదం లేదు. వారి సమాధిని అన్ని కులాల, మతాల వారూ దర్శించి బాధలను తొలగించుకుంటున్నారు.
	            </p>
	
	            <p className="m-4">
	              నిరంతర సద్గురు స్మరణ వలన భవభంధాలు దగ్ధమై తనకు, గురువుకూ భేదం లేకుండా పోయి భక్తుడు ముక్తుడవుతాడన్నది శాస్త్ర వాక్యం. శ్రీ స్వామివారి జీవితం సాధువులకు ఆదర్శప్రాయమైన కొండపై నున్న జ్యోతివలె మార్గదర్శకమైనది. సర్వజీవుల మీద ప్రేమ, నిరాడంబరత, ధ్యేయముపై శ్రద్ధ, కార్యదీక్ష, వైరాగ్యము, ధర్మాచరణ, ఇంద్రియ నిగ్రహము వారు ఆచరించి మనకు చూపిన దివ్య మార్గాలు.
	            </p>
	
	            <p className="m-4">
	              శ్రీ సాయినాధుని, శ్రీ రమణ మహర్షినీ మనం చూడలేదుగానీ, 1982 వరకూ, మన మధ్య జీవించిన శ్రీ స్వామివారిని దర్శించగలిగామనుకుంటే మనమెంత అదృష్టవంతులమో తెలుస్తుంది. వారు శరీరంతో వుండగా తమ విశ్వరూపాన్ని, మహిమనూ చాలా గోప్యంగా వుంచారు. తమ కీర్తి వ్యాపనాన్ని చిత్రమైన రీతులలో అరికట్టేవారు. మహాసమాధి తరువాతనే భక్తులు తమ దివ్యానుభవాలను ఒకరితో ఒకరు చెప్పుకొని తన్మయత్వం పొందే భాగ్యం కలిగింది.
	            </p>
	
	            <p className="m-4">
	              ఒకసారి శ్రీ స్వామివారు గొలగమూడిలోని ఆశ్రమ ప్రదేశాన్ని (కోనేరు మరియు ఆంజనేయస్వామి మందిరము ఉన్న ప్రదేశాన్ని) చూపిస్తూ, "అయ్యా, ఇక్కడ పద్నాలుగు గతాలనుండి అన్నం రాసులు రాసులుగా పొగలెగురుతోంది, వేలు పెట్టినవాడేడి?" అని సెలవిచ్చారు. "అన్నం పొగలెగురుతోంది" అంటే, ఈ ప్రదేశమంతా, స్వామివారియొక్క తపశ్శక్తితో పొంగిపొరలుతోంది అని భావం.
	            </p>
	          </div>
	        </div>
	      </section>
	    </Layout>
	  );
	}
