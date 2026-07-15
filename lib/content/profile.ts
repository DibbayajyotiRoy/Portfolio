/**
 * Single source of truth for identity, contact links, and honors.
 *
 * Anything that describes *who* Dibbayajyoti is lives here. Pages render it;
 * they do not restate it. Change a fact once and every page stays correct.
 */

export interface Honor {
  name: string;
  result: string;
  year: number;
  note?: string;
}

export const profile = {
  name: "Dibbayajyoti Roy",
  firstName: "Dibbayajyoti",
  title: "Full Stack Software Engineer",
  employer: {
    name: "Yupcha Softwares Pvt. Ltd",
    since: "July 2025",
  },
  education: {
    degree: "B.Tech in Computer Science",
    institution: "ICFAI University Tripura",
    graduationYear: 2026,
  },
  links: {
    cal: "https://cal.com/dibbayajyoti",
    linkedin: "https://linkedin.com/in/dibbayajyoti-roy/",
    github: "https://github.com/DibbayajyotiRoy",
    x: "https://x.com/dibbayajyoti",
    medium: "https://medium.com/@dibbayajyoti",
  },
  honors: [
    {
      name: "NITA Arjuna 2.0 National Hackathon",
      result: "Winner",
      year: 2025,
      note: "200+ teams",
    },
    {
      name: "Technovate Project Exhibition",
      result: "Winner",
      year: 2025,
    },
    {
      name: "NITA-ISRO Space Hackathon",
      result: "1st Runner-Up",
      year: 2024,
    },
    {
      name: "AI for Bharat Hackathon",
      result: "Top 500",
      year: 2026,
    },
  ] as Honor[],
};
