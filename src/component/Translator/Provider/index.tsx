import React, { createContext, useContext, useState } from "react";

// Create translation context
const TranslationContext = createContext<any>(null);

// Translation provider component
export const TranslationProvider: React.FC = ({ children }) => {
  // State to store the current language
  const [language, setLanguage] = useState("en");

  // Example translation data
  const translations = {
    en: {
      adminDashboard: "Admin Dashboard",
      dashboard: "Dashboard",
      humanResource: "Human Resource",
      milkParlor: "Milk Parlor",
      cowFeed: "Cow Feed",
      cowMonitor: "Cow Monitor",
      cowSale: "Cow Sale",
      farmExpense: "Farm Expense",
      suppliers: "Suppliers",
      manageCow: "Manage Cow",
      manageCowCalf: "Manage Cow Calf",
      manageStall: "Manage Stall",
      catalog: "Catalog",
      settings: "Settings",
      reports: "Reports",
      staffList: "Staff List",
      userList: "User List",
      employeeSalary: "Employee Salary",
      collectMilk: "Collect Milk",
      saleMilk: "Sale Milk",
      saleDueCollection: "Sale Due Collection",
      routineMonitor: "Routine Monitor",
      vaccineMonitor: "Vaccine Monitor",
      animalPregnancy: "Animal Pregnancy",
      saleList: "Sale List",
      expenseList: "Expense List",
      expensePurpose: "Expense Purpose",
      branch: "Branch",
      userType: "User Type",
      designation: "Designation",
      colors: "Colors",
      animalTypes: "Animal Types",
      vaccines: "Vaccines",
      foodUnit: "Food Unit",
      foodItem: "Food Item",
      monitoringServices: "Monitoring Services",
      totalStaff: "TOTAL STAFF",
      totalCow: "TOTAL COW",
      totalCalf: "TOTAL CALF",
      totalSupplier: "TOTAL SUPPLIER",
      totalCowStalls: "TOTAL COW STALLS",
      totalExpense: "TOTAL EXPENSE",
      totalCollectedMilk: "TOTAL COLLECTED MILK",
      totalSoldMilk: "TOTAL SOLD MILK",
      todayCollectedMilk: "TODAY COLLECTED MILK",
      todaySoldMilk: "TODAY SOLD MILK",
      todayCollectedMilkAmount: "TODAY COLLECTED MILK AMOUNT",
      todaySoldMilkAmount: "TODAY SOLD MILK AMOUNT",
      lastFiveExpenseHistory: "Last Five Expense History",
      date: "Date",
      amount: "Amount",
      jan082023: "Jan 08, 2023",
      nov292022: "Nov 29, 2022",
      jan282021: "Jan 28, 2021",
      mar242021: "Mar 24, 2021",
      feb282020: "Feb 28, 2020",
      shareProfit: "Share Profit",
      officeRent: "Office Rent",
      materials: "Materials",
      copyright: "Copyright @GesCow . All rights reserved ",
      LastFiveMilkSaleHistory: "Last Five Milk Sale History",
      CowFeedChart: "Cow Feed Chart",
      StallNumber: "Stall Number",
      Grass: "Grass",
      Salt: "Salt",
      Water: "Water",
      SetFeedChart: "Set Feed Chart",
      Gram: "Gram",
      Time: "Time",
      KG: "KG",
      Stall: "Stall",
      sign_up: "Sign up",
      phone_number: "Phone Number",
      username: "Username",
      email: "Email",
      password: "Password",
      confirm_password: "Confirm Password",
      have_account: "Have an account?",
      login: "Login",
      phone_number_required: "Phone Number is required",
      phone_number_invalid: "Phone Number must be 8 digits",
      username_required: "Username is required",
      email_required: "Email is required",
      password_required: "Password is required",
      confirm_password_required: "Confirm Password is required",
      register_account: "Register an account",
      login_error: "User does not exist or password is incorrect",
      forgot_password: "Forgot password?",
      no_account: "Don't have an account?",
      login_title: "Log in",
      profile: "Profile",
      logout: "Logout",
      image: "Image",
      staffName: "Staff Name",
      mobileNo: "Mobile No",
      joiningDate: "Joining Date",
      salary: "Salary",
      status: "Status",
      action: "Action",
      searchPlaceholder: "Search...",
      addStaff: "Add Staff",
      staffTable: "Staff Table",
      itemsPerPage: "Items per page",
      page: "Page",
      profileInformation: "Profile Information",
      fullName: "Full Name",
      name: "Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      nid: "NID",
      select: "--Select--",
      presentAddress: "Present Address",
      permanentAddress: "Permanent Address",
      basicSalary: "Basic Salary",
      grossSalary: "Gross Salary",
      resignDate: "Resign Date",
      photo: "Photo",
      updateStaff: "Update Staff",
      informationUpdatedSuccessfully: "Information updated successfully!",
      selectImage: "Select Image",
      Staffstatusupdatedsuccessfully:"Staff status updated successfully",
      UserTable:"User Table",
      adduser:"Add User",
      Userstatusupdatedsuccessfully:"User status updated successfully"



    },
    fr: {
      adminDashboard: "Tableau de bord de l'administrateur",
      dashboard: "Tableau de bord",
      humanResource: "Ressources humaines",
      milkParlor: "Laiterie",
      cowFeed: "Alimentation des vaches",
      cowMonitor: "Surveillance des vaches",
      cowSale: "Vente de vaches",
      farmExpense: "Dépenses de ferme",
      suppliers: "Fournisseurs",
      manageCow: "Gérer les vaches",
      manageCowCalf: "Gérer les veaux",
      manageStall: "Gérer l'étable",
      catalog: "Catalogue",
      settings: "Paramètres",
      reports: "Rapports",
      staffList: "Liste du personnel",
      userList: "Liste des utilisateurs",
      employeeSalary: "Salaire des employés",
      collectMilk: "Collecte de lait",
      saleMilk: "Vente de lait",
      saleDueCollection: "Collection due à la vente",
      routineMonitor: "Surveillance de routine",
      vaccineMonitor: "Surveillance des vaccins",
      animalPregnancy: "Grossesse animale",
      saleList: "Liste de vente",
      expenseList: "Liste des dépenses",
      expensePurpose: "But des dépenses",
      branch: "Branche",
      userType: "Type d'utilisateur",
      designation: "Désignation",
      colors: "Couleurs",
      animalTypes: "Types d'animaux",
      vaccines: "Vaccins",
      foodUnit: "Unité alimentaire",
      foodItem: "Article alimentaire",
      monitoringServices: "Services de surveillance",
      totalStaff: "TOTAL PERSONNEL",
      totalCow: "TOTAL VACHE",
      totalCalf: "TOTAL VEAU",
      totalSupplier: "TOTAL FOURNISSEUR",
      totalCowStalls: "TOTAL BOX DE VACHE",
      totalExpense: "TOTAL DÉPENSE",
      totalCollectedMilk: "TOTAL LAIT COLLECTÉ",
      totalSoldMilk: "TOTAL LAIT VENDU",
      todayCollectedMilk: "LAIT COLLECTÉ AUJOURD'HUI",
      todaySoldMilk: "LAIT VENDU AUJOURD'HUI",
      todayCollectedMilkAmount: "MONTANT DE LAIT COLLECTÉ AUJOURD'HUI",
      todaySoldMilkAmount: "MONTANT DE LAIT VENDU AUJOURD'HUI",
      lastFiveExpenseHistory: "Derniers cinq historique des dépenses",
      date: "Date",
      amount: "Montant",
      jan082023: "8 janv. 2023",
      nov292022: "29 nov. 2022",
      jan282021: "28 janv. 2021",
      mar242021: "24 mars 2021",
      feb282020: "28 févr. 2020",
      shareProfit: "Partager les profits",
      officeRent: "Location de bureau",
      materials: "Matériaux",
      copyright: "Droits d'auteur @GesCow. Tous droits réservés ",
      LastFiveMilkSaleHistory: "Dernier historique des ventes de lait",
      CowFeedChart: "Graphique d'alimentation des vaches",
      StallNumber: "Numéro de l'étable",
      Grass: "Herbe",
      Salt: "Sel",
      Water: "Eau",
      SetFeedChart: "Définir le graphique d'alimentation",
      Quantity: "Quantité",
      Gram: "Gramme",
      Time: "Temps",
      KG: "KG",
      Stall: "Étable",
      sign_up: "S'inscrire",
      phone_number: "Numéro de téléphone",
      username: "Nom d'utilisateur",
      email: "Email",
      password: "Mot de passe",
      confirm_password: "Confirmer le mot de passe",
      have_account: "Vous avez déjà un compte ?",
      login: "Connexion",
      phone_number_required: "Numéro de téléphone requis",
      phone_number_invalid: "Le numéro de téléphone doit contenir 8 chiffres",
      username_required: "Le nom d'utilisateur est requis",
      email_required: "L'email est requis",
      password_required: "Le mot de passe est requis",
      confirm_password_required: "Confirmation du mot de passe requise",
      register_account: "Créer un compte",
      login_error:
        "L'utilisateur n'existe pas ou le mot de passe est incorrect",
      forgot_password: "Mot de passe oublié ?",
      no_account: "Pas de compte?",
      login_title: "Connexion",
      Profile: "Profil",
      Settings: "Paramètres",
      Logout: "Déconnexion",
      image: "Image",
      staffName: "Nom du personnel",
      mobileNo: "Mobile No",
      joiningDate: "Date d'embauche",
      salary: "Salaire",
      status: "Statut",
      action: "Action",
      searchPlaceholder: "Rechercher...",
      addStaff: "Ajouter un personnel",
      staffTable: "Tableau du personnel",
      itemsPerPage: "Éléments par page",
      page: "Page",
      profileInformation: "Informations du Profil",
      fullName: "Nom complet",
      name: "Nom",
      emailAddress: "Adresse e-mail",
      phoneNumber: "Numéro de téléphone",
      nid: "NID",
      select: "--Sélectionnez--",
      presentAddress: "Adresse actuelle",
      permanentAddress: "Adresse permanente",
      basicSalary: "Salaire de base",
      grossSalary: "Salaire brut",
      resignDate: "Date de démission",
      photo: "Photo",
      updateStaff: "Mettre à jour le personnel",
      informationUpdatedSuccessfully: "Informations mises à jour avec succès!",
      selectImage: "Sélectionner une image",
      Staffstatusupdatedsuccessfully:"Mise à jour du statut du personnel réussie",
      UserTable:"Table des utilisateurs",
      adduser:"Ajouter un utilisateur",
      Userstatusupdatedsuccessfully:"Mise à jour du statut du d'utilisateur réussie"





    },
    ar: {
      adminDashboard: "لوحة القيادة للمشرف",
      dashboard: "لوحة القيادة",
      humanResource: "الموارد البشرية",
      milkParlor: "مزرعة الحليب",
      cowFeed: "تغذية البقر",
      cowMonitor: "مراقبة البقر",
      cowSale: "بيع البقر",
      farmExpense: "نفقات المزرعة",
      suppliers: "الموردين",
      manageCow: "إدارة البقر",
      manageCowCalf: "إدارة عجول البقر",
      manageStall: "إدارة المظال",
      catalog: "كتالوج",
      settings: "الإعدادات",
      reports: "تقارير",
      staffList: "قائمة الموظفين",
      userList: "قائمة المستخدمين",
      employeeSalary: "راتب الموظفين",
      collectMilk: "جمع الحليب",
      saleMilk: "بيع الحليب",
      saleDueCollection: "تحصيل مستحقات البيع",
      routineMonitor: "مراقبة الروتينية",
      vaccineMonitor: "مراقبة التطعيمات",
      animalPregnancy: "الحمل الحيواني",
      saleList: "قائمة المبيعات",
      expenseList: "قائمة المصاريف",
      expensePurpose: "غرض المصاريف",
      branch: "فرع",
      userType: "نوع المستخدم",
      designation: "التسمية",
      colors: "الألوان",
      animalTypes: "أنواع الحيوانات",
      vaccines: "اللقاحات",
      foodUnit: "وحدة الطعام",
      foodItem: "بند الطعام",
      monitoringServices: "خدمات المراقبة",
      totalStaff: "الموظفين الإجمالي",
      totalCow: "إجمالي البقر",
      totalCalf: "إجمالي العجول",
      totalSupplier: "إجمالي الموردين",
      totalCowStalls: "إجمالي أكوام البقر",
      totalExpense: "إجمالي المصاريف",
      totalCollectedMilk: "إجمالي الحليب المجموع",
      totalSoldMilk: "إجمالي الحليب المباع",
      todayCollectedMilk: "الحليب المجموع اليوم",
      todaySoldMilk: "الحليب المباع اليوم",
      todayCollectedMilkAmount: "مبلغ الحليب المجموع اليوم",
      todaySoldMilkAmount: "مبلغ الحليب المباع اليوم",
      lastFiveExpenseHistory: "تاريخ آخر خمسة مصاريف",
      date: "تاريخ",
      amount: "المبلغ",
      jan082023: "2023/1/8",
      nov292022: "2022/11/29",
      jan282021: "2021/1/28",
      mar242021: "2021/3/24",
      feb282020: " 2020/2/28  ",
      shareProfit: "مشاركة الأرباح",
      officeRent: "إيجار المكتب",
      materials: "مواد",
      copyright: "حقوق الطبع والنشر @GesCow. جميع الحقوق محفوظة ",
      LastFiveMilkSaleHistory: "تاريخ مبيعات الحليب الأخيرة",
      CowFeedChart: "رسم بياني لتغذية الأبقار",
      StallNumber: "رقم الحظيرة",
      Grass: "عشب",
      Salt: "ملح",
      Water: "ماء",
      SetFeedChart: "تعيين رسم بياني للتغذية",
      Quantity: "الكمية",
      Gram: "جرام",
      Time: "وقت",
      KG: "كيلوجرام",
      Stall: "حظيرة",
      mobile: "رقم الهاتف مطلوب",
      username: "اسم المستخدم مطلوب",
      email: "البريد الإلكتروني مطلوب",
      password: "كلمة المرور مطلوبة",
      confirm_password: "تأكيد كلمة المرور مطلوب",
      sign_up: "التسجيل",
      haveAccount: "هل لديك حساب؟",
      login: "تسجيل الدخول",
      phone_number_required: "رقم الهاتف مطلوب",
      phone_number_invalid: "يجب أن يتكون رقم الهاتف من 8 أرقام",
      username_required: "اسم المستخدم مطلوب",
      email_required: "البريد الإلكتروني مطلوب",
      password_required: "كلمة المرور مطلوبة",
      confirm_password_required: "تأكيد كلمة المرور مطلوب",
      register_account: "سجل حساب",
      phone_number: "رقم الهاتف",
      have_account: "هل لديك حساب؟",
      login_error: "المستخدم غير موجود أو كلمة المرور غير صحيحة",
      forgot_password: "هل نسيت كلمة المرور؟",
      no_account: "ليس لديك حساب؟",
      login_title: "تسجيل الدخول",
      Profile: "الملف الشخصي",
      logout: "تسجيل الخروج",
      image: "صورة",
      staffName: "اسم الموظف",
      mobileNo: "رقم الهاتف المحمول",
      joiningDate: "تاريخ الانضمام",
      salary: "راتب",
      status: "الحالة",
      action: "عمل",
      searchPlaceholder: "ابحث...",
      addStaff: "إضافة موظف",
      staffTable: "جدول الموظفين",
      itemsPerPage: "عناصر في كل صفحة",
      page: "صفحة",
      profileInformation: "معلومات الملف الشخصي",
      fullName: "الاسم الكامل",
      name: "الاسم",
      emailAddress: "عنوان البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      nid: "رقم الهوية الوطنية",
      select: "--اختر--",
      presentAddress: "العنوان الحالي",
      permanentAddress: "العنوان الدائم",
      basicSalary: "الراتب الأساسي",
      grossSalary: "الراتب الإجمالي",
      resignDate: "تاريخ الاستقالة",
      photo: "صورة",
      updateStaff: "تحديث الموظف",
      informationUpdatedSuccessfully: "تم تحديث المعلومات بنجاح!",
      selectImage: "اختر صورة",
      Staffstatusupdatedsuccessfully:" تم تحديث حالة الموظفين بنجاح",
      UserTable:"جدول المستخدمين",
      adduser:"إضافة مستخدم",
      Userstatusupdatedsuccessfully:"تم تحديث حالة الموظفين بنجاح"
      



    },
  };

  const translate = (key: string) => {
    return translations[language][key] || key;
  };
  // Value to provide to consumers of the translation context
  const value = {
    translate,
    setLanguage,
    language,
  };
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to consume translation context
// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = () => {
  return useContext(TranslationContext);
};
