"use client";
import { IconChevronDown } from "@tabler/icons-react";
import classNames from "classnames";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const questions = [
  {
    key: 1,
    title: "What is GeeksforGeeks?",
    data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`,
    isOpen: false,
  },
  {
    key: 2,
    title: "What GeeksforGeeks offer us?",
    data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
    isOpen: false,
  },
  {
    key: 3,
    title: "Which is the best portal to study Computer Science?",
    data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`,
    isOpen: false,
  },
];

export const FAQ = () => {
  return (
    <section className="section">
      <h2 className={classNames("h2", "text-center")}>FAQ</h2>
      <div className="max-w-xl mx-auto">
        <Accordion type="single" collapsible>
          {questions.map((question) => (
            <AccordionItem key={question.key} value={`item-${question.key}`}>
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>{question.data}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
