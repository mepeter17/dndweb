export default class CommonDataManager
{
    class_button = 'Barbarian';
    race_button = 'Dwarf';
    
    static myInstance = null;

    _stats = "empty";
    _cats = "empty";

    _gender = "";
    _name = "";
    _ft = "";
    _in = "";
    _lbs = "";
    _bio = "";

    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getStats() {
        return this._stats;
    }

    setStats(stats) {
        this._stats = stats;
    }

    getCats()
    {
      return this._cats;
    }

    setCats(cats)
    {
      this._cats = cats;
    }
}
