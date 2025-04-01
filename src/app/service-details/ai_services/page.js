import Link from 'next/link'
import React from 'react';
import Image from 'next/image';


export const metadata = {
  title: "AI Services | GKELITE",
  description: "GKELITE-INFO-Contact",
};

const page = () => {
  return (
    <main className="main">
      <div className="page-title accent-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Service Details</h1>

        </div>
      </div>
      <section id="service-details" className="service-details section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="services-list">
                <Link href="/service-details/ai_services" className="active">AI Services</Link>
                <Link href="/service-details/dynamic_Digital_marketing_solutions">Dynamic Digital Marketing Solutions</Link>
                <Link href="/service-details/b2b_b2c_sales_mastery">B2B & B2C Sales Mastery</Link>
                <Link href="/service-details/bpo_services">BPO Services</Link>
                <Link href="/service-details/talent_acquisition_excellence" >Talent Acquisition Excellence</Link>
              </div>

              <h4>Generative AI Services: Pretrained Models & Fine-Tuning</h4>
              <p>Pretrained models are large-scale AI models that have been trained on massive datasets before being adapted for specific tasks. These models serve as foundational AI systems, containing broad knowledge acquired from diverse sources such as books, articles, images, audio, and code. Some of the most well-known pretrained AI models include:</p>

              <ul>
                <li><i className="bi bi-check-circle"></i> <span><b>GPT (Generative Pre-trained Transformer): </b>
                  Used for natural language understanding, text generation, and conversational AI.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span><b>BERT (Bidirectional Encoder Representations from Transformers): </b>
                  Primarily used for natural language processing (NLP) tasks such as sentiment analysis and text classification.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span><b>Stable Diffusion & DALL·E: </b>
                  Designed for generating high-quality images from text prompts.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span><b>Whisper & Tacotron: </b>
                  Speech-to-text and text-to-speech models that enable voice AI applications.
                </span></li>
              </ul>
              <p>
                Pretrained models are valuable because they reduce the need for training from scratch, saving computational resources, time, and effort. However, for business-specific or domain-specific applications, these models often require fine-tuning.
              </p>
            </div>

            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <Image src="/assets/img/hero-carousel/ai-service-1.png" alt="Generative AI Services" title='Generative AI Services' className="img-fluid services-img" width={300} height={300}/>
              <h3>Fine-Tuned Generative Models and Their Use Cases</h3>
              <p>
                Fine-tuning is the process of adapting a pretrained model to a specific task by training it on a smaller, domain-specific dataset. This customization improves accuracy and performance for targeted applications. Below are some key use cases:
              </p>
              <h6>1. Large Language Models (LLMs) for Business-Specific Applications</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Many businesses develop their own LLMs based on their unique problem statements. </span></li>
                <li><i className="bi bi-check-circle"></i> <span>Fine-tuned LLMs can serve as proprietary AI models, offering tailored responses, industry expertise, and domain-specific intelligence.
                </span></li>
              </ul>
              <p>
                Example: A legal firm fine-tuning GPT-4 on thousands of legal documents to provide AI-powered legal assistance.
              </p>

              <h6>2. Customer Support Chatbots</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Businesses can fine-tune models like GPT-4 on historical customer support tickets, FAQs, and chat logs.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span>The chatbot can provide accurate responses to common queries and escalate complex issues to human agents when necessary.
                </span></li>
              </ul>
              <p>
                Example: An e-commerce company fine-tuning GPT on order tracking, return policies, and product recommendations.              </p>

              <h6>3. Medical Diagnosis & Healthcare AI</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Models like BERT can be fine-tuned on medical research papers, clinical notes, and patient records to assist in diagnosis and decision-making.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span>AI can help doctors analyze symptoms, suggest possible diseases, and recommend treatments.
                </span></li>
              </ul>
              <p>
                Example: A hospital fine-tuning BERT to summarize radiology reports and flag potential anomalies.                </p>

              <h6>4. Finance & Stock Market Analysis</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Financial institutions can fine-tune T5 (Text-to-Text Transfer Transformer) to summarize financial reports, analyze stock trends, and generate investment insights.  </span></li>
                <li><i className="bi bi-check-circle"></i> <span>AI-driven analysis helps traders make informed decisions and predict market movements.
                </span></li>
              </ul>
              <p>
                Example: A hedge fund fine-tuning an AI model to process real-time stock market data and provide predictive analytics.</p>

              <h6>5. AI-Generated Art & Creative Content</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Customizing Stable Diffusion allows artists and designers to create unique, stylized images based on specific themes or artistic preferences.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span>AI can be trained on an artist’s previous works to generate new pieces in their signature style.
                </span></li>
              </ul>
              <p>
                Example: A fashion brand fine-tuning AI to generate unique textile patterns for clothing designs. </p>

              <h6>6. Voice Cloning & Speech AI</h6>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Voice AI models like Whisper (speech-to-text) and Tacotron (text-to-speech) can be fine-tuned on specific voices for realistic voice synthesis.
                </span></li>
                <li><i className="bi bi-check-circle"></i> <span>Businesses can use this for personalized virtual assistants, audiobook narration, and AI-powered voiceovers.
                </span></li>
              </ul>
              <p>
                Example: A media company training AI on a celebrity’s voice to generate realistic voiceovers for advertisements.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default page