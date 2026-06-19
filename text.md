Based on the exam guidelines, you should answer in a structured format:

Definition → Importance/Challenges → Why AI Helps → Data Representation → AI Example → Outcomes. 

Below are model exam answers written in the style that would earn good marks.


---

1. Define Drug Toxicity

Drug Toxicity is the harmful or adverse effect caused by a drug on the human body when taken at certain doses, for long periods, or due to interactions with biological systems. Drug toxicity may damage organs such as the liver, kidneys, or heart and can lead to serious health complications.

Importance

Ensures patient safety.

Reduces failure rates in drug development.

Helps pharmaceutical companies identify dangerous compounds early.

Decreases development costs and time.


Challenges

Biological responses vary among individuals.

Toxic effects may appear only after long-term use.

Experimental testing is expensive and time-consuming.

Large amounts of heterogeneous biological data must be analyzed.


Why AI Helps

AI can identify hidden patterns in chemical and biological data and predict toxicity before costly laboratory experiments are conducted.

Data Representation

Molecular fingerprints.

Chemical descriptors.

SMILES sequences.

Molecular graphs.


Example

Problem: Predict whether a new drug candidate is hepatotoxic (toxic to the liver).

Data: Chemical structures represented as molecular fingerprints.

AI Technique: Random Forest or Deep Neural Network.

Outcome: The model predicts whether the compound is toxic or non-toxic, allowing researchers to eliminate dangerous candidates early.


---

2. What is meant by DTI?

Drug-Target Interaction (DTI) refers to the interaction between a drug molecule and a biological target such as a protein, enzyme, receptor, or gene.

Importance

Essential for drug discovery.

Helps identify mechanisms of action.

Assists in finding new therapeutic applications.

Reduces laboratory screening costs.


Challenges

Huge number of possible drug-target pairs.

Limited experimentally verified interactions.

Biological systems are highly complex.


Computational Methods for DTI Prediction

1. Similarity-based methods.


2. Docking-based methods.


3. Network-based methods.


4. Machine Learning methods.


5. Deep Learning methods.



Effect of AI in DTI

AI can predict new interactions from existing data, reducing the need for expensive laboratory experiments.

Datasets for DTI Prediction Contain Two Entities

1. Drugs

Chemical structures.

Molecular fingerprints.

SMILES strings.



2. Targets

Protein sequences.

Protein structures.

Functional information.




Example

Problem: Predict whether a drug binds to a protein associated with cancer.

Data Representation:

Drug → Molecular fingerprint.

Protein → Amino acid sequence embedding.


AI Technique: Deep Neural Network.

Outcome: Prediction score indicating the likelihood of interaction between the drug and protein.


---

3. What is Drug Repurposing?

Drug Repurposing is the process of finding new therapeutic uses for existing approved or investigational drugs.

Importance

Faster than developing new drugs.

Lower cost.

Existing drugs already have safety information.

Useful during disease outbreaks.


Challenges

Massive biomedical data sources.

Complex disease mechanisms.

Difficulty identifying hidden drug-disease relationships.


Effect of AI

AI can discover relationships between drugs, diseases, genes, and proteins that may not be obvious to human researchers.

Data Representation

Drug features.

Disease features.

Gene expression data.

Biological networks.


Example

Problem: Identify approved drugs that could treat Alzheimer's disease.

Data Representation:

Drug-target network.

Disease-gene associations.


AI Technique: Graph Neural Network (GNN).

Outcome: Ranking of existing drugs that have potential effectiveness against Alzheimer's disease.


---

4. What is Antimicrobial Resistance (AMR)?

Antimicrobial Resistance (AMR) occurs when microorganisms such as bacteria, viruses, fungi, or parasites evolve and become resistant to antimicrobial drugs, making treatments ineffective.

Effect on Human Health

Increased mortality.

Longer hospital stays.

Higher healthcare costs.

Reduced effectiveness of antibiotics.


Challenges

Rapid evolution of resistant microbes.

Large genomic datasets.

Difficulty identifying resistance mechanisms.


How AI Helps

AI can analyze genomic and clinical data to predict resistance patterns and recommend effective treatments.

Data Representation

DNA sequences.

Gene expression data.

Clinical records.

Resistance gene profiles.


Example

Problem: Predict whether a bacterial strain is resistant to a specific antibiotic.

Data Representation:

Genome sequence encoded as numerical features.


AI Technique: Support Vector Machine (SVM) or Deep Learning model.

