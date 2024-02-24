import { sectionTemplates } from "@/data/sectionTemplate";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useState } from "react";

function editor() {
  const [markdown, setMarkdown] = useState("");
  const [selectedSectionSlugs, setSelectedSectionSlugs] = useState([]);
  const [sectionSlugs, setSectionSlugs] = useState(
    sectionTemplates.map((t) => t.slug)
  );
  const [focusedSectionSlug, setFocusedSectionSlug] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [templates, setTemplates] = useState(sectionTemplates);
  const [showDrawer, toggleDrawer] = useState(false);
  const { backup } = useLocalStorage();
  return (
    <div>
      <h1>I am editor</h1>
    </div>
  );
}

export default editor;