Outcome: Classification of bacterial strains as resistant or susceptible, helping physicians choose appropriate antibiotics.


---

5. Microbial Diagnosis with AI

Definition

Microbial diagnosis is the identification of microorganisms responsible for infections using biological, genomic, or imaging data.

Importance

Early disease detection.

Faster treatment decisions.

Improved patient outcomes.


Challenges

Large amounts of genomic data.

Similarity between microbial species.

Need for rapid diagnosis.


Why AI Helps

AI can process complex datasets and identify microorganisms faster than traditional methods.

Data Representation

Microscopy images.

DNA sequences.

RNA sequences.

Clinical laboratory results.


Example

Problem: Identify bacterial species from microscope images.

AI Technique: Convolutional Neural Network (CNN).

Outcome: Automatic classification of microbial species with high accuracy.


---

Short Definitions to Memorize

Drug Toxicity: Harmful effects caused by a drug on the body.

Drug-Target Interaction (DTI): Interaction between a drug and a biological target such as a protein.

Drug Repurposing: Finding new therapeutic uses for existing drugs.

Antimicrobial Resistance (AMR): The ability of microorganisms to resist antimicrobial treatments.

Microbial Diagnosis: Identification of disease-causing microorganisms using biological data.

If the exam is essay-based, memorizing these five complete answers should cover almost every question listed in the guidelines.


That sentence usually means the instructor may ask fill-in-the-blank, complete the abbreviation, complete the technique name, or complete part of a definition exactly as it appeared in the lecture slides.

Since the course focuses on AI applications in bioinformatics, expect questions like:

Type 1: Complete the abbreviation

1. DTI stands for __________ __________ __________.

Answer: Drug Target Interaction



2. AMR stands for __________ __________ Resistance.

Answer: Antimicrobial



3. CNN stands for __________ Neural Network.

Answer: Convolutional



4. SVM stands for __________ Vector Machine.

Answer: Support



5. GNN stands for __________ Neural Network.

Answer: Graph





---

Type 2: Complete the technique name

1. __________ Forest is a machine learning algorithm used for classification.

Answer: Random



2. Deep __________ Networks can be used for toxicity prediction.

Answer: Neural



3. __________ Learning is a subset of machine learning that uses multiple neural network layers.

Answer: Deep



4. Molecular __________ are commonly used to represent chemical compounds.

Answer: Fingerprints



5. Graph Neural __________ can model biological networks.

Answer: Networks





---

Type 3: Complete the definition

1. Drug toxicity refers to the __________ effects of a drug on the human body.

Answer: harmful



2. Drug repurposing is the process of finding __________ uses for existing drugs.

Answer: new therapeutic



3. Antimicrobial resistance occurs when microorganisms become __________ to antimicrobial drugs.

Answer: resistant



4. A drug target is usually a protein, enzyme, receptor, or __________.

Answer: gene



5. Microbial diagnosis aims to identify disease-causing __________.

Answer: microorganisms





---

Type 4: Complete the AI workflow

1. In DTI prediction, drug molecules may be represented using molecular __________.

Answer: fingerprints



2. Protein targets may be represented using amino acid __________.

Answer: sequences



3. CNNs are mainly used to analyze __________ data.

Answer: image



4. Genomic information is often represented as DNA __________.

Answer: sequences



5. AI models learn patterns from historical __________.

Answer: data





---

Type 5: Match the technique with the application

Application	Technique

Microbial diagnosis from microscope images	CNN
Drug toxicity prediction	Random Forest / DNN
Drug-target interaction prediction	Deep Learning
Drug repurposing using networks	GNN
AMR prediction from genomes	SVM / Deep Learning


Possible exam questions:

1. The most suitable AI technique for analyzing microscopy images is ________.

CNN



2. Drug repurposing using biological networks often employs ________ Neural Networks.

Graph



3. The numerical representation of a drug's chemical structure is called a molecular ________.

fingerprint



4. Predicting whether a bacterium is resistant to an antibiotic is an example of ________ Resistance prediction.

Antimicrobial



5. The interaction between a drug and a protein is known as ________-Target Interaction.

Drug





---

If I were setting the exam, I would especially expect questions on:

DTI abbreviation.

AMR abbreviation.

Drug Repurposing definition.

Molecular Fingerprints.

CNN, SVM, Random Forest, Deep Learning, GNN.

Drug ↔ Protein (the two entities in DTI datasets).

SMILES representation.

DNA sequence representation.


These are the keywords that are most likely to appear as "complete the name/definition" questions.